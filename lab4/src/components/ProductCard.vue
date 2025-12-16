<script setup>
const props = defineProps({
  product: { type: Object, required: true },
})
const emit = defineEmits(['add'])
</script>

<template>
  <div class="product-card">
    <div class="product-icon">📦</div>
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-price">
      {{ $n(product.price, 'currency') }}
    </p>
    <button class="add-btn" @click="$emit('add', product)">
      <span>{{ $t('products.add') }}</span>
      <span class="icon">+</span>
    </button>
  </div>
</template>

<style scoped>
.product-card {
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-color);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.product-title {
  color: var(--text-primary);
  margin: 12px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.product-price {
  color: var(--primary-color);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 16px 0;
}

.add-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn:hover {
  background: var(--primary-hover);
  transform: scale(1.02);
}

.add-btn .icon {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
