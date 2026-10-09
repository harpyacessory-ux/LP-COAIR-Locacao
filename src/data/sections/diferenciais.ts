/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * COAIR Locação: frase de autoridade = opção 1 do briefing (título 13 do grupo);
 * os 5 diferenciais são os do briefing ("Praticidade" depende do prazo validado).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.png'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Reduza o risco', 'de parada.'],
  text: `Locação de compressores para emergência, parada programada, backup e pico de produção, com avaliação da aplicação pela equipe técnica interna da ${site.brandShort}. Potência, período e prazo de mobilização definidos na cotação, conforme disponibilidade.`,
  scene: {
    src: cenario,
    alt: 'Sala de compressores industriais com tanques azuis e tubulações',
  },
  person: {
    src: pessoa,
    alt: `Técnico da ${site.brandShort}`,
  },
  reasons: [
    {
      icon: 'refresh',
      title: 'Flexibilidade operacional',
      description: 'Locação para emergência, parada programada, pico ou backup.',
    },
    {
      icon: 'gauge',
      title: 'Equipamentos de alta performance',
      description: 'Compressores com alta tecnologia de ar comprimido.',
    },
    {
      icon: 'truck',
      title: 'Praticidade na implantação',
      description: 'Prazo de mobilização informado na cotação.',
    },
    {
      icon: 'users',
      title: 'Equipe técnica interna',
      description: `Avaliação da aplicação feita pela equipe técnica da ${site.brandShort}.`,
    },
    {
      icon: 'clipboard-check',
      title: 'Engenharia aplicada',
      description: 'Dimensionamento conforme a demanda de ar da operação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
