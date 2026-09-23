// Todos os dados da página ficam aqui. Altere valores, textos e fotos sem mexer nos componentes.

export const contato = {
  nome: 'Mac Prata',
  telefone: '(79) 99178-8888',
  whatsapp: '5579991788888',
  mensagem: 'Olá, Mac! Vi o anúncio do imóvel de renda no Novo Paraíso (R$ 4.100/mês) e quero mais informações.'
}

export const imovel = {
  valor: 700000,
  rendaPotencial: 5000,
  areaConstruida: '~340 m²',
  bairro: 'Novo Paraíso',
  cidade: 'Aracaju / SE',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Novo+Para%C3%ADso+Aracaju+SE',
  // Do último andar para o térreo, como na fachada
  pavimentos: [
    { nome: '2º andar', aluguel: 1500, detalhe: '3 quartos · 1 suíte' },
    { nome: '1º andar', aluguel: 1400, detalhe: '3 quartos · 1 suíte' },
    { nome: 'Térreo', aluguel: 1200, detalhe: '3 quartos · 1 suíte' }
  ],
  destaques: [
    { icone: 'casa', titulo: '3 unidades residenciais independentes', texto: 'Acessos totalmente privativos, uma casa por pavimento.' },
    { icone: 'cama', titulo: '3 quartos em cada unidade, sendo 1 suíte', texto: 'Cozinha e sala amplas; nos andares superiores, cozinha americana integrada.' },
    { icone: 'area', titulo: 'Aproximadamente 340 m² construídos', texto: 'Três pavimentos com varandas e áreas de serviço.' },
    { icone: 'carro', titulo: 'Garagem para 2 carros', texto: 'Vagas enfileiradas no térreo.' },
    { icone: 'check', titulo: 'Pronto e 100% locado', texto: 'Sem obra e sem espera: a renda começa no primeiro mês.' }
  ],
  proximidades: ['Rodoviária', 'Havan', 'Hospital público', 'Padarias', 'Grandes redes de supermercado', 'Fácil acesso para quem vem de Itabaiana']
}

// Galeria: adicione as fotos de cada pavimento em /public/img e liste aqui.
// "grupo" vira filtro (Fachada, Térreo, 1º andar, 2º andar). Vídeo: tipo 'video' + poster.
export const fotos = [
  { src: 'img/fachada.jpg', legenda: 'Fachada', grupo: 'Fachada' },
  { tipo: 'video', src: 'img/segundo/tour.mp4', poster: 'img/segundo/tour-poster.jpg', legenda: 'Tour em vídeo do 2º andar', grupo: '2º andar' },
  { src: 'img/segundo/s01.jpg', legenda: '2º andar · sala integrada', grupo: '2º andar' },
  { src: 'img/segundo/s02.jpg', legenda: '2º andar · cozinha planejada', grupo: '2º andar' },
  { src: 'img/segundo/s04.jpg', legenda: '2º andar · quarto', grupo: '2º andar' },
  { src: 'img/segundo/s03.jpg', legenda: '2º andar · vista da varanda', grupo: '2º andar' },
  { tipo: 'video', src: 'img/primeiro/tour.mp4', poster: 'img/primeiro/tour-poster.jpg', legenda: 'Tour em vídeo do 1º andar', grupo: '1º andar' },
  { src: 'img/primeiro/p01.jpg', legenda: '1º andar · sala ampla', grupo: '1º andar' },
  { src: 'img/primeiro/p03.jpg', legenda: '1º andar · cozinha americana', grupo: '1º andar' },
  { src: 'img/primeiro/p07.jpg', legenda: '1º andar · quarto', grupo: '1º andar' },
  { src: 'img/primeiro/p08.jpg', legenda: '1º andar · quarto', grupo: '1º andar' },
  { src: 'img/primeiro/p02.jpg', legenda: '1º andar · banheiro com barras de apoio', grupo: '1º andar' },
  { src: 'img/primeiro/p05.jpg', legenda: '1º andar · banheiro', grupo: '1º andar' },
  { src: 'img/primeiro/p04.jpg', legenda: '1º andar · área de serviço', grupo: '1º andar' },
  { src: 'img/primeiro/p06.jpg', legenda: '1º andar · hall e varanda de acesso', grupo: '1º andar' },
  { tipo: 'video', src: 'img/segundo/video2.mp4', poster: 'img/segundo/video2-poster.jpg', legenda: 'Fachada em vídeo', grupo: 'Fachada' },
  { src: 'img/terreo/t01.jpg', legenda: 'Fachada à noite', grupo: 'Fachada' },
  { tipo: 'video', src: 'img/terreo/tour.mp4', poster: 'img/terreo/tour-poster.jpg', legenda: 'Tour em vídeo do térreo', grupo: 'Térreo' },
  { src: 'img/terreo/t10.jpg', legenda: 'Térreo · sala', grupo: 'Térreo' },
  { src: 'img/terreo/t06.jpg', legenda: 'Térreo · cozinha', grupo: 'Térreo' },
  { src: 'img/terreo/t07.jpg', legenda: 'Térreo · cozinha e acesso', grupo: 'Térreo' },
  { src: 'img/terreo/t08.jpg', legenda: 'Térreo · quarto', grupo: 'Térreo' },
  { src: 'img/terreo/t03.jpg', legenda: 'Térreo · quarto', grupo: 'Térreo' },
  { src: 'img/terreo/t05.jpg', legenda: 'Térreo · quarto', grupo: 'Térreo' },
  { src: 'img/terreo/t09.jpg', legenda: 'Térreo · banheiro', grupo: 'Térreo' },
  { src: 'img/terreo/t02.jpg', legenda: 'Térreo · banheiro', grupo: 'Térreo' },
  { src: 'img/terreo/t04.jpg', legenda: 'Térreo · varanda de entrada', grupo: 'Térreo' },
  { src: 'img/terreo.webp', legenda: 'Térreo · planta', grupo: 'Térreo' }
]
