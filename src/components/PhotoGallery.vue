<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { fotos } from '../data/imovel.js'
import SectionCta from './SectionCta.vue'

const LIMITE = 8 // quantas mídias aparecem antes do "Ver todas"

const ORDEM = ['Fachada', 'Térreo', '1º andar', '2º andar']
const pos = (g) => (ORDEM.includes(g) ? ORDEM.indexOf(g) : ORDEM.length)
const grupos = ['Todos', ...[...new Set(fotos.map((f) => f.grupo))].sort((a, b) => pos(a) - pos(b))]
const filtro = ref('Todos')
const expandida = ref(false)
const filtradas = computed(() => (filtro.value === 'Todos' ? fotos : fotos.filter((f) => f.grupo === filtro.value)))
const visiveis = computed(() => (expandida.value ? filtradas.value : filtradas.value.slice(0, LIMITE)))
const escolher = (g) => { filtro.value = g; expandida.value = false }

const aberta = ref(-1)
const atual = computed(() => filtradas.value[aberta.value])
const abrir = (i) => { aberta.value = i }
const fechar = () => { aberta.value = -1 }
const passar = (d) => {
  const n = filtradas.value.length
  aberta.value = (aberta.value + d + n) % n
}
const onKey = (e) => {
  if (aberta.value < 0) return
  if (e.key === 'Escape') fechar()
  if (e.key === 'ArrowRight') passar(1)
  if (e.key === 'ArrowLeft') passar(-1)
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <section id="fotos" class="fotos">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">Fotos, vídeo e plantas</span>
        <h2 class="title">Conheça <em>cada pavimento</em></h2>
      </div>

      <div v-if="grupos.length > 2" class="chips" role="tablist">
        <button v-for="g in grupos" :key="g" type="button" role="tab" :aria-selected="filtro === g" :class="{ on: filtro === g }" @click="escolher(g)">{{ g }}</button>
      </div>

      <div class="gallery">
        <button v-for="(f, i) in visiveis" :key="f.src" type="button" :class="{ video: f.tipo === 'video' }" :aria-label="`Ampliar: ${f.legenda}`" @click="abrir(i)">
          <img :src="f.poster || f.src" :alt="f.legenda" loading="lazy" />
          <span v-if="f.tipo === 'video'" class="play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
          </span>
          <span class="cap">{{ f.legenda }}</span>
        </button>
      </div>

      <button v-if="filtradas.length > LIMITE && !expandida" class="more" type="button" @click="expandida = true">
        Ver todas as {{ filtradas.length }} fotos e vídeos
      </button>
      <SectionCta
        label="Quero agendar uma visita"
        origem="fotos"
        mensagem="Olá, Mac! Vi as fotos e vídeos das 3 casas no Novo Paraíso e quero agendar uma visita."
        nota="Veja pessoalmente as 3 casas."
      />
    </div>

    <Teleport to="body">
      <div v-if="atual" class="lightbox" @click.self="fechar">
        <button class="close" type="button" aria-label="Fechar" @click="fechar">×</button>
        <button v-if="filtradas.length > 1" class="nav prev" type="button" aria-label="Anterior" @click="passar(-1)">‹</button>
        <figure>
          <video v-if="atual.tipo === 'video'" :key="atual.src" :src="atual.src" :poster="atual.poster" controls autoplay playsinline></video>
          <img v-else :src="atual.src" :alt="atual.legenda" />
          <figcaption>{{ atual.legenda }} <span class="num">· {{ aberta + 1 }}/{{ filtradas.length }}</span></figcaption>
        </figure>
        <button v-if="filtradas.length > 1" class="nav next" type="button" aria-label="Próxima" @click="passar(1)">›</button>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.fotos { padding-top: 0; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin: -12px 0 24px; }
.chips button {
  background: transparent; color: var(--muted); border: 1px solid var(--line); border-radius: 999px;
  padding: 8px 16px; font: 700 14px var(--body); cursor: pointer;
}
.chips button.on { background: var(--gold); color: var(--ink); border-color: var(--gold); }
.gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.gallery button {
  all: unset; cursor: zoom-in; border-radius: var(--r); overflow: hidden; border: 1px solid var(--line);
  aspect-ratio: 3 / 4; max-width: 100%; position: relative; background: var(--ink-3);
}
.gallery button.video { cursor: pointer; border-color: var(--gold-lo); }
.gallery button:focus-visible { outline: 3px solid var(--gold-hi); outline-offset: 3px; }
.gallery img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s ease; }
.gallery button:hover img { transform: scale(1.03); }
.play {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 64px; height: 64px; border-radius: 50%; display: grid; place-items: center;
  background: var(--gold); color: var(--ink); box-shadow: 0 10px 30px -8px rgba(0, 0, 0, .6);
}
.play svg { width: 30px; height: 30px; margin-left: 3px; }
.cap {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 30px 14px 12px;
  background: linear-gradient(180deg, transparent, rgba(10, 22, 40, .9)); font-weight: 700; font-size: 14px;
}
.more {
  margin-top: 20px; background: transparent; color: var(--gold-hi); border: 1px solid var(--line);
  border-radius: 999px; padding: 12px 22px; font: 700 15px var(--body); cursor: pointer;
}
.more:hover { border-color: var(--gold); }

.lightbox { position: fixed; inset: 0; z-index: 60; background: rgba(5, 11, 20, .95); display: grid; place-items: center; padding: 24px 64px; }
figure { margin: 0; display: grid; gap: 10px; justify-items: center; }
.lightbox img, .lightbox video { max-height: 82vh; max-width: 100%; width: auto; border-radius: 10px; background: #000; }
figcaption { color: var(--muted); font-size: 14px; font-weight: 600; }
.close, .nav {
  position: absolute; background: var(--ink-3); color: var(--paper); border: 1px solid var(--line);
  width: 44px; height: 44px; border-radius: 50%; font-size: 24px; line-height: 1; cursor: pointer; z-index: 2;
}
.close { top: calc(14px + env(safe-area-inset-top, 0px)); right: 14px; }
.nav { top: 50%; transform: translateY(-50%); }
.prev { left: 10px; }
.next { right: 10px; }
@media (max-width: 900px) { .gallery { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 620px) {
  .gallery { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .lightbox { padding: 64px 12px 24px; }
  .nav { top: auto; bottom: calc(18px + env(safe-area-inset-bottom, 0px)); transform: none; }
}
</style>
