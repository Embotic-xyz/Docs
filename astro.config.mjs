import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Embotic Documentation',
			social: {
				github: 'https://github.com/Embotic-xyz',
				discord: 'https://discord.gg/d9j4WkTTns',
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
						{ label: 'Setupping a server', slug: 'guides/serversetup' },
					],
				},
				{	label: 'Errors',
					items: [
						{ label: 'About errors', slug: 'errors/general' },
						{ label: '404', slug: 'errors/404' },
						{ label: '500', slug: 'errors/500' },
						{ label: 'Email Verification', slug: 'errors/emailverification' },
/*						{ label: '503', slug: 'errors/503' },
						{ label: '504', slug: 'errors/504' },
						{ label: '401', slug: 'errors/401' },
*/
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