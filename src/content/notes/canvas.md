---
title: "أساسيات canvas"
domain: "أساسيات"
tags: ["javascript", "canvas"]
created: "2022-10-31"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/src/svgs/html.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## طريقة استعمال Html canvas

اولا نقوم بإضافة canvas html tag

```
<canvas id="canvas"></canvas>
```

ثم نقوم بالتحكم به عن طريق الجافاسكريبت

```
const canvas = document.getElementById("canvas");
```

اذا اردت ان يكون حجم الكانفاس (canvas) بحجم الشاشة فهته هي الطريقة

```
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

وباسعمال تايلويند tailwind يمكنك اضافة كلاس class

```
class="w-screen h-screen"
```

وحتى يرى الكانفاس يمكنك اضافة

```
class="border-2 border-black shadow-lg"
```
