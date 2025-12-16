<script setup>
const { data: posts, pending, error } = await useFetch("/api/posts");

useSeoMeta({
  title: "Статті — Web Dev Portal",
  description: "Колекція статей про Nuxt 4, SSR/SSG та веб-розробку.",
  ogTitle: "Статті — Web Dev Portal",
  ogDescription: "Усі доступні матеріали для розробників.",
});
</script>

<template>
  <UContainer class="blog-container">
    <h1 class="blog-title">Всі публікації</h1>

    <!-- Loading -->
    <UAlert
      v-if="pending"
      class="blog-alert loading"
      color="blue"
      title="Завантаження..."
    />

    <!-- Error -->
    <UAlert
      v-if="error"
      class="blog-alert error"
      color="red"
      title="Помилка"
      description="Не вдалося завантажити список статей 😢"
    />

    <!-- List -->
    <div v-if="posts && posts.length" class="posts-grid">
      <UCard v-for="post in posts" :key="post.slug" class="post-card">
        <template #header>
          <h2 class="post-title">{{ post.title }}</h2>
        </template>

        <p class="post-preview">{{ post.content.slice(0, 120) }}…</p>

        <template #footer>
          <NuxtLink :to="`/blog/${post.slug}`" class="read-more">
            Детальніше →
          </NuxtLink>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<style scoped>
/* Контейнер сторінки */
.blog-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px;
}

/* Заголовок */
.blog-title {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 28px;
  color: #1a202c;
  letter-spacing: -0.5px;
}

/* Алерти */
.blog-alert {
  margin-bottom: 20px;
}

.loading {
  background: rgba(56, 189, 248, 0.1) !important;
}

.error {
  background: rgba(248, 113, 113, 0.1) !important;
}

/* Сітка карточок */
.posts-grid {
  display: grid;
  gap: 24px;
}

/* КАРТОЧКА */
.post-card {
  border: 2px solid rgba(26, 32, 44, 0.12);
  border-radius: 12px;
  background: #ffffff;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(246, 173, 85, 0.5);
}

/* Заголовок статті */
.post-title {
  font-size: 21px;
  font-weight: 700;
  margin: 0;
  color: #1a202c;
}

/* Прев'ю тексту */
.post-preview {
  color: #4a5568;
  line-height: 1.6;
  margin: 14px 0 0;
}

/* Кнопка-читалка */
.read-more {
  display: inline-block;
  margin-top: 18px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #f6ad55, #ed8936);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.read-more:hover {
  transform: scale(1.05);
}
</style>
