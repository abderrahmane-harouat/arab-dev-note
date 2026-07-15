---
title: "أساسيات canvas"
domain: "أساسيات"
tags: ["javascript", "canvas"]
created: "2022-10-31"
updated: "2026-07-15"
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

انتبه: استعمال CSS مثل كلاسات تايلويند tailwind

```
class="w-screen h-screen"
```

يقوم فقط بتمديد حجم عرض العنصر على الشاشة، بينما تبقى دقة الرسم الداخلية (drawing buffer) على قيمتها الافتراضية 300x150 فتظهر الرسومات مشوّهة أو ضبابية، لذلك يجب دائمًا ضبط الدقة الداخلية عبر السمتين `width` و `height` أو عن طريق الجافاسكريبت كما في المثال أعلاه

وحتى يرى الكانفاس يمكنك اضافة

```
class="border-2 border-black shadow-lg"
```
