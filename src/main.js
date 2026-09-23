import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import { initPixel } from './lib/pixel.js'

initPixel()
createApp(App).mount('#app')
