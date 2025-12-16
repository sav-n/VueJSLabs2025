<template>
  <header class="header">
    <div class="logo">Cosmos Chronicle</div>
    <nav>
      <RouterLink to="/" class="nav-link">Головна</RouterLink>
      <RouterLink to="/about" class="nav-link">Про нас</RouterLink>
    </nav>
    <button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '🔆 Світла' : '🌃 Темна' }}
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  applyTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

// перевірка на тему
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<!--стилі діють тільки в цьому компоненті-->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: var(--card-bg);
  color: var(--text);
  border-bottom: 2px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.logo {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: var(--text);
}
.nav-link.active-link {
  text-decoration: underline;
}
.theme-btn {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
