import type { DefaultSeoProps } from 'next-seo'

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
	titleTemplate: '%s | Cristóbal Beltrán',
	defaultTitle: 'Cristóbal Beltrán',
	description: 'Animación turística y hostelería',
	openGraph: {
		type: 'website',
		url: 'https://cristobalbeltran.es/',
		title: 'Cristóbal Beltrán',
		siteName: 'Animación turística y hostelería',
	},
}
