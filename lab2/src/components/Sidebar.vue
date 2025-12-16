<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('auth_token')
  router.push('/login')
}

const currentUser = inject('currentUser')
</script>

<template>
  <aside class="w-64 bg-gray-200 min-h-screen p-4 flex flex-col justify-between">
    <div>
      <h2 class="text-xl font-bold mb-4">Admin Panel</h2>

      <!-- Іменований слот для меню -->
      <slot name="menu" />

      <!-- Умовне відображення даних про користувача -->
      <div v-if="currentUser" class="mt-6 p-3 border-t border-gray-300 text-sm bg-gray-100 rounded">
        <p>
          <strong>👤 {{ currentUser.name }}</strong>
        </p>
        <p class="text-gray-600">{{ currentUser.role }}</p>
      </div>
    </div>

    <div class="mt-6">
      <button @click="logout" class="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
        Вийти
      </button>
      <!-- Іменований слот для футера -->
      <slot name="footer">
        <p class="text-gray-500 text-sm">© 2025 Nikita</p>
      </slot>
    </div>
  </aside>
</template>
