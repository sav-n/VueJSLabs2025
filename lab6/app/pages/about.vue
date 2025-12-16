<script setup>
useSeoMeta({
  title: "Інформація — Web Dev Portal",
  description: "Детальна інформація про портал та його можливості.",
  ogTitle: "Інформація — Web Dev Portal",
  ogDescription:
    "Дізнайтеся більше про Web Dev Portal та навчальні матеріали.",
});
</script>

<template>
  <div class="about-page">
    <h1>Про портал</h1>
    <p>Цей ресурс створено для вивчення Nuxt 4, серверного рендерингу, API-маршрутів та оптимізації SEO.</p>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 700px;
  margin: 0 auto;
}

.about-page h1 {
  font-size: 36px;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 20px;
}

.about-page p {
  font-size: 18px;
  line-height: 1.7;
  color: #4a5568;
}
</style>
