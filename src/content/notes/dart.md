---
title: "أساسيات Dart"
domain: "أساسيات"
tags: ["dart", "flutter"]
created: "2023-04-29"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_dartlang.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## تعرف على Dart

### مميزات اللغة

- سريعة
- آمنة
- سهلة التعلم

### معلومات عامة

- ظهرت في 10 أكتوبر 2011
- طورتها شركة جوجل
- تستخدم في تطوير تطبيقات web, desktop , mobile في flutter

### بيئة العمل

يمكن تثبيتها عن طريق

```
sudo pacman -S dart
```

او البدأ بإستخدامها مباشرة عن طريق الموقع

```
https://dartpad.dev/
```

### برنامج السلام عليكم

```
void main() {
  print('السلام عليكم');
}
```

## أساسيات اللغة

### المتغيرات Variables

#### تعريف المتغيرات باستخدام var

لتعريف متغير في Dart نستخدم كلمة var، ولتوضيح الفكرة نلاحظ المثال التالي:

```
var age;
```

في المثال أعلاه قمنا بإنشاء وتعريف متغير باسم age، وذلك لحفظ قيمة العُمر بداخله. الآن سنقوم بإسناد قيمة العُمر 26 له:

```
age = 26;
```

كان بإمكاننا كتابة

```
var age = 26;
```

يمكننا تغيير القيمة فيما بعد هكذا

```
age = 30;
```

#### تعريف أكثر من متغير في سطر واحد

```
var name = "Khaled", age = 21, isMarried = false;
```

### الثوابت Constants

تختلف الثوابت Constants عن المُتغيرات Variables في أنه لا يمكن تغيير قيمتها بعد إسناد أول قيمة لها، وستظل قيمة الثابت كما هي طيلة فترة البرنامج. لتعريف ثابت في Dart نستخدم كلمة const. لتوضيح الفكرة نلاحظ المثال التالي:

```
const weekDays = 7;
```

### التعليقات Comments

تعليق السطر الواحد Single Line Comment.

```
// This is a comment.
va age = 25; // This is my age.
```

تعليق متعدد الأسطر Multi-line Comments

```
/* Write your
   comments here..
*/
```

### التسميات Naming

للتسميات في لغة Dart شروط ومن غير الممكن تسمية المتغيرات أو الثوابت إذا خالفت هذه الشروط.

١. لا يمكن تسمية متغير يحتوي على كلمتين، ولتوضيح الفكرة نلاحظ المثال التالي:

```
var my name = "khalid"; // Wrong
```

```
var myName = "Khalid"; // Correct
```

٢. لا يمكن التسمية بأسماء تحتوي في داخلها على إحدى الرموز الخاصة بالعمليات مثل علامة الجمع + وعلامة الطرح وإلى آخره، ولتوضيح الفكرة نلاحظ المثال التالي:

```
var +name = "Khalid" // Wrong
```

٣. لا يمكن التسمية بأسماء محجوزة في اللغة مثل كلمة var الخاصة بتعريف المتغيرات أو كلمة const الخاصة بتعريف الثوابت.

```
var const = "Khalid" // Wrong
```

## أنواع البيانات datatypes

تدعم لغة Dart عدد من أنواع البيانات:

```
int لتمثيل الأعداد الصحيحة.
double يستخدم لتمثيل الأرقام التي تحتوي على النقطة العشرية.
String يستخدم لتمثيل أنواع البيانات النصية.
Boolean أي بيانات من هذا النوع تكون ضمن قيمتين وهما true و false.
```

### تعريف متغير من نوع String

يمكننا استخدام ثلاثة طرق مختلفة للتعامل مع النصوص على النحو التالي:

استخدام علامات التنصيص المفردة Single Quote.

```
var message = 'Welcome to Dart';
```

استخدام علامات التنصيص المزدوجة Double Quote.

```
var message = "Welcome to Dart";
```

### طريقة دمج النصوص باستخدام علامة “+”

```
var itemTwo = "Dart";
var message = "Welcome to " + itemTwo;
```

### إسناد قيم باستخدام علامة “$”

يمكننا إسناد قيم متغيرات أو ثوابت بداخل العبارات النصية لتكون العبارة النصية تحتوي على قيمة المتغير أو الثابت على النحو التالي:

```
var num = 1;
var message = "the value of num is $num";
```

### النصوص ومفهوم Escape Character

تستخدم هذهِ العمليات داخل النص String وكل واحدة منها تقوم بعملية محددة فعلى سبيل المثال n\ يجعل ما بعده على سطر جديد،

```
Horizontal Tab t\ يضيف عدد من المسافات في مكان وضعه
Newline n\ يقوم بجعل ما بعده على سطر جديد
Single quote '\ تقوم بإضافة ' مكان وضعها
Double quote "\ تقوم بإضافة " مكان وضعها
Backslash \\ تقوم بإضافة \ مكان وضعها
```

### تعريف متغير من نوع Number

يُعرّف المتغير من نوع number كتعريف المتغير العادي، ويُسند إليه قيمة رقم، نلاحظ المثال التالي:

```
var valueType = 2;
```

### تعريف متغير من نوع Double

يُعرّف المتغير من نوع Double كتعريف المتغير العادي، ويُسند إليه قيمة رقم عشري، نلاحظ المثال التالي:

```
var valueType = 2.0;
```

### تعريف متغير من نوع Boolean

```
var value = true;
```

### تعريف التغيرات بنوع المتغير

تحتوي لغة Dart على ميزة safe type، أي أنها تمتلك ميزة الأمان عند تعريف المتغيرات، نلاحظ المثال التالي:

```
int intValue = 2;
```

في هذا المثال قنا بتعريف متغير من نوع عدد صحيح، بمعنى أنه لا يمكننا إسناد قيمة غير قيم الأعداد الصحيحة ولو أسندنا له قيمة عدد بخلاف هذا النوع فسوف يظهر لنا خطأ لأننا أسندنا قيمة لمتغير لا يقبل هذا النوع من القيم، نلاحظ المثال التالي:

```
int intValue;
intValue = "Not int";
// Error: A value of type 'String' can't be assigned to a variable of type 'int'.
```

كذلك يمكننا تعريف بقية الأنواع الأخرى باستخدام نوع المتغير كما هو موضح في المثال التالي:

```
int intValue = 2;
double doubleValue  = 2.1;
String stringVale = "StringValue";
bool boolValue = true;
```

## العمليات Operators

هناك عدد من العمليات المختلفة التي يمكنك استخدامها أثناء البرمجة، مثل العمليات الرياضية وعمليات المقارنة والعمليات المنطقية وغيرها من العمليات المُختلفة، سنتحدث في هذا الجزء عن مجموعة من أهم العمليات التي توفرها لغة Dart.

### العمليات الحسابية Arithmetic Operators

ببساطة، يمكنك تنفيذ العمليات الرياضية المختلفة باستخدام الصيغة التالية:

```
result = left op right;
```

حيث يمثل op نوع العملية الرياضية المُراد استخدامها، ويمثل كل من left و right القيمتين (أو المتغيرين أو الثابتين) اللذين سيتم تنفيذ العملية op عليهما

```
Addition + تقوم بتنفيذ عملية الجمع.
Subtraction - تقوم بتنفيذ عملية الطرح.
Division / تقوم بتنفيذ عملية القسمة.
Multiplication * تقوم بتنفيذ عملية الضرب.
```

لتوضيح الفكرة، دعنا نقوم باستبدال op بأحد العمليات السابقة، وسنقوم هنا باختيار الجمع + كمثال يمكن تطبيقه على باقي العمليات الأخرى. يوضح السطر التالي هذا الأمر:

```
var result = 5 + 2;
```

### عمليات المقارنة Comparison Operators

يمكنك تنفيذ عمليات المقارنة المختلفة باستخدام الصيغة التالية مع التنبيه على أنه يمكنك استخدامها في سياقات برمجية أخرى دون إسنادها إلى قيمة، مثل استخدامها كشرط مع جملة if كما سنرى لاحقًا:

```
Greater Than >
```

تعيد true في حال كان left أكبر من right.

```
Less Than <
```

تعيد true في حال كان left أصغر من right.

```
Greater Than or Equal >=
```

تعيد true في حال كان left أكبر من أو يساوي right.

```
Less Then or Equal <=
```

تعيد true في حال كان left أصغر من أو يساوي right.

```
Equal ==
```

تعيد true في حال كان left يساوي right من حيث القيمة فقط.

```
Not Equal !=
```

تعيد true في حال كان left لا يساوي right من حيث القيمة فقط.

دعنا نقوم الآن باستبدال op بأحد العمليات السابقة، وسنقوم هنا باستبدالها بأكبر من < ، ونستخدمها بصيغة Dart على النحو التالي:

```
var result = 5 > 2;
```

في هذه الحالة، قمنا بتنفيذ عملية المقارنة باستخدام < وسيتم تخزين الناتج -وهو true- في المتغير result.

### العمليات المنطقية Logical Operators

```
and &&
```

ستكون النتيجة true في حالة واحدة فقط، وهي إن كانت left و right كلاهما true.

```
Or ||
```

ستكون النتيجة false في حالة واحدة فقط، وهي إن كانت left و right كلاهما false.

```
Not !
```

يقوم بعكس قيمة right. في حال كانت right تساوي true فستكون النتيجة هي false، والعكس صحيح.

```
var first = true, second = false;
var andResult = first && second; // false
var orResult = first || second;  // true
var notResult = !first // false
```

### نظرة على Increment و Decrement

من العمليات المتكررة أثناء البرمجة، عملية زيادة واحد على قيمة المتغير الحالية أو إنقاص واحد منها، وتسمى عملية الزيادة في هذه الحالة Increment وتُسمى عملية الإنقاص Decrement، لتوضيح الفكرة العامة، نلاحظ الأسطر التالية:

```
var number = 5;
number = number + 1; // 6
number = number - 1; // 5
```

في السطر الثاني، قمنا بزيادة واحد على قيمة number، لتصبح القيمة 6، وهذا هو المقصود بمفهوم Increment. وقمنا في السطر الثالث بإنقاص واحد من قيمة number، لتصبح 5، وهذا هو المقصود بمفهوم Decrement.

توفر لغة Dart طريقة مُختصرة لتنفيذ كلتا العمليتين السابقتين، وذلك من خلال استخدام معامل الزيادة ++ لزيادة واحد على قيمة المتغير، ومعامل الإنقاص -- لإنقاص واحد من قيمة المتغير، ولتوضيح الفكرة سنقوم بإعادة كتابة المثال السابق بالطريقة المُختصرة في المثال التالي:

```
var number = 5;
number++; // number = number + 1 (increment)
number--; // number = number - 1 (decrement)
```

## الشروط Conditions

### نظرة على if statement

```
if(condition){
  statement1
  statement2
  ...
  statementN
}
```

مثال

```
var age = 25;
if(age > 18){
  print("You are an adult");
}
// You are an adult
```

### استخدام else مع if

```
var age = 17;
if(age > 18){
  print("You are an adult");
}
else{
  print('You are a minor');
}
//You are a minor
```

### اختبار أكثر من شرط باستخدام else if

```
var trafficLight = "red";
if(trafficLight == "green"){
   print("Go!");
}else if(trafficLight == "yellow"){
   print("Slow Down");
}else{
   print("Stop!");
}
//Stop!
```

### استخدام Ternary Operator

```
var age = 17;
(age > 18) ? print("You are an adult") : print("You are a minor");
//You are a minor
```

### نظرة على Switch statement

```
var trafficLight = "red";
switch (trafficLight) {
  case "green":
    print("Go!");
    break;
  case "yellow":
    print("Slow Down");
    break;
  case "red":
    print("Stop!");
    break;
  default:
    print("Invalid light");
}
//Stop!
```

### استخدام default للتعامل مع الحالات الغير متوقعة

```
var trafficLight = "blue";
switch (trafficLight) {
  case "green":
    print("Go!");
    break;
  case "yellow":
    print("Slow Down");
    break;
  case "red":
    print("Stop!");
    break;
  default:
    print("Invalid light");
}
//Invalid light
```

### الفرق بين switch statement و if statement

- تستقبل switch statement قيمة value ويتم تنفيذ الأوامر التابعة للحالة case المتطابقة.
- تستقبل if statement شرط condition ويتم تنفيذ الأوامر التابعة للشرط المتحقق.

## التكرار Loop

### تكرار العملية باستخدام for

قد نحتاج في بعض الحالات إلى‭ ‬تكرار ‬مجموعة من التعليمات ‬البرمجية ‬لعدد من المرات، 10، 20‬،‭ ‬أو‭ ‬حتى‭ ‬100‭ ‬مرة ‬أو‭ ‬أكثر،‭ ‬فبدلًا من تكرار كتابة التعليمات البرمجية يمكننا استخدام .‬for

```
var len = 5;
for(var i = 0; i < len; i++){
    print(i);
}
// 0
// 1
// 2
// 3
// 4
```

### تكرار العملية باستخدام while

```
var number = 5;
while(number >= 1){
    print(number);
     number--;
}
```

### تكرار العملية باستخدام do-while

```
var number = -1;
do{
    print(number);
     number--;
}while(number >= 1);
//-1
```

### إيقاف التكرار واستخدام break

```
for(var i = 1; i < 10; i++){
    if(i % 2 == 0){
        break;
    }
    print(i);
}
```

### تجاوز خطوة من التكرار واستخدام continue

```
for(var i = 1; i < 10; i++){
    if(i % 2 == 0){
        continue;
    }
    print(i);
}
```

## القوائم List

```
var colors = ["red", "green", "blue"];
```

كذلك يمكننا تعريف القائمة باستخدام نوع القائمة كما هو موضح في السطر التالي:

```
List<String> colors = ["red", "green", "blue"];
```

### الوصول لقيمة من خلال الرقم Index

```
//index:        0       1       2
var colors = ["red", "green", "blue"];
```

الآن لو أردنا الوصول للقيمة green لطباعتها مثلًا، فسنجد أن رقم index الخاص بها هو 1، لذلك سنستخدم اسم المصفوفة colors مع الرقم 1 للوصول إليها على النحو التالي:

```
print(colors[1]); //green
```

### تعديل قيمة من قيم المصفوفة

```
colors[2] = "black";
```

### عدد عناصر المصفوفة واستخدام length

```
var colors = ["red", "green", "black"];
print(colors.length);
//3
```

### إضافة عنصر جديد للمصفوفة

```
colors.add("white");
```

ستضاف في آخر القائمة

### قراءة عناصر القائمة

```
var colors = ["red", "green", "black", "white"];
for (var color in colors){
    print(color);
}
```

### الحصول على index ال string الموجود بالقائمة

```
List<String>  names = ['Khalid', 'Ali','Sameer'];
print(names.indexOf('Khalid'));
```

## الدوال Functions

### تعريف دالة Function

لتعريف دالة يمكننا كتابة اسم الدالة متبوعة بأقواس () ، وفي حالتنا هنا اسم الدالة printMessage ولتوضيح الفكرة نلاحظ المثال التالي:

```
printMessage(){
    print("Welcome to Dart");
}
```

### استدعاء الدالة Function Call

لاستدعاء الدالة نقوم بكتابة اسم الدالة متبوعًا () على النحو التالي:

```
void main(){
  printMessage();
}
```

### الدالة والمدخلات ومفهوم Parameters

لإنشاء‭ ‬الدالة مع parameter ‬نقوم ‬بتحديد نوع و‭‬اسم‭ ‬المدخل الذي‭ ‬سوف‭ ‬يستقبل القيمة‭ ‬بين ‬الأقواس‭(parameter‭) ‬ ‬ ، ويصبح بإمكاننا استخدامه داخل الدالة، كما‭ ‬هو‭ ‬موضح‭ ‬بالشكل‭ ‬التالي‭ :‬

```
printMessageWithParam(String message){
    print("Welcome to $message ");
}
```

### الدالة والمدخلات ومفهوم Arguments‭

لاستدعاء ‬الدالة‭ ‬السابقة‭ ‬نقوم‭ ‬بكتابة‭ ‬اسم‭ ‬الدالة‭ ‬ثم‭ ‬بين‭ ‬القوسين‭ ‬نكتب‭‬‭ ‬القيمة‭ ‬المطلوب‭ ‬إسنادها،‭ ‬كما‭ ‬هو‭ ‬موضح‭ ‬بالشكل‭ ‬التالي: ‬

```
printMessageWithParam("Dart");
```

**ملاحظة**: يجب أن يكون ترتيب قيم Arguments مبني على Parameters.

### الفرق بين Parameter و Argument

تسمى المدخلات التي يتم كتابتها عند تعريف الدالة parameter بينما تسمى القيم الممررة للدالة عند الاستدعاء argument.

### إنشاء‭ ‬الدالة‭ ‬مع ‭ ‬Return

لإنشاء‭ ‬دالة‭ ‬تعود‭ ‬بقيمة‬‭ ‬علينا أولًا تحديد نوع القيمة التي سوف تعيدها هذه الدالة قبل اسم الدالة ثم نستخدم‭ ‬عبارة‭ ‬return‭ ‬متبوعة ‬بالقيمة‭ ‬التي‭ ‬سوف‭ ‬تعود‭ ‬بها‭ ‬الدالة،‭ ‬ويوضح ‬المثال‭ ‬التالي‭ ‬كيفية‭ ‬إنشاء‭ ‬دالة تعود بناتج جمع عددين:‬

```
int sum(one, two){
    return one + two;
}
void main(){
   print(sum(5, 7));
}
```

### مفهوم Arrow Function

هي طريقة مختصرة لكتابة الدوال في Dart، بحيث تُعرف الدالة دون استخدام الأقواس{}، وتكتب parameters أولًا ويفصلها عن محتوى الدالة سهم <=. لاحظ الدالة في المثال التالي:

```
int sum(one, two) => one + two;
```

## المصدر

[منصة سطر](satr.codes)
[موقع hackmd.io](https://hackmd.io/@kuzmapetrovich/S1x90jWGP)
