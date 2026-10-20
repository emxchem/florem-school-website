import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { submitEnquiry } from '../lib/enquiry'
import { school } from '../data/school'

const PROGRAMS = [
  'Creche',
  'Playgroup',
  'Nursery',
  'Primary',
  'Child Care Training',
  'After-School Care',
  'General Enquiry',
]

type FormErrors = Partial<Record<keyof EnquiryFormData, string>>

type EnquiryFormData = {
  parentName: string
  phone: string
  email: string
  program: string
  message: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactSection() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    parentName: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'notice'>('idle')

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!formData.parentName.trim()) next.parentName = 'Please enter your name.'
    if (!formData.phone.trim()) next.phone = 'Please enter a phone number.'
    if (!formData.email.trim()) next.email = 'Please enter an email address.'
    else if (!EMAIL_REGEX.test(formData.email))
      next.email = 'Please enter a valid email address.'
    if (!formData.program) next.program = 'Please select a program of interest.'
    if (!formData.message.trim()) next.message = 'Please write a message.'
    else if (formData.message.trim().length < 10)
      next.message = 'Please write a slightly longer message (at least 10 characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    await submitEnquiry({ ...formData })
    // No backend is connected: always show the honest demonstration notice.
    setStatus('notice')
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32 border-y border-white/60">
      <SectionContainer>
        <SectionHeading
          eyebrow="Contact and Enquiry"
          heading="Let's Talk About Your Child's Next Step"
          support="We would love to help you learn more about FLOREM and the programs available for your family."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Contact information */}
          <div className="lg:col-span-4 space-y-6">
            <Card padded={false}>
              <div className="p-6">
                <h3 className="mb-4 text-lg">Get in touch</h3>
                <p className="mb-6 text-sm text-muted">
                  Use the form below, or contact the school directly using the details below.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text">Address</p>
                      <p className="text-sm text-muted">{school.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text">Phone</p>
                      <a
                        href={`tel:${school.phoneLink}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {school.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="flex-shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-text">Email</p>
                      <p className="text-sm text-muted">
                        {school.email} <span className="text-xs font-semibold text-primary uppercase">confirmation pending</span>
                      </p>
                      <p className="text-xs text-muted mt-1">
                        Email address shown exactly as it appears in the school's flyer and must be
                        confirmed by the school owner before use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-8">
            <Card padded={false}>
              <form
                onSubmit={handleSubmit}
                className="p-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                noValidate
              >
                <div className="sm:col-span-2 lg:col-span-3">
                  <label htmlFor="parent-name" className="block mb-2 text-sm font-medium text-text">
                    Parent / Guardian Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="parent-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className={`block w-full rounded-lg border px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.parentName ? 'border-red-500' : 'border-muted'
                    }`}
                    aria-describedby={errors.parentName ? 'error-parent-name' : undefined}
                    aria-invalid={!!errors.parentName}
                  />
                  {errors.parentName && (
                    <p id="error-parent-name" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.parentName}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-text">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`block w-full rounded-lg border px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.phone ? 'border-red-500' : 'border-muted'
                    }`}
                    aria-describedby={errors.phone ? 'error-phone' : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p id="error-phone" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`block w-full rounded-lg border px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-muted'
                    }`}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3 lg:col-span-3">
                  <label htmlFor="program" className="block mb-2 text-sm font-medium text-text">
                    Program of Interest <span className="text-primary">*</span>
                  </label>
                  <select
                    id="program"
                    required
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="block w-full rounded-lg border border-muted px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-describedby={errors.program ? 'error-program' : undefined}
                    aria-invalid={!!errors.program}
                  >
                    <option value="">Select a program</option>
                    {PROGRAMS.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p id="error-program" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.program}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-6 lg:col-span-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-text">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`block w-full rounded-lg border px-4 py-3 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      errors.message ? 'border-red-500' : 'border-muted'
                    }`}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="error-message" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-6 lg:col-span-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Send className="w-4 h-4 mr-2 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> Send Enquiry
                      </>
                    )}
                  </Button>
                </div>

                {status === 'notice' && (
                  <div className="sm:col-span-6 lg:col-span-6 rounded-lg bg-primary/10 border border-primary/20 p-6 text-primary">
                    <p className="font-semibold">Demonstration — not yet delivered.</p>
                    <p className="text-sm mt-2">
                      No backend is connected yet, so this enquiry has not been sent. Please call
                      {school.phone} or contact the school directly. Once the school owner
                      confirms the delivery destination, this form can be connected to a webhook
                      or CRM via src/lib/enquiry.ts.
                    </p>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
