<script setup>
useSeoMeta({
  title: "Web Dev Portal — Головна",
  description:
    "Портал для веб-розробників: статті про Nuxt 4, SSR, SSG та сучасні технології.",
  ogTitle: "Web Dev Portal — Головна",
  ogDescription:
    "Ресурс для вивчення Nuxt 4 та його можливостей.",
});
</script>

<template>
  <UContainer class="custom-container">
    <UCard class="custom-card">
      <template #header>
        <h2>Ласкаво просимо!</h2>
      </template>

      <p>Знайдіть корисні матеріали та поради для веб-розробки...</p>

      <template #footer>
        <UButton to="/blog" class="custom-btn"> Переглянути статті </UButton>
      </template>
    </UCard>

    <UAlert
      class="custom-alert"
      color="blue"
      title="Новинки"
      description="Цей портал регулярно оновлюється новими статтями та прикладами."
    />
  </UContainer>
</template>

<style scoped>
.custom-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

.custom-card {
  border: 2px solid rgba(26, 32, 44, 0.1);
  border-radius: 12px;
  background: #ffffff;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.custom-card h2 {
  margin: 0;
  font-size: 24px;
  color: #1a202c;
  font-weight: 700;
}

.custom-btn {
  background: linear-gradient(135deg, #f6ad55, #ed8936);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-decoration: none;
}

.custom-btn:hover {
  transform: scale(1.05);
}

.custom-alert {
  border-radius: 12px;
  backdrop-filter: blur(6px);
  background: rgba(246, 173, 85, 0.15) !important;
  border: 2px solid rgba(246, 173, 85, 0.4);
  padding: 16px 24px;
  color: #1a202c;
  margin-top: 24px;
}
</style>
