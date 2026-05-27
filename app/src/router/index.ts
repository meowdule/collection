import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FlipbookView from '@/views/FlipbookView.vue'
import PdfView from '@/views/PdfView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/view/:series/:vol/:part',
      name: 'flipbook',
      component: FlipbookView,
    },
    {
      path: '/pdf/:series/:vol/:part',
      name: 'pdf',
      component: PdfView,
    },
  ],
})
