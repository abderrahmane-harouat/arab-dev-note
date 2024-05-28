---
title: "إستعمال Iconify في nuxt"
updated: "20 ذو القعدة 1445 ﻬ"
heroImage: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/iconify.svg"
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
