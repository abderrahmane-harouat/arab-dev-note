---
title: "تعديلات flutter و neovim"
domain: "أُطر ومكتبات"
tags: ["flutter", "vim"]
created: "2022-10-31"
updated: "2026-07-15"
heroImage: "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/flutter.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## بدأ تطبيق فلاتر

```
:CocCommand flutter.run
```

## فتح debugger

```
space+f+d
```

## الخروج من النوافذ

```
:q
```

## أوامر في فيم

```
ci"   تغيير المحتوى داخل double quotes
ci'   تغيير المحتوى داخل single quotes
ciw   تغيير محتوى كلمة
ci(   تغيير المحتوى داخل الاقواس
```

## فتح nerdtree و التعديل بداخله

```
فتح Ctrl+t
لانشاء ملف او حذفه او شيء اخر اضغط m
```

## عمل import للمكتبة بعد stless او stful

```
space+a+arrow down  و هذا بعد الذهاب الى stless او stful بعني مكان الخط الاحمر error
```

## فتح fuzzy finder للبحث السريع للملفات

```
Ctrl+p
```

**ملاحظة** : هذا الاختصار يحتاج إلى تثبيت plugin خاص بالبحث مثل fzf او ctrlp.vim و ربطه بهذا الاختصار. في إعدادات neovim الموجودة في هذا الموقع، الاختصار `Ctrl+p` مربوط بلصق (paste) من الـ clipboard و ليس بأي fuzzy finder

## لتغيير الدالة او جعلها داخل Center

```
space+a+w
```

## اقتراح تلقائي

```
Ctrl+ space
```
