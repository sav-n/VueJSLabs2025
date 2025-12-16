<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">📝 Мої завдання</h1>

    <div class="grid gap-2 mb-6">
      <!--v-model для двостороньої прив'язки даних інпутів-->
      <input v-model="newTask.title" name="title" placeholder="Назва" class="border p-2 rounded" />
      <textarea
        v-model="newTask.description"
        placeholder="Опис"
        class="border p-2 rounded"
      ></textarea>

      <select v-model="newTask.priority" class="border p-2 rounded">
        <option disabled value="">Пріоритет</option>
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
      <!--v-on Для обробки подій -->
      <button @click="addTask" class="add-task-btn bg-teal-600 hover:bg-orange-500 text-white py-2 rounded transition-colors">✨ Створити</button>
    </div>

    <div class="border-2 border-teal-200 p-4 rounded-lg mb-6 bg-teal-50">
      <h2 class="font-bold mb-3 text-lg">🎯 Пошук та фільтри</h2>
      <div class="grid grid-cols-2 gap-3">
        <input
          v-model="filters.title"
          placeholder="Пошук за назвою"
          class="border p-2 rounded col-span-2"
        />
        <input
          v-model="filters.description"
          placeholder="Пошук за описом"
          class="border p-2 rounded col-span-2"
        />

        <select v-model="filters.status" class="border p-2 rounded">
          <option value="">Усі статуси</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>

        <select v-model="filters.priority" class="border p-2 rounded">
          <option value="">Усі пріоритети</option>
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>

        <VueDatePicker v-model="filters.dateFrom" placeholder="Від дати" class="col-span-1" />
        <VueDatePicker v-model="filters.dateTo" placeholder="До дати" class="col-span-1" />
      </div>

      <button @click="clearFilters" class="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded mt-2 transition-colors">🔄 Скинути фільтри</button>
    </div>

    <!-- Лічильники -->
    <div class="mb-4 text-sm text-center text-gray-700">
      Всього: <strong class="text-teal-600">{{ totalCount }}</strong> |
      Активних: <strong class="text-blue-600">{{ activeCount }}</strong> |
      Виконаних: <strong class="text-green-600">{{ completedCount }}</strong>
    </div>

    <ul>
      <!--v-for Для відображення списків-->
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        class="flex justify-between items-start border-b py-3"
      >
        <div>
          <!--v-bind Для прив’язки динамічних атрибутів-->
          <h3 :class="task.status === 'done' ? 'line-through text-gray-500' : ''" class="font-bold">
            {{ task.title }}
          </h3>
          <p class="text-sm text-gray-600">{{ task.description }}</p>
          <p class="text-xs text-gray-400">
            Дата: {{ formatDate(task.createdAt) }} | Пріоритет:
            <span :class="priorityColor(task.priority)">{{ task.priority }}</span>
          </p>
        </div>
        <div class="flex gap-2">
          <button @click="toggleStatus(task)" class="text-green-600 hover:text-green-700 text-xl">✅</button>
          <button @click="removeTask(task.id)" class="text-red-500 hover:text-red-700 text-xl">🗑️</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// створення реактивних змінних, для обчислення кількості завдань, щоб автоматично відслідковувати зміни у списку та записувати нове значення в LocalStorage
import { ref, computed, watch, onMounted } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const tasks = ref([])

// Форма додавання
const newTask = ref({
  title: '',
  description: '',
  priority: '',
})

// Фільтри
const filters = ref({
  title: '',
  description: '',
  status: '',
  priority: '',
  dateFrom: null,
  dateTo: null,
})

// --- Логіка ---
const addTask = () => {
  if (!newTask.value.title.trim() || !newTask.value.priority) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.title.trim(),
    description: newTask.value.description.trim(),
    status: 'active',
    createdAt: new Date(),
    priority: newTask.value.priority,
  })

  newTask.value = { title: '', description: '', priority: '' }
}

const toggleStatus = (task) => {
  task.status = task.status === 'active' ? 'done' : 'active'
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}

const clearFilters = () => {
  filters.value = {
    title: '',
    description: '',
    status: '',
    priority: '',
    dateFrom: null,
    dateTo: null,
  }
}

// --- Лічильники ---
const totalCount = computed(() => tasks.value.length)
const activeCount = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completedCount = computed(() => tasks.value.filter((t) => t.status === 'done').length)

// --- Фільтрація ---
const filteredTasks = computed(() => {
  return tasks.value.filter((t) => {
    const matchTitle = filters.value.title
      ? t.title.toLowerCase().includes(filters.value.title.toLowerCase())
      : true
    const matchDesc = filters.value.description
      ? t.description.toLowerCase().includes(filters.value.description.toLowerCase())
      : true
    const matchStatus = filters.value.status ? t.status === filters.value.status : true
    const matchPriority = filters.value.priority ? t.priority === filters.value.priority : true
    const matchDateFrom = filters.value.dateFrom
      ? new Date(t.createdAt) >= new Date(filters.value.dateFrom)
      : true
    const matchDateTo = filters.value.dateTo
      ? new Date(t.createdAt) <= new Date(filters.value.dateTo)
      : true

    return matchTitle && matchDesc && matchStatus && matchPriority && matchDateFrom && matchDateTo
  })
})

// --- LocalStorage ---
onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if (saved) {
    tasks.value = JSON.parse(saved).map((t) => ({
      ...t,
      createdAt: new Date(t.createdAt),
    }))
  }
})

watch(
  tasks,
  (val) => {
    localStorage.setItem('tasks', JSON.stringify(val))
  },
  { deep: true },
)

// --- Допоміжні ---
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const priorityColor = (priority) => {
  if (priority === 'high') return 'text-red-500 font-bold'
  if (priority === 'medium') return 'text-yellow-600'
  return 'text-green-600'
}
</script>
<style scoped>
body {
  font-family: 'Quicksand', sans-serif;
  background: #e0f2f1;
  margin: 0;
  padding: 0;
}

.task-manager {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 137, 123, 0.2);
}

h1 {
  color: #00695c;
}

h2 {
  text-align: center;
  color: #00897b;
}

input,
select,
textarea {
  padding: 10px 14px;
  border: 2px solid #b2dfdb;
  border-radius: 8px;
  margin: 4px 0;
  width: 100%;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #00897b;
}

button {
  background: #00897b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  margin: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

button:hover {
  background: #00695c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 137, 123, 0.3);
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b2ebf2;
  margin: 6px 0;
  padding: 12px;
  border-radius: 10px;
  border-left: 4px solid #00897b;
}

.task-item.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.counter {
  margin-top: 12px;
  text-align: center;
  color: #004d40;
  font-weight: bold;
}
</style>
