import { useForm } from 'react-hook-form'

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT

const COMMON_LABEL_CLASSES = 'font-bold'

const COMMON_INPUT_CLASSES =
  'block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

interface FormData {
  fullName: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    formState,
    handleSubmit: submitWrapper,
    reset,
  } = useForm<FormData>()

  const handleFormSubmit = submitWrapper(async (data) => {
    if (!FORM_ENDPOINT) {
      throw new Error('Missing form endpoint')
      // TODO: show error toast
    }

    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }

    const resp = await fetch(FORM_ENDPOINT, { method: 'POST', body: formData })

    if (resp.ok) {
      console.log('success')
      // TODO: show success toast
      reset()
    } else {
      console.log('fail')
      // TODO: show error toast
    }
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Nombre</span>{' '}
            <input
              type="text"
              required
              className={COMMON_INPUT_CLASSES}
              {...register('fullName')}
            />
          </label>
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Correo electrónico</span>{' '}
            <input
              type="email"
              required
              className={COMMON_INPUT_CLASSES}
              {...register('email')}
            />
          </label>
        </div>

        <label className="block">
          <span className={COMMON_LABEL_CLASSES}>Mensaje</span>{' '}
          <textarea
            required
            placeholder="¡Déjame aquí tu mensaje!"
            rows={6}
            className={`${COMMON_INPUT_CLASSES} placeholder:text-slate-400 placeholder:italic`}
            {...register('message')}
          />
        </label>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-fit font-bold py-2 px-6 border-2 bg-brand-500 rounded-md text-white hover:bg-brand-700 active:bg-brand-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors disabled:bg-neutral-500"
        >
          {formState.isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
