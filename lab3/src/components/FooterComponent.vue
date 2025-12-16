<template>
  <footer class="footer">
    <p>© 2025 Cosmos Chronicle. Всі права захищені.</p>
    <nav>
      <RouterLink to="/">Головна</RouterLink> |
      <RouterLink to="/about">Про нас</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  background: var(--bg);
  color: var(--text);
  border-top: 1px solid #444;
}
</style>
