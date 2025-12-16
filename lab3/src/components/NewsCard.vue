<template>
  <div class="card">
    <img :src="article.image" alt="news" class="image" />
    <div class="content">
      <h2>{{ article.title }}</h2>
      <p class="date">{{ article.date }}</p>
      <p class="desc">{{ article.description }}</p>
      <RouterLink :to="'/article/' + article.id" class="btn">Детальніше →</RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ article: Object })
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  background: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.content {
  padding: 20px;
}
.date {
  font-size: 0.85rem;
  color: #888;
  margin: 8px 0;
}
.desc {
  margin: 12px 0;
  line-height: 1.6;
}
.btn {
  margin-top: 15px;
  display: inline-block;
  padding: 10px 20px;
  background: var(--link);
  color: var(--card-bg);
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.2s ease;
}
.btn:hover {
  background: var(--link-hover);
}
</style>
