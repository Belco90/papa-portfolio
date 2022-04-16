import toast from 'react-hot-toast'
import Link from '~/components/Link'
import type { FormEvent } from 'react'
import { useState } from 'react'

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT

const COMMON_LABEL_CLASSES = 'font-bold'

const COMMON_INPUT_CLASSES =
  'block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-300 focus:ring focus:ring-brand-200 focus:ring-opacity-50'

const ERROR_MESSAGE = (
  <div>
    Algo salió mal, pero recuerda que puedas contactarme en{' '}
    <Link href="mailto:cbs.m61@gmail.com">cbs.m61@gmail.com</Link>
  </div>
)

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    event.preventDefault()
    const form = event.target as HTMLFormElement

    if (!FORM_ENDPOINT) {
      toast.error(ERROR_MESSAGE)
      return
    }

    const formData = new FormData(form)
    const resp = await fetch(FORM_ENDPOINT, { method: 'POST', body: formData })

    if (resp.ok) {
      toast.success('¡Mensaje enviado con éxito!')
      form.reset()
    } else {
      toast.error(ERROR_MESSAGE)
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Nombre</span>{' '}
            <input
              name="full-name"
              type="text"
              required
              className={COMMON_INPUT_CLASSES}
            />
          </label>
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Correo electrónico</span>{' '}
            <input
              name="email"
              type="email"
              required
              className={COMMON_INPUT_CLASSES}
            />
          </label>
        </div>

        <label className="block">
          <span className={COMMON_LABEL_CLASSES}>Mensaje</span>{' '}
          <textarea
            name="message"
            required
            placeholder="¡Déjame aquí tu mensaje!"
            rows={6}
            className={`${COMMON_INPUT_CLASSES} placeholder:italic placeholder:text-slate-400`}
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit rounded-md border-2 bg-brand-100 py-2 px-6 font-bold text-brand-800 transition duration-300 hover:bg-brand-200 focus:ring focus:ring-brand-200 focus:ring-opacity-50 active:bg-brand-500 disabled:bg-neutral-500"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
