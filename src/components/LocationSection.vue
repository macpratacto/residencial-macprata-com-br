<script setup>
import { imovel } from '../data/imovel.js'
import SectionCta from './SectionCta.vue'
import { publico } from '../lib/publico.js'
import { reais } from '../lib/format.js'

const proximidades = publico.proximidade ? [...imovel.proximidades, publico.proximidade] : imovel.proximidades

const q = encodeURIComponent(imovel.mapsBusca)
const mapaEmbed = `https://maps.google.com/maps?q=${q}&z=16&output=embed`
const rotaUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`
</script>

<template>
  <section id="local" class="band">
    <div class="wrap grid">
      <div class="card">
        <span class="eyebrow">Localização</span>
        <div class="pin">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.6" /></svg>
          <div><b>{{ imovel.bairro }}</b><span>{{ imovel.cidade }} · a capital de Sergipe</span></div>
        </div>
        <address>
          {{ imovel.endereco }} · {{ imovel.bairro }}<br />
          {{ imovel.cidade.replace(' / ', '/') }} · CEP {{ imovel.cep }}
        </address>
        <p class="lede">Bairro residencial com demanda constante por aluguel e tudo o que o inquilino precisa por perto. Essa localização dá ao imóvel capacidade para gerar até {{ reais(imovel.rendaPotencial) }}/mês de renda.</p>
        <ul class="poi">
          <li v-for="p in proximidades" :key="p">{{ p }}</li>
        </ul>
        <div class="links">
          <a class="btn-ghost" :href="imovel.mapsUrl" target="_blank" rel="noopener">Abrir no Google Maps ↗</a>
          <a class="btn-ghost" :href="rotaUrl" target="_blank" rel="noopener">Traçar rota ↗</a>
        </div>
        <SectionCta
          label="Quero agendar uma visita"
          origem="localizacao"
          mensagem="Olá, Mac! Vi a localização do imóvel na R. Amador Bueno, 386 (Novo Paraíso) e quero agendar uma visita."
          nota=""
        />
      </div>

      <div class="map">
        <iframe
          :src="mapaEmbed"
          title="Mapa: R. Amador Bueno, 386, Novo Paraíso, Aracaju/SE"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: stretch; }
.card { display: grid; gap: 18px; align-content: start; }
.pin { display: flex; gap: 14px; align-items: center; }
.pin svg { width: 36px; height: 36px; color: var(--gold); flex: none; }
.pin b { font-family: var(--display); font-size: 30px; text-transform: uppercase; line-height: 1; display: block; }
.pin span { color: var(--muted); }
address { font-style: normal; font-size: 18px; font-weight: 700; line-height: 1.45; padding-left: 16px; border-left: 2px solid var(--gold); }
.poi { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.poi li { border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px; font-weight: 600; font-size: 14px; background: rgba(255, 255, 255, .02); }
.links { display: flex; flex-wrap: wrap; gap: 4px 24px; }
.card :deep(.section-cta) { margin-top: 8px; }
.map {
  border-radius: var(--r); overflow: hidden; border: 1px solid var(--line);
  min-height: 420px; background: var(--ink-3);
}
.map iframe { display: block; width: 100%; height: 100%; min-height: 420px; border: 0; filter: saturate(.85); }
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .map, .map iframe { min-height: 320px; }
}
</style>
