---
title: "أوامر لينكس"
domain: "أساسيات"
tags: ["linux", "terminal"]
created: "2023-04-29"
updated: "2026-07-15"
heroImage: "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linux.svg"
outdated: false
stage: "evergreen"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## تعليق متعدد السطور

```
: '
هذا سطر تعليق
و هذا سطر تعليق آخر
'
```

## إظهار الأحجام

### اظهار حجم المجلد

```
du -s -h
```

### اظهار حجم جميع الملفات داخل المجلد

```
du -ah
```

## نسخ المجلدات و الملفات

### نسخ عدة مجلدات في مجلد واحد

```
cp -r /source_directory/{folder1,folder2,folder3} /destination
```

### نسخ مجلد داخل مجلد

```
cp -r source_folder /home/ghazi/Desktop/backup/.local/share/
```

### نسخ كل الملفات بمجلد داخل مجلد آخر

```
cp -r folder1/* folder2
```

### نسخ ملف

```
cp filename directory-name
```

## انشاء zip

```
zip -r backup.zip backup
```
