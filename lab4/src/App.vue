<script setup>
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { onMounted, watch } from 'vue'

const { locale } = useI18n()
const settings = useSettingsStore()
const { locale: loc } = storeToRefs(settings)

// синхронізація i18n з персистентним стором
onMounted(() => {
  locale.value = loc.value
})
watch(loc, (v) => {
  locale.value = v
})
</script>

<template>
  <header class="app-header">
    <nav class="nav-menu">
      <RouterLink to="/">{{ $t('nav.products') }}</RouterLink>
      <RouterLink to="/cart">{{ $t('nav.cart') }}</RouterLink>
      <RouterLink to="/profile">{{ $t('nav.profile') }}</RouterLink>
    </nav>
    <div class="lang-switcher">
      <LanguageSwitcher />
    </div>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style>
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --bg-main: #f8fafc;
  --bg-card: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border-color: #e2e8f0;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-main);
  color: var(--text-primary);
}

.app-header {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 16px 32px;
  background: var(--bg-card);
  border-bottom: 2px solid var(--border-color);
  box-shadow: var(--shadow);
}

.nav-menu {
  display: flex;
  gap: 24px;
}

.nav-menu a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s;
}

.nav-menu a:hover {
  background: var(--bg-main);
  color: var(--text-primary);
}

.nav-menu a.router-link-active {
  color: var(--primary-color);
  background: #eff6ff;
  font-weight: 600;
}

.lang-switcher {
  margin-left: auto;
}

.main-content {
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
