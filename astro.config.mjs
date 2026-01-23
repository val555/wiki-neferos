// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';  // ← AJOUTE CET IMPORT
import path from 'path';


// https://astro.build/config
export default defineConfig({
	  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      }
    }
  },
    integrations: [
        react(),  // ← AJOUTE CETTE LIGNE
        starlight({
            // ============================================
            // 1. METADATA
            // ============================================
            title: 'Wiki Neferos',
            description: 'Bible d\'univers et wiki personnel du roman Neferos. Documentation détaillée de l\'univers de fantasy.',
            
            logo: {
                src: './src/assets/neferos-universe-logo.png',
                replacesTitle: false,
            },
            // ============================================
            // 2. LIENS SOCIAUX
            // ============================================
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/ValentinNeo/wiki-neferos' },
            ],


            // ============================================
            // 3. NAVIGATION LATÉRALE
            // ============================================
            sidebar: [
                {
                    label: '🏠 Accueil',
                    items: [
                        { label: 'Bienvenue', slug: 'intro/accueil' },
                        { label: 'À propos du projet', slug: 'intro/apropos' },
                    ],
                },
                {
                    label: '🪐 Galaxie & Planètes',
                    autogenerate: { directory: 'planetes' },
                },
                {
                    label: '🧬 Peuples et Cultures',
                    autogenerate: { directory: 'peuples' },
                },
                {
                    label: '⚙️ Concepts',
                    autogenerate: { directory: 'concepts' },
                },
                {
                    label: '👥 Codex des Personnages',
                    autogenerate: { directory: 'personnages' },
                },              
                {
                    label: '📖 Glossaire',
                    autogenerate: { directory: 'glossaire' },
                },
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
