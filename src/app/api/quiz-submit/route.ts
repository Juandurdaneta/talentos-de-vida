import { NextRequest, NextResponse } from "next/server";
import { talentProfiles } from "@/data/quiz-results";
import { TalentType } from "@/lib/quiz-logic";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID;
const GHL_PIPELINE_STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID;
const GHL_EMAIL_FROM = process.env.GHL_EMAIL_FROM;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://talentosdevida.com";

interface QuizSubmitPayload {
  firstName: string;
  email: string;
  quizAnswers: Record<string, string>;
  resultTalent: TalentType;
  talentName: string;
}

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

async function createOrUpdateContact(data: QuizSubmitPayload): Promise<string> {
  const tags = [
    "quiz-lead",
    `talento-${data.resultTalent}`,
  ];

  const response = await fetch(`${GHL_API_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      firstName: data.firstName,
      email: data.email,
      locationId: GHL_LOCATION_ID,
      tags,
      source: "Quiz de Talentos",
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);

    if (response.status === 400 && errorBody?.meta?.contactId) {
      const existingId = errorBody.meta.contactId;
      await fetch(`${GHL_API_BASE}/contacts/${existingId}`, {
        method: "PUT",
        headers: ghlHeaders(),
        body: JSON.stringify({ tags }),
      });
      return existingId;
    }

    throw new Error(`Failed to create contact: ${response.status} - ${JSON.stringify(errorBody)}`);
  }

  const result = await response.json();
  return result.contact.id;
}

async function createOpportunity(
  contactId: string,
  data: QuizSubmitPayload
): Promise<string> {
  const profile = talentProfiles[data.resultTalent];

  const response = await fetch(`${GHL_API_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      pipelineId: GHL_PIPELINE_ID,
      pipelineStageId: GHL_PIPELINE_STAGE_ID,
      locationId: GHL_LOCATION_ID,
      contactId,
      name: `${data.firstName} - ${profile?.name || data.resultTalent} Quiz`,
      status: "open",
      source: "Quiz de Talentos",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Failed to create opportunity: ${response.status} - ${error}`
    );
  }

  const result = await response.json();
  return result.opportunity?.id || result.id;
}

function buildResultsEmail(data: QuizSubmitPayload): string {
  const profile = talentProfiles[data.resultTalent];
  if (!profile) {
    return `<p>Gracias por completar nuestro quiz, ${data.firstName}! Tu talento: ${data.resultTalent}.</p>`;
  }

  const resultsUrl = `${SITE_URL}/quiz/results/${data.resultTalent}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#F9F8FB;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9F8FB;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#3891A2;padding:40px 40px 30px;text-align:center;">
              <p style="color:#F9BA58;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">
                Tu Talento Revelado
              </p>
              <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px;font-weight:normal;">
                ${data.firstName}, Eres
              </h1>
              <h2 style="color:#F9BA58;font-size:32px;margin:0 0 8px;font-style:italic;font-weight:normal;">
                ${profile.name}
              </h2>
              <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;">
                ${profile.tagline}
              </p>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:30px 40px 10px;text-align:center;">
              <p style="color:#374151;font-size:18px;font-style:italic;margin:0;">
                "${profile.headline}"
              </p>
            </td>
          </tr>

          <!-- Identity Lost -->
          <tr>
            <td style="padding:20px 40px 10px;">
              <h3 style="color:#3891A2;font-size:16px;margin:0 0 8px;">Tu Identidad Perdida:</h3>
              <p style="color:#6B7280;font-size:15px;line-height:1.7;margin:0 0 14px;">
                ${profile.identityLost}
              </p>
            </td>
          </tr>

          <!-- Why Gold -->
          <tr>
            <td style="padding:10px 40px 10px;">
              <h3 style="color:#F9BA58;font-size:16px;margin:0 0 8px;">Por Qué Es Oro:</h3>
              <p style="color:#6B7280;font-size:15px;line-height:1.7;margin:0 0 14px;">
                ${profile.whyGold}
              </p>
            </td>
          </tr>

          <!-- Examples -->
          <tr>
            <td style="padding:10px 40px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FDF6E3;border-radius:12px;padding:24px;">
                <tr>
                  <td style="padding:24px;">
                    <h3 style="color:#374151;font-size:16px;margin:0 0 16px;">Ejemplos de Tu Poder:</h3>
                    ${profile.examples
                      .map(
                        (ex) =>
                          `<p style="margin:0 0 8px;color:#6B7280;font-size:14px;">✓ ${ex}</p>`
                      )
                      .join("")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Daysi's Message -->
          <tr>
            <td style="padding:10px 40px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#3891A2;border-radius:12px;">
                <tr>
                  <td style="padding:24px;text-align:center;">
                    <p style="color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px;">Mensaje de Daysi</p>
                    <p style="color:#ffffff;font-size:16px;font-style:italic;line-height:1.7;margin:0;">
                      "${profile.daysisMessage}"
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:10px 40px 20px;text-align:center;">
              <a href="${resultsUrl}"
                 style="display:inline-block;background-color:#F9BA58;color:#374151;text-decoration:none;padding:14px 32px;border-radius:30px;font-size:15px;font-weight:bold;letter-spacing:0.5px;">
                Ver Mis Resultados Completos
              </a>
            </td>
          </tr>

          <!-- Consultation CTA -->
          <tr>
            <td style="padding:10px 40px 30px;text-align:center;">
              <p style="color:#6B7280;font-size:14px;margin:0 0 12px;">
                ¿Lista para transformar tu talento en libertad?
              </p>
              <a href="${SITE_URL}/contacto"
                 style="color:#3891A2;font-size:14px;text-decoration:underline;">
                Hablar con Daysi
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F9F8FB;padding:24px 40px;text-align:center;border-top:1px solid #E5E7EB;">
              <p style="color:#9CA3AF;font-size:12px;margin:0 0 4px;">
                Talentos de Vida &bull; Daysi Aldaz
              </p>
              <p style="color:#9CA3AF;font-size:12px;margin:0;">
                Recibiste este email porque completaste nuestro Quiz de Talentos.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

async function sendResultsEmail(
  contactId: string,
  data: QuizSubmitPayload
): Promise<{ success: boolean; error?: string }> {
  const profile = talentProfiles[data.resultTalent];
  const subject = `${data.firstName}, tu talento es: ${profile?.name || data.resultTalent}`;
  const html = buildResultsEmail(data);

  const response = await fetch(`${GHL_API_BASE}/conversations/messages`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      type: "Email",
      contactId,
      locationId: GHL_LOCATION_ID,
      subject,
      html,
      message: html,
      emailFrom: `Talentos de Vida <${GHL_EMAIL_FROM}>`,
    }),
  });

  const responseBody = await response.text();

  if (!response.ok) {
    console.error(`Failed to send email: ${response.status} - ${responseBody}`);
    return { success: false, error: `Email API ${response.status}: ${responseBody}` };
  }

  console.log("Email sent successfully:", responseBody);
  return { success: true };
}

export async function POST(request: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.warn("GHL API credentials not configured");
      return NextResponse.json(
        { success: true, message: "Submitted (GHL not configured)" },
        { status: 200 }
      );
    }

    const data: QuizSubmitPayload = await request.json();

    // 1. Create or update contact in GHL
    const contactId = await createOrUpdateContact(data);

    // 2. Create opportunity in pipeline
    if (GHL_PIPELINE_ID && GHL_PIPELINE_STAGE_ID) {
      await createOpportunity(contactId, data);
    }

    // 3. Send results email
    let emailStatus: { success: boolean; error?: string } = { success: false, error: "Email not configured" };
    if (GHL_EMAIL_FROM) {
      emailStatus = await sendResultsEmail(contactId, data);
    }

    return NextResponse.json({
      success: true,
      message: "Quiz submitted successfully",
      emailSent: emailStatus.success,
      emailError: emailStatus.error,
    });
  } catch (error) {
    console.error("Quiz submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to submit quiz",
      },
      { status: 500 }
    );
  }
}
