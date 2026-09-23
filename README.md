# Landing page · Imóvel de renda Novo Paraíso

Vue 3 + Vite. Página para tráfego do Instagram com CTA para o WhatsApp (79) 99178-8888.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/ para publicar
```

A pasta `dist/` é estática: dá para publicar direto na Netlify, Vercel, Hostinger ou qualquer hospedagem.

## Onde editar

- **Valores, textos, WhatsApp e mensagem pré-preenchida:** `src/data/imovel.js`
  (a renda total e o retorno % são calculados sozinhos a partir dos aluguéis)
- **Fotos e vídeos:** coloque os arquivos em `public/img/...` e adicione em `fotos` no mesmo arquivo.
  Use `grupo: '1º andar'` / `'2º andar'` e os filtros aparecem automaticamente.
- **Meta Pixel:** ID 1597383025515890 configurado em `src/lib/pixel.js` (PageView + Contact).
  Cada clique no WhatsApp envia `Contact` com a seção (`content_name`) e a cidade do anúncio (`content_category`).
