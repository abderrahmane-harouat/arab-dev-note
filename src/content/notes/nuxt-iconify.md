---
title: "إستعمال Iconify في nuxt"
domain: "أُطر ومكتبات"
tags: ["vue", "nuxt", "icons"]
created: "2022-10-31"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/iconify.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

# طريقة استعمال iconify

اولا التثبيت

```
yarn add nuxt-icon
```

يتم إضافتها إلى modules في داخل nuxt.config.ts

```
modules: [
	'nuxt-icon',
]
```

و نظيفها بكل سهولة

```
<Icon name="mdi:youtube" size="96" color="#15CA82"  />
```

نبحث عن الأيقونات في هذا الموقع

```
https://icones.js.org/
```
