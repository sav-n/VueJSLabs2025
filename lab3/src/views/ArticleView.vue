<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <p class="date">{{ article.date }}</p>
    <img :src="article.image" alt="Article image" class="image" />

    <p class="text">{{ article.fullText }}</p>

    <AdSlot />

    <RouterLink to="/" class="back-btn">← На головну</RouterLink>
  </div>
</template>

<script setup>
import { news } from '../data/newsData'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import AdSlot from '../components/AdSlot.vue'

const route = useRoute()
const article = computed(() => {
  return news.find((item) => item.id === Number(route.params.id))
})
</script>

<style scoped>
.article {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

.image {
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.date {
  color: #888;
  font-size: 0.95rem;
  margin: 10px 0;
}

.text {
  line-height: 1.8;
  font-size: 1.05rem;
  margin-top: 25px;
}

.back-btn {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 24px;
  background: var(--link);
  color: var(--card-bg);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.2s;
}

.back-btn:hover {
  background: var(--link-hover);
  transform: translateX(-5px);
}
</style>
