<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const { lines, subtotal, count } = storeToRefs(cart)
</script>

<template>
  <section class="cart-section">
    <div class="cart-header">
      <h1>{{ $t('cart.title') }}</h1>
      <span class="item-count">{{ count }} {{ count === 1 ? 'товар' : 'товарів' }}</span>
    </div>

    <div v-if="!lines.length" class="empty-cart">
      <div class="empty-icon">🛒</div>
      <p>{{ $t('cart.empty') }}</p>
    </div>

    <div v-else class="cart-content">
      <table class="cart-table">
        <thead>
          <tr>
            <th>{{ $t('products.title') }}</th>
            <th>{{ $t('cart.qty') }}</th>
            <th>{{ $t('products.price') }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="l in lines" :key="l.id" class="cart-row">
            <td class="item-name">{{ l.title }}</td>
            <td>
              <input
                type="number"
                min="1"
                class="qty-input"
                :value="l.qty"
                @input="cart.setQty(l.id, $event.target.value)"
              />
            </td>
            <td class="item-price">{{ $n(l.price * l.qty, 'currency') }}</td>
            <td>
              <button class="remove-btn" @click="cart.remove(l.id)">
                {{ $t('cart.remove') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-footer">
        <div class="subtotal">
          <span>{{ $t('cart.subtotal') }}:</span>
          <strong class="total-amount">{{ $n(subtotal, 'currency') }}</strong>
        </div>
        <button class="clear-btn" @click="cart.clear()">{{ $t('cart.clear') }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-section {
  max-width: 900px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.cart-header h1 {
  margin: 0;
  color: var(--text-primary);
}

.item-count {
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.empty-cart {
  text-align: center;
  padding: 80px 20px;
  background: var(--bg-card);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-cart p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.cart-table {
  width: 100%;
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border-collapse: separate;
  border-spacing: 0;
}

.cart-table thead {
  background: var(--bg-main);
}

.cart-table th {
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 2px solid var(--border-color);
}

.cart-row {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.2s;
}

.cart-row:hover {
  background: var(--bg-main);
}

.cart-row td {
  padding: 20px 16px;
}

.item-name {
  font-weight: 500;
  color: var(--text-primary);
}

.item-price {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
}

.qty-input {
  width: 80px;
  padding: 8px 12px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  transition: border-color 0.2s;
}

.qty-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.remove-btn {
  padding: 8px 16px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.remove-btn:hover {
  background: #dc2626;
}

.cart-footer {
  margin-top: 24px;
  padding: 24px;
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtotal {
  font-size: 1.2rem;
  display: flex;
  gap: 16px;
  align-items: center;
}

.total-amount {
  color: var(--primary-color);
  font-size: 1.5rem;
}

.clear-btn {
  padding: 12px 32px;
  background: var(--text-secondary);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-btn:hover {
  background: var(--text-primary);
  transform: scale(1.05);
}
</style>
