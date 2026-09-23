const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
const pct = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

// "R$ 4.100" (sem o espaço não separável do Intl, para quebrar bem no layout)
export const reais = (v) => brl.format(v).replace(/ /g, ' ')
export const percent = (v) => pct.format(v * 100) + '%'
