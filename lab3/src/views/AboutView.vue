<template>
  <section class="about">
    <h1>Про Cosmos Chronicle</h1>
    <p>
      Cosmos Chronicle — інформаційний ресурс про космічні дослідження: пілотовані місії, запуски космічних апаратів,
      астрономічні відкриття та вивчення Всесвіту. Ми публікуємо найцікавіші події у зручному форматі.
    </p>

    <p>Всі матеріали зберігаються локально у форматі статичних даних</p>

    <AdSlot />
  </section>
</template>

<script setup>
import AdSlot from '../components/AdSlot.vue'
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
</style>
