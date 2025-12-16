<script setup>
import { ref, onMounted, onActivated, onDeactivated } from 'vue'
import UserCard from '../../components/UserCard.vue'

defineOptions({ name: 'Users' })

const users = ref([
  { id: 1, name: 'Захар Бублик', email: 'zahar@gmail.com' },
  { id: 2, name: 'Віка Терещенко', email: 'vika@gmail.com' },
])

// Обробник emit з дочірнього компоненту UserCard
const deleteUser = (id) => {
  users.value = users.value.filter((u) => u.id !== id)
}

// Демонстрація життєвого циклу
onMounted(() => console.log('Users ➝ mounted'))
onActivated(() => console.log('Users ➝ activated'))
onDeactivated(() => console.log('Users ➝ deactivated'))
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-4">👥 Users</h2>

    <div class="space-y-3">
      <UserCard v-for="user in users" :key="user.id" :user="user" @remove="deleteUser" />
    </div>
  </div>
</template>
