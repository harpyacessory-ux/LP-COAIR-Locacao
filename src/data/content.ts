/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * COAIR Locação (AIR PLAN): copy do briefing-coair-locacao.md.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Dimensione sua locação',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Plano AIR PLAN COAIR',
  title: 'Locação de compressor de ar para manter sua produção em operação.',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'em operação',
  text: 'Locação de compressores para indústrias em emergências, paradas e demandas temporárias, conforme disponibilidade.',
  /** Rótulos dos botões do hero (o vocabulário `cta` continua valendo no resto da página). */
  ctaPrimary: 'Solicite uma cotação',
  ctaSecondary: 'Fale com um especialista',
  banner: {
    src: heroBg,
    alt: 'Compressor de ar de parafuso COAIR em ambiente industrial',
  },
  points: [
    { icon: 'zap', line1: 'Locação para emergência,', line2: 'parada, pico e backup' },
    { icon: 'users', line1: 'Equipe técnica', line2: 'interna' },
    { icon: 'factory', line1: 'Locação para', line2: 'indústrias' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  ctaPrimary: string
  ctaSecondary: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Informe a situação, a potência, o período e a cidade da operação: nossa equipe técnica avalia a aplicação e confirma disponibilidade e prazo de mobilização. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** O `\n` marca a quebra de linha de cada destaque. */
  trust: [
    { icon: 'factory', label: 'Atendimento B2B\nIndustrial' },
    { icon: 'clipboard-check', label: 'Engenharia\nAplicada' },
    { icon: 'users', label: 'Equipe Técnica\nInterna' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  /** Frase da marca ao lado da logo. */
  tagline: 'Locação de compressores para emergência, parada programada, backup e pico de produção',
  contactLabel: 'Atendimento',
  quoteLabel: 'Solicite sua cotação',
  quoteButton: 'Solicitar cotação',
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
