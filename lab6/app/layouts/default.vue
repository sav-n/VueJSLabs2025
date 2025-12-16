<template>
  <div class="layout-wrapper">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/">Головна</NuxtLink>
        <NuxtLink to="/blog">Статті</NuxtLink>
        <NuxtLink to="/about">Інфо</NuxtLink>
      </nav>
    </header>

    <main class="content">
      <UContainer>
        <NuxtPage />
      </UContainer>
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Web Dev Portal</p>
    </footer>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fafafa;
  color: #1a202c;
  font-family: "Segoe UI", system-ui, Roboto, Helvetica, Arial, sans-serif;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(26, 32, 44, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  padding: 16px 32px;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav a {
  color: #f7fafc;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  padding: 8px 12px;
  border-radius: 6px;
}

.nav a:hover {
  color: #f6ad55;
  background: rgba(246, 173, 85, 0.1);
}

.content {
  flex: 1;
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer {
  background: #1a202c;
  color: #a0aec0;
  text-align: center;
  padding: 20px;
  font-size: 15px;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}
</style>
