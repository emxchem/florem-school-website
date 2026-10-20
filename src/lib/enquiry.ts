/*
 * Enquiry submission handler — ISOLATED from the UI.
 *
 * No backend is connected in this demonstration. To wire up a real delivery
 * mechanism (n8n webhook, school API endpoint, or CRM), replace the body of
 * submitEnquiry() with a fetch() call to the verified endpoint. Do not invent
 * endpoints, and do not store sensitive student information — only
 * parent/guardian contact information is collected.
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
  demo: boolean
  message: string
}

/**
 * Submits an admission enquiry.
 *
 * Current behaviour (demonstration): resolves after a short delay with
 * ok: false and a clear notice that the message was NOT delivered, because no
 * backend endpoint has been configured by the school.
 */
export async function submitEnquiry(
  data: EnquiryFormData,
): Promise<EnquiryResult> {
  // `data` is intentionally unused while no backend endpoint is connected.
  void data

  // Simulate network delay only while no backend exists.
  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    ok: false,
    demo: true,
    message:
      'Demonstration mode: no backend is connected, so this enquiry has not been delivered. ' +
      'Please call 09130000504 or contact the school directly. The school owner can connect ' +
      'this form to an n8n webhook, API endpoint, or CRM via src/lib/enquiry.ts.',
  }
}
