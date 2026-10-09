/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas, e qualquer outro número
 * deixa célula órfã.
 *
 * COAIR Locação: os 6 dados saem das descrições 3 e 4 dos anúncios (inferido —
 * o comercial confirma se são esses os dados pedidos na cotação).
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para a cotação',
  title: 'Precisa de ar comprimido temporário?',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'temporário?',
  text: 'Informe os dados da sua operação: a equipe técnica avalia a aplicação, a necessidade e o período de locação, e confirma disponibilidade e prazo de mobilização.',
  microcopy: 'Avaliação feita pela equipe técnica',
  items: [
    { icon: 'factory', label: 'Aplicação', hint: 'processo atendido' },
    { icon: 'alert', label: 'Situação', hint: 'motivo da locação' },
    { icon: 'clock', label: 'Período', hint: 'tempo previsto de uso' },
    { icon: 'gauge', label: 'Potência', hint: 'HP ou kW necessários' },
    { icon: 'map-pin', label: 'Local', hint: 'cidade da operação' },
    { icon: 'clipboard-check', label: 'Início', hint: 'data prevista de uso' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
