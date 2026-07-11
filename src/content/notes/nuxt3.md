---
title: "إستعمال nuxt 3"
domain: "أُطر ومكتبات"
tags: ["vue", "nuxt"]
created: "2022-10-31"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/bestofjs-nextjs/public/logos/nuxt2.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## انشاء مشروع nuxt 3 جديد

```
pnpm dlx nuxi init .
// pnpm dlx nuxi init nuxt-app
// cd nuxt-app
yarn install
yarn dev
```

## اضافة TailwindCss ل nuxt

```
yarn add --dev @nuxtjs/tailwindcss
```

ثم اضف الى nuxt config

```
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

## استعمال components

انشئ ملف داخل components على سبيل المثال TheHeader.vue و املأه بما شئت ثم استدعه في app.vue بكل سهولة

```
<template>
 <TheHeader />
</template>
```

يمكن استدعائه في pages او layout

## اطلاق المشروع في github pages

اولا نقوم ب عمل generate لننشئ مجلد dist

```
pnpm generate
```

و نضيف هذا الكود الى nuxt.config.ts

```
export default {
  target: 'static'
}
```

ثم

```
export default {
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }
}
```

ثم نقوم بتثبيت push-dir

```
pnpm add push-dir -D
```

ونظيف deploy الى script داخل package.json

```
"scripts": {
  "dev": "nuxt",
  "generate": "nuxt generate",
  "start": "nuxt start",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},
```

و اخيرا ننفذ الاوامر التالية

```
pnpm generate
pnpm deploy
```

## اضافة الصفحات pages

عند انشاء pages الامور ستتغير بحيث يجب انشاء index.vue اجباريا داخل pages لكن لا يمكننا الاستغناء عن app.vue الذي يتواجد في root directory بل نضع داخله

```
<template>
      <NuxtPage/>
</template>
```

و يصبح index.vue هو الصفحة الرئيسية /

و يمكن اضافة الصفحات على سبيل المثال about.vue و نلج اليها في /about

## اضافة layouts

ننشئ مجلد layouts بداخلة ملف default.vue به

```
<template>
  <div>
    Some default layout shared across all pages
    <slot />
  </div>
</template>
```

كل الصفحات ستكون مكان **<slot />** ... الآن في app.vue

```
<template>
  <NuxtLayout>
    some page content
  </NuxtLayout>
</template>
```

## اضافة nuxt content

```
yarn add --dev @nuxt/content
```

ثم نظيفها الى nuxt.config.ts

```
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
})
```

ثم ننشئ ملف content في root directory ثم ننشئ فيه على سبيل المثال home.md او .csv او .yml او .json

```
# الصفحة الرئيسية
```

الآن ننشئ **[slug.vue]** في pages

```
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

بهذا نستطيع الولوج لأي صفحة انشأناها في داخل content عن طريق **localhost:3000/pagename**

## إنشاء الروابط nuxtlink

```
<template>
  <NuxtLink to="/">Home page</NuxtLink>
  <NuxtLink to="/almal">إدارة المال</NuxtLink>
</template>
```
