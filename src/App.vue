<script setup>
import HeroSection from './components/HeroSection.vue'
import RentLedger from './components/RentLedger.vue'
import ReturnSection from './components/ReturnSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import LocationSection from './components/LocationSection.vue'
import ContactSection from './components/ContactSection.vue'
import StickyBar from './components/StickyBar.vue'
</script>

<template>
  <HeroSection />
  <main>
    <RentLedger />
    <ReturnSection />
    <FeaturesSection />
    <PhotoGallery />
    <LocationSection />
    <ContactSection />
  </main>
  <footer>
    <div class="wrap">
      <span>Imóvel de renda · Novo Paraíso, Aracaju/SE</span>
      <span>Valores sujeitos a alteração sem aviso prévio.</span>
    </div>
  </footer>
  <StickyBar />
</template>

<style scoped>
footer { padding-block: 32px 40px; color: var(--muted); font-size: 13px; border-top: 1px solid var(--line); }
footer .wrap { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }
</style>
