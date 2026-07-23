---
title: "إستعمال viteJs"
domain: "أدوات"
tags: ["vite", "bundler"]
created: "2022-10-31"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/bestofjs-nextjs/public/logos/vite.svg"
outdated: true
outdatedReason: "خطوات إعداد Tailwind تخص v3 — الأمر tailwindcss init و توجيهات @tailwind أُزيلت في Tailwind v4"
trashed: true
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## اضافة TailwindCss ل vite

```
pnpm add tailwindcss postcss autoprefixer -D
npx tailwindcss init -p
```

هنا يجب تعديل المسارات بهذه الطريقة في ملف `tailwind.config.cjs`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

انشئ ملف `style.css` داخل `src` و اضف

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

استدعي هذا الاخير في `main.ts`

```
import './style.css'
```

### اضافة daisyui مع tailwind

```
yarn add daisyui
```

ثم نعدل `tailwind.config.js`

```
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

### تحويل الموقع الى العربي RTL

نذهب الى `index.html` و نظيف `dir="rtl"` الى `<body>`

### اضافة font

اضافة `font family` في `tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
        fontFamily:{
          tajawal: 'Tajawal, sans-serif'
        },
    },
  },
  plugins: [],
}
```

اضافة هذا في `style.css` الموجود في مجلد `src`

```
@layer base{
	@font-face {
		font-family:  'Tajawal';
		src:  url('/fonts/Tajawal-Regular.ttf');
	}
}
```

ولا تنسى تحميل و اضافة الفونت التي تريدها `Tajawal-Regular.ttf` في `public/fonts`
و اخيرا تستطيع اضافة كلاس `font-tajawal`
