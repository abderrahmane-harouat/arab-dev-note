---
title: "أساسيات Deno"
domain: "أُطر ومكتبات"
tags: ["deno", "javascript"]
created: "2023-04-29"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/devicons/devicon/master/icons/denojs/denojs-original.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## تثبيت deno

```
sudo pacman -S deno
```

للتجربة

```
deno --version
```

أداة vscode

```
https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno
```

## اول برنامج deno

```
// first_steps.ts
console.log("Welcome to Deno!");
```

بعد ذلك نقوم بالتشغيل

```
deno run first_steps.ts
```

## مراقبة الملف watch

```
// first_steps.ts
console.log("Welcome to Deno!");
```

بعد ذلك نقوم بالتشغيل مع إضافة `--watch` فإذا قمنا بتعديل على الملف نلاحظ التغيير مباشرة

```
deno run --watch first_steps.ts
```
