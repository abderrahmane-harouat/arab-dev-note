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


