---
title: "أساسيات ES6"
domain: "أساسيات"
tags: ["javascript", "es6"]
created: "2022-10-31"
updated: "2026-07-15"
heroImage: "https://raw.githubusercontent.com/detain/svg-logos/master/svg/e/es6.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## شرح Arrow Function

نبدا بالدالة العادية و تكتب هكذا regular function

```
function test() {
   return 2;
}
console.log(test());
```

و نستطيع كتابتها بهذه الطريقة

```
let test = function() {
   return 2;
}
console.log(test());
```

و الآن دور الدالة السهمية arrow function

```
let test = () => {
   return 2;
}
console.log(test());
```

سهلة جدا قمنا بحذف كلمة function و اضفنا سهم بعد القوسين =>

بل نستطيع اختصارها ايضا ... اذا كان لدينا one statement و ذلك يكون بحذف return و العارضتين

```
let test = () => 2;
test = _ => 2; // إعادة إسناد لنفس المتغير
console.log(test());
```

الآن لنظف parameter واحد لل function العادية

```
let test = function(param) {
   return param * 2;
}
console.log(test(5));
```

ثم للarrow function

```
let test = (param) => param * 2;
test = param => param * 2; // إعادة إسناد لنفس المتغير
console.log(test(5));
```

و اخيرا اذا كان لدينا اكثر من parameter فلا نستطيع الاستغناء عن الاقواس

```
let test = (param1, param2) => param1 * param2;
console.log(test(5, 5));
```

### ملاحظة : حسب ما قال اسامة الزيرو ... regular function ليست بديل لل arrow function و انما لكل استعماله الخاص

## شرح Call Stack, Web API, Event Loop, Callback Queue

لدينا شيء اسمه Call Stack و هو المكان الذي تنفذ فيه الجافاسكريبت الكود سطرا بسطر. العمليات غير المتزامنة مثل `setTimeout` و `fetch` لا ينفذها ال Call Stack بنفسه، بل يتكفل بها المتصفح عن طريق Web APIs، و عندما تنتهي العملية توضع ال callback الخاصة بها في ال Callback Queue للإنتظار، ثم يأتي دور ال Event Loop الذي ينقل تلك ال callback من ال Callback Queue الى ال Call Stack فقط عندما يكون ال Call Stack فارغا

## شرح asynchronous و synchronous

الجافاسكريبت عبارة عن لغة single threaded بمعنى انها تقوم بشيئ واحد في الوقت الواحد

معنى synchronous programming هو ان اي شيئ تكتبه يجب ان ينتهي حتى يعمل الذي بعده

اما في asynchronous programming فلا يعني ذلك ان الجافاسكريبت تنفذ عدة اشياء بالتوازي (فهي تبقى single threaded) و انما يعني ان العمليات الطويلة مثل ال timers و ال I/O يتم تفويضها الى المتصفح، و تعمل ال callbacks الخاصة بها لاحقا دون ان توقف block باقي الكود

## شرح Promise

### معلومات هامة

اولا promise معناها وعد يعني يمكن للعملية ان تنجح او تفشل

ثانيا promise عبارة عن object

ثالثا promise عملية غير متزامنة asynchronous يعني ان العملية يتم تفويضها و لا توقف block باقي الكود، و عند اكتمالها تعمل ال callback الخاصة بها لاحقا

### كتابة promise

```
const myPromise = new Promise(function (resolve, reject) {

});
```

عليك ان تعلم ان Promise() تقبل parameter و هو عبارة عن function تسمى executer function و هي بذاتها تقبل 2 prameter بداخلها resolve و reject .. طبعا يمكنك تسميتهما كما تشاء

الآن resolve دلالة على نجاح العملية ... اما reject دلالة على فشل العملية مثال

### مثال باستخدام then فقط

```
const myPromise = new Promise(function (resolve, reject) {
	let connect = true;
	if (connect) {
		resolve("connection Established");
	} else {
		reject(Error("connection failed"));
	}
});
```

لكننا لم ننته بعد يا صديقي علينا ان نحدد ما الذي سيحصل اذا تحقق الوعد (resolved) او لم يتحقق(rejected) و ذلك باستعمال .then

```
myPromise.then(
	(resolved) => console.log(resolved), // Connection Established printed in console
	(rejected) => console.log(rejected)  // Error printed in console
);
```

اذا كانت connect = true فسنحصل على connection Established اما اذا كانت false فسنحصل على Error

سوف تعطينا resolved القيمة الموجودة داخل resolve داخل if
سوف تعطينا rejected ال error الموجودة داخل reject داخل else

### مثال باستخدام then و catch

```
myPromise.then((resolved) => console.log(resolved)).catch((rejected) => console.log(rejected));
```
