<template>
  <MainLayout>
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </MainLayout>
</template>

<script setup>
import MainLayout from './layout/MainLayout.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Світла тема  */
:root {
  --bg: #f5f0e8;
  --text: #2c2416;
  --card-bg: #fffef9;
  --border: #d4c5a9;
  --link: #8b6914;
  --link-hover: #5d4509;
}

/* Темна тема */
[data-theme='dark'] {
  --bg: #0f1419;
  --text: #e8e6e3;
  --card-bg: #1a1f26;
  --border: #2d3748;
  --link: #f59e0b;
  --link-hover: #fbbf24;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.card,
header,
footer,
.article,
.about {
  background-color: var(--card-bg);
  color: var(--text);
  border-color: var(--border);
}
</style>
