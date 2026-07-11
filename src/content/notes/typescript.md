---
title: "أساسيات Typescript"
domain: "أساسيات"
tags: ["typescript", "javascript"]
created: "2023-04-29"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## ماهي typescript

تايبسكريبت هي لغة برمجة مبنية على الجافاسكريبت و تم تطويرها من قبل شركة ميكروسوفت

ببساطة javascript with types

تايبسكريبت تضيف مميزات للجافاسكريبت من دون التغيير فيها

يمكن استعمالها في المشاريع الكبيرة فيكون العمل منظم و احترافي

فيما تكمن أهميتها ؟ يمكننا من خلالها اكتشاف الاخطاء قبل تشغيل الكود و هذه العملية تسمى static type checking و هذا يوفر علينا عناء استعمال unit testing في بعض الحالات و ليس كلها

اي كود جافايكريبت يعمل ك كود تايبسكريبت بغض النظر عن الاخطاء التي يجب تصحيحها

هناك اقبال كبير من قبل المكتبات الشهيرة لدعمها و جعلها جزء منها مثل react vue next nuxt

هناك مميزات غير موجودة في جافاسكريبت مثل generics و interfaces و decorators

المتصفح لا يستعمل تايبسكريبت بل يحول الكود الى جافاسكريبت عن طريق compiler

العملية تسمى transpilation

## تثبيت typescript

لاستعمال تايبسكريبت يجب تثبيت nodejs و npm

```
sudo pacman -S nodejs npm
```

الان نثبت تايبسكريبت على مستوى النظام

```
sudo npm i -g typescript
//or
sudo yarn global add typescript
```

للتأكد من انه يعمل بدون مشاكل

```
tsc -v
```

لعمل compile ل ملف

```
tsc filename.ts
```

فينتج عنه filename.js

لمراقبة الملف

```
tsc -w filename.ts
```

لإنشاء ملف التعديلات tsconfig.json

```
tsc --init
```

للمزيد فيما يخص التعديلات
[قناة الزيرو الدرس 3](https://youtu.be/CSll1rsRPOI?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ)

## تعيين البيانات type Annotation

```
let myName: string = "ghazi";
let age: number = 16;
let hire: boolean = true;
let myArray: string[] = ["omar", "said", "mostafa", "kamal"]
let mySecondArray: number[] = [5, 6, 7, 88, 6]

// unknown typw
let all: any = 55.5;
```

النوع any يعني أنه سيقبل اي نوع من البيانات

إعطاء أكثر من نوع للمتغير

```
let myVariable: string | number = 'omar';
// or
let myVariable: (string | number) = 'omar';

myVariable = true; //wrong
myVariable = 5; //correct
myVariable = 'said'; //correct

let myArrayMulti: (string|boolean)[] = ["omar", "said", "mostafa", "kamal",true, false, false];
```

**اذا كان لدينا array داخل array**

```
let myArrayInArray: (string | number | string[] | boolean[]) = ['ahmad',5,['said'],[true,false]];
```

## الدوال

```
function showDetails(theName: string, age: number, salary: number): string{
	return `your name is ${theName} and your age is ${age} , salary is ${salary}`
}

console.log(showDetails('osama', 25, 500))
```

من أجل التخلص من الملاحظات التي تنبه إلى عدك إستخدام النوع any يجب جعل `noImplicitAny = false`

من أجل الحصول على تنبيه عند إنشاء متغير غير مستعمل يجب جعل `noUnusedLocals = true`

من أجل الحصول على تنبيه عند إنشاء parameter غير مستعمل يجب جعل `noUnusedParameters = true`

## تذكير في Function Optional and Default Parameters في الجافاسكريبت

في الجافاسكريبت عند عدم إعطاء arguments لل function ستكون النتيجة undefined

**مثال**

```
function showDetails(theName, age, country){
	return `${theName} ${age} ${country}`
}

console.log(showDetails('osama')) // osama undefined undefined
```

هنا يمكن إعطاء قيم في parameters

**مثال**

```
function showDetails(theName, age=50, country='muslim_land'){
	return `${theName} ${age} ${country}`
}

console.log(showDetails('osama')) // osama 50 muslim_land
```

فإذا قمنا بإعطاء قيمة في parameter و كتبنا undefinded في argument سوف يأخد قيمة parameter

**مثال**

```
function showDetails(theName, age=80, country='muslim_land'){
	return `${theName} ${age} ${country}`
}

console.log(showDetails('osama',33, undefined)) // osama 33 muslim_land
```

لنأتي الآن إلى تايبسكريبت : تايبسكريبت لا يسمح بترك argument فارغ ... لكن هناك حل . و هو إضافة علامة إستفهام للparameter ليعرف أنه optional إختياري

**مثال**

```
function showDetails(theName: string, age?: number, country?: string){
	return `${theName} ${age} ${country}`
}

console.log(showDetails('osama')) // osama undefined undefined
```

لكن عندما يكون لديك parameter إختياري يجب أن تضع parameter الإجباري في الأول
**مثال**

```
function showDetails(theName?: string, age: number, country?: string){
	return `${theName} ${age} ${country}`
}

console.log(showDetails('osama',40)) // error
```

الحل

```
function showDetails(age: number, theName?: string, country?: string){
	return `${theName} ${age} ${country}`
}

console.log(showDetails(40,'osama')) // osama 40 undefined
```

## إستعمال rest parameter و تجربة unary assinement

```
function add(...nums: number[]): number{
	let result = 0;
	//for(let i =0; i < nums.length; i++){
	//	result +=nums[i];
	//}
	nums.forEach(num => result +=num)
	return result
}

console.log(add(5,15,10,100, +true))
```

لجعل boolean رقم نظيف قبله + او -

على سبيل المثال +true تعطينا 1 , -true تعطينا 1- , +false او -false تعطينا 0

## إستخدام arrow function

```
const addWithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrow(5,10))
```

## إستخدام anonymous function

```
const add = function(num1: number, num2: number): number {
	return num1 + num2
}
console.log(add(5,50))
```

## إستعمال Data Types

### إستخدام type Alias

**مثال**

```
type st = string;
let my_name: st = "ghazi"

type standnum = string | number;
let string_and_num: standnum = 50;

string_and_num = 'ahmad'
```

### أمثلة متقدمة من Type Alias

```
type buttons = {
	up: string,
	down: string,
	right: string,
	left: string
}

function getActions(btns: buttons){
	console.log(`action for button up is ${btns.up}`)
	console.log(`action for button up is ${btns.down}`)
	console.log(`action for button up is ${btns.left}`)
	console.log(`action for button up is ${btns.right}`)
}

getActions({up: "jump", down: "down", right: "go right", left: "go left" })
```

لكن مذا إن أردنا أن نزيد نوع آخر type , لكن من دون التعديل في buttons ... نفعل هكذا

```
type buttons = {
	up: string,
	down: string,
	right: string,
	left: string
}

type last = buttons & {
	x: boolean
}

function getActions(btns: last){
	console.log(`action for button up is ${btns.up}`)
	console.log(`action for button up is ${btns.down}`)
	console.log(`action for button up is ${btns.left}`)
	console.log(`action for button up is ${btns.right}`)
	console.log(`action for button x is ${btns.x}`)
}

getActions({up: "jump", down: "down", right: "go right", left: "go left", x: true})
```

### مفهوم literal types

هذه طريقة للتأكد أن النتيجة ستكون واحدة من هذه الأرقام

```
function compare(num1: number, num2: number): 0 | 1 | -1{
	if(num1 === num2){
		return 0;
	}
	else if(num1>num2){
		return 1;
	}
	else {
		return -1;
	}
}

console.log(compare(15,15))
console.log(compare(15,10))
console.log(compare(15,20))
```

**مثال آخر**

```
type nums = 1 | 2 | 3;
let myNumber: nums = 100; // error
let myNumber: nums = 3; // correct
```

### إستخدام tuple

**مثال**

```
let article: [number, string, boolean] = [1, 'bookname', true]

//update article
article = [5,'anotherName', false]
//adding to the tuple
article.push(100)
//print to console
console.log(article) //[5, "anotherName", false, 100]

//destructuring
const [id,title,published] = article;
console.log(id) //5
console.log(title) //"anotherName"
console.log(published) //false
```

### مفهوم Void and Never

#### إستخدام void

إستخدام void يعني أننا لن نرجع أي قيمة

```
function logging(msg: string): void{
	console.log(msg)
	return msg; //error
	return; //correct
}

console.log(logging('hello'))
```

#### إستخدام never

إستخدام never يعني أننا لن نرجع أصلا

```
const fail = (msg: string): never => {
	throw new Error(msg);
	return; //error
}
```

**ملاحظة**

```
function alwaysLog(msg: string): never {
	while(true){
		console.log(msg);
	}
}

alwaysLog("hello")
console.log("test")//error
```

بما أنه لدينا loop لا ينتهي console.log("test") لن يعمل لأنه لا يصل إله أبدا

### مفهوم enums

```
enum level {
	kids = 15,
	easy = 9,
	medium = 6,
	hard = 3
}

let lvl = 'easy'

if (lvl === 'easy'){
	console.log(`the level is ${lvl} and number of seconds is ${level.easy}`)
}
```

**الفيديو القادم 18**

## مصادر :

قناة أسامة الزيرو
