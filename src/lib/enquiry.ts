/*
 * Enquiry submission handler — CONNECTED TO N8N WEBHOOK.
 *
 * The form data is sent to the n8n webhook endpoint configured via
 * VITE_FLOREM_ENQUIRY_WEBHOOK_URL environment variable.
 *
 * Security:
 * - No credentials or private keys are exposed in frontend code.
 * - CORS is handled by the n8n webhook configuration.
 * - Only parent/guardian contact information is collected.
 */

export type EnquiryFormData = {
  parentName: string
  phone: string
  email: string
  program: string
  message: string
}

export type EnquiryResult = {
  ok: boolean
  success: boolean
  demo: boolean
  message: string
}

/**
 * Submits an admission enquiry to the n8n webhook.
 *
 * @param data - The form data collected from the contact form.
 * @returns Promise resolving to an EnquiryResult indicating success/failure.
 *
 * Webhook: POST https://sprtsamurai.app.n8n.cloud/webhook/florem
 * JSON body fields: fullName, email, phone, program, message, submittedAt, source
 */
export async function submitEnquiry(
  data: EnquiryFormData,
): Promise<EnquiryResult> {
  // Use environment variable for the webhook URL, with fallback to the production URL.
  const webhookUrl = import.meta.env.VITE_FLOREM_ENQUIRY_WEBHOOK_URL ||
    'https://sprtsamurai.app.n8n.cloud/webhook/florem'

  const payload = {
    fullName: data.parentName,
    email: data.email,
    phone: data.phone,
    program: data.program,
    message: data.message,
    submittedAt: new Date().toISOString(),
    source: 'FLOREM School Website',
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return {
        ok: true,
        success: true,
        demo: false,
        message: 'Your enquiry has been submitted successfully. The school will contact you soon.',
      }
    }

    // Webhook returned an error response
    return {
      ok: false,
      success: false,
      demo: false,
      message:
        result.message ||
        'An error occurred while processing your enquiry. Please try again later.',
    }
  } catch (error) {
    // Network error or CORS issue
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      ok: false,
      success: false,
      demo: false,
      message:
        'Unable to connect to the enquiry server. Please check your internet connection and try again. ' + message,
    }
  }
}