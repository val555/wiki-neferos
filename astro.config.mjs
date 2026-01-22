// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			// ============================================
			// 1. METADATA
			// ============================================
			title: 'Wiki Neferos',
			description: 'Bible d\'univers et wiki personnel du roman Neferos. Documentation détaillée de l\'univers de fantasy.',
			
			logo: {
				src: './src/assets/neferos-universe-logo.png',
				replacesTitle: false, // true = cache le texte "Wiki Neferos" pour ne montrer que le logo
			},
			// ============================================
			// 2. LIENS SOCIAUX (TABLEAU, pas objet)
			// ============================================
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ValentinNeo/wiki-neferos' },
			],

			// ============================================
			// 3. NAVIGATION LATÉRALE
			// ============================================
			sidebar: [
				// ---------- GROUPE 1 : Introduction ----------
				{
					label: '🏠 Accueil',
					items: [
						{ label: 'Bienvenue', slug: 'intro/accueil' },
						{ label: 'À propos du projet', slug: 'intro/apropos' },
					],
				},

				// ---------- GROUPE 2 : Géographie et Lieux ----------
				{
					label: '🪐 Galaxie & Planètes',
					autogenerate: { directory: 'planetes' },
				},

				// ---------- GROUPE 3 : Langues et Culture ----------
				{
					label: '🧬 Peuples et Cultures',
					autogenerate: { directory: 'peuples' },
				},

				// ---------- GROUPE 4 : Langues et Culture ----------
				{
					label: '⚙️ Concepts',
					autogenerate: { directory: 'concepts' },
				},

				// ---------- GROUPE 5 : Personnages ----------
				{
					label: '👥 Codex des Personnages',
					autogenerate: { directory: 'personnages' },
				},				

				// ---------- GROUPE 6 : Glossaire ----------
				{
					label: '📖 Glossaire',
					autogenerate: { directory: 'glossaire' },
				},

				/* ---------- GROUPE 7 : Ressources externes (liens normaux, sans icon) ----------
				{
					label: '🔗 Ressources Externes',
					items: [
						{ label: 'Documentation Starlight', link: 'https://starlight.astro.build' },
						{ label: 'Astro Docs', link: 'https://docs.astro.build' },
					],
				},
				*/
			],

			// ============================================
			// 4. PERSONNALISATION AVANCÉE
			// ============================================
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },

			customCss: [
				'./src/styles/custom.css',
			],

			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
		}),
	],
});
