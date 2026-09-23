<script setup>
import { imovel } from '../data/imovel.js'
import SectionCta from './SectionCta.vue'

const icones = {
  casa: '<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>',
  cama: '<path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 15h18M3 18v2M21 18v2M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>',
  area: '<path d="M4 4h16v16H4z"/><path d="M4 12h16M12 4v16"/>',
  carro: '<path d="M5 16l1.5-5h11L19 16"/><path d="M4 16h16v3H4z"/><circle cx="7.5" cy="19" r="1"/><circle cx="16.5" cy="19" r="1"/>',
  check: '<path d="M4 12l5 5L20 6"/>'
}
</script>

<template>
  <section id="imovel">
    <div class="wrap grid">
      <div class="photo">
        <img :src="'img/primeiro/p01.jpg'" alt="Sala ampla do 1º andar com cozinha americana ao fundo" width="960" height="1280" loading="lazy" />
      </div>
      <div>
        <div class="sec-head">
          <span class="eyebrow">O imóvel</span>
          <h2 class="title">Estrutura <em>inteligente e independente</em></h2>
        </div>
        <ul class="list">
          <li v-for="d in imovel.destaques" :key="d.titulo">
            <span class="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" v-html="icones[d.icone]"></svg>
            </span>
            <div><b>{{ d.titulo }}</b><span>{{ d.texto }}</span></div>
          </li>
        </ul>
        <SectionCta
          label="Quero agendar uma visita"
          origem="imovel"
          mensagem="Olá, Mac! Quero agendar uma visita ao imóvel de 3 casas no Novo Paraíso. Quais dias e horários você tem disponíveis?"
          nota="Visitas agendadas com o proprietário."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 48px; align-items: start; }
.photo {
  border-radius: 18px; overflow: hidden; border: 1px solid var(--line);
  aspect-ratio: 4 / 5; max-width: 100%; position: sticky; top: calc(24px + env(safe-area-inset-top, 0px));
}
.photo img { width: 100%; height: 100%; object-fit: cover; }
@media (max-width: 900px) { .photo { position: static; aspect-ratio: 4 / 3.4; } }
.list { list-style: none; margin: 0; padding: 0; display: grid; }
li { display: grid; grid-template-columns: 44px 1fr; gap: 16px; align-items: start; padding-block: 18px; border-bottom: 1px solid var(--line); }
li:first-child { border-top: 1px solid var(--line); }
.ico { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--gold-lo); color: var(--gold); }
.ico svg { width: 22px; height: 22px; }
b { display: block; font-size: 17px; }
li span:not(.ico) { color: var(--muted); font-size: 14px; }
@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
