---
title: "أمثلة Deno"
domain: "أُطر ومكتبات"
tags: ["deno", "javascript"]
created: "2023-04-29"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_denoify.svg"
outdated: true
outdatedReason: "بعض الأوامر تخص ما قبل Deno 2 — علم --unstable أُزيل، و serve من std/http استُبدل بـ Deno.serve المدمج"
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## ارسال طلب http الى موقع

```
// first_steps.ts
const url = Deno.args[0]; // url = first argument after run
const res = await fetch(url); // fetch url

// We parse the response body as an ArrayBuffer, await the response, and convert it into a Uint8Array to store in the body constant.
const body = new Uint8Array(await res.arrayBuffer());
// We write the contents of the body constant to stdout.
await Deno.stdout.write(body);
```

بعد ذلك نطبق الامر التالي مع إضافة `--allow-net` قبل إسم الملف

```
deno run --allow-net first_steps.ts https://abdurahman-ghazi.github.io/
```

## قراءة الملفات

```
import { copy } from "https://deno.land/std@0.166.0/streams/conversion.ts";
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}
```

بعد ذلك سنستعمل الامر cat الموجود في مستودع deno لقراءت الملف hosts مع إضافة `--allow-read`

```
// macOS / Linux
deno run --allow-read https://deno.land/std@0.166.0/examples/cat.ts /etc/hosts
```

## إنشاء خادم server

```
// http_server.ts
import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/denoland", {
    // The init object here has an headers object containing a
    // header that indicates what type of response we accept.
    // We're not specifying the method field since by default
    // fetch makes a GET request.
    headers: {
      accept: "application/json",
    },
  });
  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

console.log("Listening on http://localhost:8000");
serve(handler);
```

بعد ذلك نشغل الخادم

```
deno run --allow-net --allow-write http_server.ts
```

و نجربه بإرسال طلب عن طريق curl

```
curl http://localhost:8000
```

## إنشاء تطبيق عن طريق oak و deno و vite

أولا نكتب الأمر

```
deno run --unstable -A npm:create-vite-extra
```

بعد ذلك نختار اسم للمشروع ثم يمكننا إختيار deno-vue ثم

```
cd project_name
deno task --unstable dev
```
