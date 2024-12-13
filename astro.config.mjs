import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Embotic Documentation',
			social: {
				github: 'https://github.com/Embotic-xyz',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Start Here', slug: 'introduction/starthere' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});