/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * De 6 a 24 itens com foto e nome. `description` é tudo ou nada: ou todos os
 * itens têm a frase, ou nenhum tem — o componente recusa a mistura no build.
 *
 * `groups` vazio deixa a vitrine em grade. Com grupos, cada um vira uma
 * prateleira própria, com a logo (ou o nome) no cabeçalho.
 *
 * COAIR Locação: as 4 situações do plano AIR PLAN + os 2 tipos de equipamento que
 * a apresentação cita para locação. Fotos PROVISÓRIAS, recortadas do banner do
 * hero e do cenário dos diferenciais; trocar por foto-emergencia.jpg,
 * foto-parada.jpg e as demais quando chegarem.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'

import produto1 from '@assets/vitrine/produto-1.png'
import produto2 from '@assets/vitrine/produto-2.png'
import produto3 from '@assets/vitrine/produto-3.png'
import produto4 from '@assets/vitrine/produto-4.png'
import produto5 from '@assets/vitrine/produto-5.png'
import produto6 from '@assets/vitrine/produto-6.png'

/** Marca, linha ou família. `logo` é opcional: sem ela, vale o nome. */
export interface ShowcaseGroup {
  id: string
  label: string
  logo: Photo | null
}

export interface ShowcaseItem {
  id: string
  /** id de um grupo de `groups`, ou '' quando a vitrine não é agrupada. */
  group: string
  title: string
  /** 1 frase, 50–90 caracteres. '' quando a vitrine é só foto e nome. */
  description: string
  /** Ícone verde ao lado do nome. */
  icon: IconName
  photo: Photo
}

export const showcase = {
  eyebrow: 'Locação AIR PLAN',
  title: 'Locação de compressores para indústrias',
  text: 'Locação de compressores para indústrias em emergências, paradas e demandas temporárias. Planos para cada situação, conforme disponibilidade.',
  groups: [],
  items: [
    {
      id: 'emergencia',
      group: '',
      title: 'Locação para Emergência',
      description: 'Compressor para manter o ar comprimido quando o equipamento principal para.',
      icon: 'alert',
      photo: { src: produto1, alt: 'Compressor de ar de parafuso COAIR para locação' },
    },
    {
      id: 'parada-programada',
      group: '',
      title: 'Locação para Parada Programada',
      description: 'Ar comprimido durante a manutenção ou a parada programada da planta.',
      icon: 'wrench',
      photo: { src: produto2, alt: 'Unidade compressora de parafuso em sala de compressores' },
    },
    {
      id: 'backup',
      group: '',
      title: 'Locação para Backup',
      description: 'Backup de ar comprimido para reduzir o risco de parada da produção.',
      icon: 'shield',
      photo: { src: produto3, alt: 'Painel de controle de compressor de ar industrial' },
    },
    {
      id: 'pico-producao',
      group: '',
      title: 'Locação para Pico de Produção',
      description: 'Capacidade extra de ar comprimido em períodos de maior demanda.',
      icon: 'trend-up',
      photo: { src: produto4, alt: 'Sala de compressores com reservatórios e tubulação de ar' },
    },
    {
      id: 'compressores-parafuso',
      group: '',
      title: 'Compressores de Parafuso',
      description: 'Compressores de ar industriais de diferentes capacidades, sob consulta.',
      icon: 'cog',
      photo: { src: produto5, alt: 'Compressor de ar de parafuso COAIR em ambiente industrial' },
    },
    {
      id: 'secadores-acessorios',
      group: '',
      title: 'Secadores e Acessórios',
      description: 'Secadores, boosters de alta pressão e acessórios conforme a aplicação.',
      icon: 'wind',
      photo: {
        src: produto6,
        alt: 'Reservatórios e tubulação de ar comprimido em planta industrial',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
