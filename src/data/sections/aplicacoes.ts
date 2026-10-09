/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto, ícone verde e cabeçalho centrado sobre fundo escuro.
 * O card inteiro é o CTA.
 *
 * COAIR Locação: as 4 etapas do atendimento inferidas dos anúncios (descrições 3
 * e 4), sem prazo. Fotos PROVISÓRIAS, recortadas do banner do hero e do cenário
 * dos diferenciais — trocar por fotos de equipamento de locação em operação.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  icon: IconName
  photo: Photo
}

export const applications = {
  eyebrow: 'Como funciona a locação',
  title: 'Do pedido à mobilização do compressor',
  text: 'Atendimento B2B com avaliação da aplicação, da necessidade e do período de locação. Disponibilidade, potência e prazo de mobilização confirmados na cotação.',
  items: [
    {
      id: 'avaliacao',
      label: 'Avaliação da aplicação',
      description: 'A equipe técnica avalia aplicação, necessidade e período.',
      icon: 'search',
      photo: { src: app1, alt: 'Compressor de ar de parafuso COAIR em planta industrial' },
    },
    {
      id: 'potencia',
      label: 'Potência e período',
      description: 'Definição da potência do equipamento e do tempo de uso.',
      icon: 'gauge',
      photo: { src: app2, alt: 'Unidade compressora de parafuso em sala de compressores' },
    },
    {
      id: 'disponibilidade',
      label: 'Disponibilidade',
      description: 'Confirmação do equipamento disponível para o período.',
      icon: 'clipboard-check',
      photo: { src: app3, alt: 'Compressor de ar industrial ao lado de reservatório e tubulações' },
    },
    {
      id: 'mobilizacao',
      label: 'Mobilização',
      description: 'O compressor é mobilizado até o local da operação.',
      icon: 'truck',
      photo: { src: app4, alt: 'Sala de compressores com reservatórios azuis e tubulação de ar' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
