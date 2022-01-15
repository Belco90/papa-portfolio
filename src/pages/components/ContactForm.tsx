import type { FormEvent } from 'react'

const COMMON_LABEL_CLASSES = 'font-bold'

const COMMON_INPUT_CLASSES =
  'block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

const ContactForm = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('TODO: submit form')
  }

  return (
    <form action="" method="POST" onSubmit={handleFormSubmit}>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Nombre</span>{' '}
            <input
              type="text"
              name="full-name"
              required
              className={COMMON_INPUT_CLASSES}
            />
          </label>
          <label className="block">
            <span className={COMMON_LABEL_CLASSES}>Correo electrónico</span>{' '}
            <input
              type="email"
              name="email"
              required
              className={COMMON_INPUT_CLASSES}
            />
          </label>
        </div>

        <label className="block">
          <span className={COMMON_LABEL_CLASSES}>Asunto</span>{' '}
          <input
            type="text"
            name="subject"
            required
            className={COMMON_INPUT_CLASSES}
          />
        </label>

        <label className="block">
          <span className={COMMON_LABEL_CLASSES}>Mensaje</span>{' '}
          <textarea
            name="message"
            required
            placeholder="¡Déjame aquí tu mensaje!"
            rows={6}
            className={`${COMMON_INPUT_CLASSES} placeholder:text-slate-400 placeholder:italic`}
          />
        </label>
        <button
          type="submit"
          className="w-fit font-bold py-2 px-6 border-2 bg-brand-500 rounded-md text-white hover:bg-brand-700 active:bg-brand-800 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default ContactForm
