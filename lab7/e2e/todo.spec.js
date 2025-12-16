// @ts-check
import { test, expect } from '@playwright/test'

// -------------------------------------------------------
// Сценарій 1 — відкриття сторінки
// -------------------------------------------------------
test('Відкриття головної сторінки Todo', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('📝 Мої завдання')).toBeVisible()
})

// -------------------------------------------------------
// Сценарій 2 — додавання та видалення задачі
// -------------------------------------------------------
test('Додавання і видалення задачі', async ({ page }) => {
  await page.goto('/')

  // Заповнюємо форму
  await page.getByPlaceholder('Назва').fill('E2E задача')

  // textarea з Описом (а не інпут фільтра!)
  await page.locator('textarea[placeholder="Опис"]').fill('опис E2E')

  // Пріоритет — перший select
  await page.locator('select').first().selectOption('low')

  // Додати
  await page.getByRole('button', { name: '✨ Створити' }).click()

  // Перевірити, що відображено
  await expect(page.getByText('E2E задача')).toBeVisible()

  // Видалити задачу
  await page.getByRole('button', { name: '🗑️' }).click()

  await expect(page.getByText('E2E задача')).not.toBeVisible()
})

// -------------------------------------------------------
// Сценарій 3 — фільтрація
// -------------------------------------------------------
test('Фільтрація задач', async ({ page }) => {
  await page.goto('/')

  // Створити першу задачу
  await page.getByPlaceholder('Назва').fill('Перша задача')
  await page.locator('textarea[placeholder="Опис"]').fill('123')
  await page.locator('select').first().selectOption('low')
  await page.getByRole('button', { name: '✨ Створити' }).click()

  // Створити другу задачу
  await page.getByPlaceholder('Назва').fill('Друга задача')
  await page.locator('textarea[placeholder="Опис"]').fill('456')
  await page.locator('select').first().selectOption('high')
  await page.getByRole('button', { name: '✨ Створити' }).click()

  // Фільтр по назві (input, не textarea)
  await page.locator('input[placeholder="Пошук за назвою"]').fill('Друга')

  // Очікуємо тільки другу
  await expect(page.getByText('Друга задача')).toBeVisible()
  await expect(page.getByText('Перша задача')).not.toBeVisible()

  // Очистити
  await page.getByRole('button', { name: '🔄 Скинути фільтри' }).click()

  await expect(page.getByText('Перша задача')).toBeVisible()
  await expect(page.getByText('Друга задача')).toBeVisible()
})
