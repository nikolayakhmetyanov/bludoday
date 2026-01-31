# bludoday

TanStack Start + Convex приложение.

## Стек технологий

- **Фреймворк**: TanStack Start (React 19 + SSR)
- **База данных**: Convex
- **Стили**: Tailwind CSS v4 + shadcn/ui
- **Linting**: Biome
- **Testing**: Vitest

## Команды разработки

```bash
# Dev сервер
pnpm dev

# Convex dev
pnpm convex:dev

# Сборка
pnpm build

# Запуск production
pnpm start

# Тесты
pnpm test

# Линтинг
pnpm biome:check
pnpm biome:write
```

## Установка

```bash
# 1. Установить зависимости
pnpm install

# 2. Настроить Convex (первый раз)
pnpm convex:dev
# Следуйте инструкциям:
# - Создайте аккаунт на convex.dev
# - Создайте новый проект
# - VITE_CONVEX_URL автоматически добавится в .env.local

# 3. Запустить dev сервер (в отдельном терминале)
pnpm dev
```

## Первый запуск

После `pnpm convex:dev` проверьте что в `.env.local` появился `VITE_CONVEX_URL`:

```bash
cat .env.local
# Должно быть:
# VITE_CONVEX_URL=https://your-project.convex.cloud
```

Если переменная не установлена, приложение все равно запустится, но Convex функции не будут работать.
