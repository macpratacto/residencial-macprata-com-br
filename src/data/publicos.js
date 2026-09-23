// Textos por cidade do anúncio. A página lê ?cidade=... na URL, por exemplo:
//   residencial.macprata.com.br/?cidade=Itabaiana
//   residencial.macprata.com.br/?cidade=Aracaju/SE
// A chave é o nome da cidade em minúsculas e sem acento. Para uma cidade nova,
// basta adicionar um bloco aqui. Cidades não listadas usam o perfil "outra".

export const publicos = {
  aracaju: {
    nome: 'Aracaju',
    kicker: 'Investidores de Aracaju',
    heroLocal: 'aqui em Aracaju, no bairro Novo Paraíso',
    contatoTitulo: ['Renda na sua cidade,', 'pronta para você'],
    proximidade: 'Perto de você: acompanhe o investimento de perto'
  },
  itabaiana: {
    nome: 'Itabaiana',
    kicker: 'Empresários de Itabaiana',
    heroLocal: 'na capital, Aracaju',
    contatoTitulo: ['Renda na capital,', 'pronta para você'],
    proximidade: 'Fácil acesso para quem vem de Itabaiana'
  }
}

// Cidade informada na URL, mas sem bloco próprio acima ({cidade} vira o nome dela)
export const publicoOutraCidade = {
  kicker: 'Investidores de {cidade}',
  heroLocal: 'na capital, Aracaju',
  contatoTitulo: ['Renda na capital,', 'pronta para você'],
  proximidade: 'Fácil acesso para quem vem de {cidade}'
}

// Sem ?cidade= na URL
export const publicoPadrao = {
  nome: null,
  kicker: 'Investidores de Sergipe',
  heroLocal: 'em Aracaju, no bairro Novo Paraíso',
  contatoTitulo: ['Renda na capital,', 'pronta para você'],
  proximidade: null
}
