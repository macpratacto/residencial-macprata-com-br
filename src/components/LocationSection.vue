<script setup>
import { imovel } from '../data/imovel.js'
import SectionCta from './SectionCta.vue'
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
        <p class="lede">Bairro residencial com demanda constante por aluguel e tudo o que o inquilino precisa por perto.</p>
        <a class="btn-ghost" :href="imovel.mapsUrl" target="_blank" rel="noopener">Ver o bairro no Google Maps ↗</a>
        <SectionCta
          class="loc-cta"
          label="Quero o endereço exato"
          origem="localizacao"
          mensagem="Olá, Mac! Pode me enviar o endereço exato do imóvel de 3 casas no Novo Paraíso?"
          nota=""
        />
      </div>
      <ul class="poi">
        <li v-for="p in imovel.proximidades" :key="p">{{ p }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.card { display: grid; gap: 18px; }
.pin { display: flex; gap: 14px; align-items: center; }
.pin svg { width: 36px; height: 36px; color: var(--gold); flex: none; }
.pin b { font-family: var(--display); font-size: 30px; text-transform: uppercase; line-height: 1; display: block; }
.pin span { color: var(--muted); }
.poi { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px; }
.poi li { border: 1px solid var(--line); border-radius: 999px; padding: 9px 16px; font-weight: 600; font-size: 15px; background: rgba(255, 255, 255, .02); }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
