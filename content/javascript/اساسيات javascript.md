---
title: "أساسيات javascript"
updated: "20 ذو القعدة 1445 ﻬ"
heroImage: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/javascript.svg"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## مقدمة في المتغيرات و الثوابت

أثناء عملك في كتابة البرامج والمشاريع، ستحتاج في مرحلةٍ ما إلى التعامل مع البيانات، وعند رغبتك في تخزين تلك البيانات، فإنك ستحتاج إلى شيء يقوم بتخزينها لك، وهذا هو عمل المتغيرات، فهي الحاويات التي تُخزن وتحفظ مايوضع فيها حتى نتمكن من استخدامها في وقت لاحق. إذًا، يمكن النظر إلى المتغير على أنه أسلوب بسيط لتخزين البيانات واسترجاعها بشكل مؤقت أثناء عمل البرنامج.

### المتغيرات Variables

تستخدم المتغيرات لتعريف القيم التي من الممكن أن تحدث أثناء سير البرنامج مثل: عمر الشخص ودرجة حرارة الغرفة، أي أنها تحتوي على قيمة قابلة للتحديث.

#### تعريف المتغيرات باستخدام let

لتعريف متغير نستخدم التعبير `let` متبوعًا باسم المتغير وعلامة الإسناد ثم القيمة المراد إسنادها للمتغير، لتوضيح الفكرة نلاحظ المثال التالي:

```
let age = 26
```

في المثال أعلاه قمنا بتعريف متغير باسم age، وأسندنا إليه القيمة 26 والتي تمثل العمر الآن يُمكننا استخدام age في أماكن مُختلفة في البرنامج وسيتم استبدالها بالقيمة 26.

#### استخدام المتغير

يمكن استخدام المتغير بعد تعريفه في أكثر من مكان وسوف يتم استبداله بالقيمة التي يحتفظ بها، لفهم الفكرة نلاحظ المثال التالي:

```
console.log(age) //26
```

في المثال السابق قمنا باستخدام المتغير age في عملية الطباعة console.log والنتيجة كانت طباعة القيمة التي يحتفظ بها المتغير.

كما نلاحظ تمت طباعة العدد 26 وهذا لأن المتغير age يحتفظ بهذه القيمة.

#### تحديث قيمة المتغير

يمكن تحديث قيمة المتغير بعد تعريفه، فمثلاً بعد تعريفنا للمتغير السابق age يمكننا تغيير قيمته من 26 إلى 30، ولتوضيح الفكرة نلاحظ المثال التالي:

```
age = 30
console.log(age) //30
```

في الكود السابق قمنا بطباعة قيمة المتغير age مرتان، الأولى كانت قبل تحديث القيمة والثانية بعد تحديث قيمة المتغير والنتيجة هي طباعة العدد 26 ثم طباعة العدد 30:

يمكنك استخدام `var` بنفس الأسلوب الذي استخدمت فيه `let` لتعريف متغير، ومع ذلك لايُنصح باستخدام `var` لأنها تمثل التعبير المستخدم في الأسلوب القديم لتعريف المتغيرات، ويُكتفى باستخدام التعبير `let` من الآن فصاعدًا.

#### تعريف أكثر من متغير في سطر واحد

يمكنك تعريف أكثر من متغير في سطر واحد -كطريقة مُختصرة بدلًا من تعريف كل متغير على حدة- وذلك باستخدام الفاصلة، يوضح السطر التالي هذهِ الفكرة:

```
let name = "Khaled", age = 21, isMarried = false
```

نلاحظ أننا استخدمنا let مرة واحدة فقط لتعريف ثلاث متغيرات. تعرفنا في هذا الدرس على مفهوم المتغيرات والفائدة منها، ثم تعرفنا على طريقة إنشاء وتعريف المتغيرات وإسناد القيم إليها وتحديثها واستخدامها وتوظيفها برمجيًا، كما تعرفنا على طريقة تعريف أكثر من متغير في سطر واحد.

### مقدمة في الثوابت Constants

الثوابت هي طريقة من طرق تخزين البيانات الثابتة وحفظها، فهي الحاويات التي تُخزن مايوضع فيها حتى نتمكن من استخدامها في وقت لاحق.

#### الثوابت Constants

تستخدم الثوابت لتعريف القيم التي لن تحدث بعد أن يتم إسنادها، مثل :تاريخ الميلاد وعدد أيام الأسبوع، أي أنها تحتوي على قيمة لن يتم تحديثها.

#### تعريف الثوابت باستخدام const

تختلف الثوابت Constants عن المُتغيرات Variables في أنه لايمكن تغيير قيمتها بعد إسنادها، وستظل قيمة الثابت كما هي طيلة فترة البرنامج. لتعريف ثابت نستخدم التعبير const. لتوضيح الفكرة نلاحظ المثال التالي:

```
const weekDays = 7
const dateOfBirth = "10/02/1990"
```

في المثال السابق قمنا بإنشاء ثابت باسم weekDays يمثل عدد أيام الأسبوع و ثابت آخر باسم dateOfBirth يمثل تاريخ الميلاد، وبما أن القيمتان ثابتتان ولن يتم تحديثهما فيمكن تخزينهما كثوابت في البرنامج باستخدام const كما سبق ورأينا. أيضا، يمكنك تعريف أكثر من ثابت في سطر واحد، كطريقة مُختصرة بدلاً من تعريف كل ثابت على حدة وذلك باستخدام الفاصلة، يوضح السطر التالي هذهِ الفكرة:

```
const weekDays = 7, dateOfBirth = "10/02/1990"
```

نلاحظ أننا استخدمنا const مرة واحدة لتعريف ثابتان تعرفنا في هذا الدرس على الثوابت ونقطة الاختلاف بينها وبين المتغيرات وتعرفنا على طريقة تعريف الثابت وإسناد قيمة له وتوظيفه في البرنامج، وعلى طريقة تعريف أكثر من ثابت في سطر واحد.

## التعليق في جافاسكريبت

في حال قمنا بإضافة تعليقات فإنه سيتم تجاهل هذه التعليقات عندما نقوم بتنفيذ البرنامج

```
single line comment
// this is comment

multiline comment
/* this is
   comment */
```

## أنواع البيانات data types

النوع String: يمثل هذا النوع البيانات النصيّة مثل characters والنصوص strings.

النوع Number: يمثل هذا النوع البيانات الرقميّة مثل الأعداد الصحيحة integers والأعداد ذات النقطة العشرية double و float.

النوع Boolean: يمثل هذا النوع إحدى القيمتين إما true أو false.

النوع null: يدل هذا النوع على عدم وجود قيمة.

النوع undefined: يدل هذا النوع على أن القيمة غير معرفة.

**استخدام typeof لمعرفة نوع البيانات**
لمعرفة نوع القيمة المسندة للمتغيّر نستخدم typeof متبوعة باسم المتغيّر نلاحظ المثال التالي:

```
let name = 'Nasser';
let age = 30;
let isStudent = true;
let isEmployee = false;
let homeAddress = null;
let phoneNumber;
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof isEmployee); //boolean
console.log(typeof homeAddress); //object
console.log(phoneNumber); //undefined
```

### طرق كتابة String

```
console.log('Welcome to JavaScript');
console.log("Welcome to JavaScript");
console.log(`Welcome to JavaScript`);
//Welcome to JavaScript
```

كتابة نص متعدد الأسطر

```
let message = `Welcome to
JavaScript`;
console.log(message);
//Welcome to
JavaScript
```

إدراج Expression داخل Template Strings

```
let price = 5.75;
let message = `The price is ${price}`;
console.log(message); //The price is 5.75


console.log(`The sum is ${1 + 2}`); //The sum is 3
```

## مقدمة في خاصية length

```
let name = 'Nasser';
console.log(name.length); //6

console.log('Saudi'.length); //5
```

**مثال على استخدام length**

```
let password = '_@2#bcE?';
if(password.length >= 8){
   console.log("The password is accepted") ;
}
//The password is accepted
```

## الوصول‭ ‬إلى العناصر باستخدام Bracket Notation

### كيفية الوصول إلى عنصر معين داخل النص

قمنا في السطر الثاني من المثال السابق بتعريف متغير language يحتوي على القيمة JavaScript ويتم ترقيم الحروف في النص في لغة JavaScript من اليسار إلى اليمين بحيث يبدأ تعداد أول حرف من صفر، أي أن الحرف الأول J ستكون قيمة خانته صفر ورقم خانة الحرف الثاني a هي 1 وهكذا، وعند طباعة الخانة رقم 2 للمتغير language ستكون المخرجات على النحو التالي:

```
let language = 'JavaScript';
console.log(language[2]); //v
```

### تحديث عنصر داخل النص

تستخدم Bracket notation مع النصوص للقراءة فقط، أي لايمكنك تحديث قيمة عنصر معين داخل النص باستخدام Bracket Notation ولتوضيح هذهِ الفكرة نلاحظ المثال التالي:

```
let name = 'Mishal';
name[0] = 'R';
console.log(name); // Mishal
```

في المثال السابق قمنا بتعريف متغير باسم name وقيمته Mishalوفي السطر الثاني قمنا بمحاولة لتعديل الخانة الأولى للمتغير name إلى الحرف R، وعند طباعة المتغير name ستكون النتيجة `Mishal`

نلاحظ أن قيمة الخانة رقم 0 للمتغير name لم تتغير إلىR بل بقيت كما هي على قيمتها الأساسية، أي M.
تعرفنا في هذا الدرس على كيفية الوصول إلى عنصر معين داخل النص وتنفيذ عمليات مُختلفة عليه مثل الطباعة، كما تعلمنا أن Bracket notation خاصة بالقراءة ولا تقوم بتحديث العناصر أو تغييرها.

### مقدمة في دمج النصوص String Concatenation

```
console.log ( 'Welcome to ' + 'JavaScript');
//or
let language = 'JavaScript';
console.log('Welcome to ' + language);
//Welcome to JavaScript
```

الدمج بأسلوب مُختصر

```
let title = 'Mr.';
title += 'Ali'; // title = title + 'Ali';
console.log(title); //Mr.Ali
```

## مقدمة في مفهوم Escape Character

### إضافة Tab داخل النص

```
console.log('A\tB\tC\tD\tE');
//     A    B    C    D    E
```

### إضافة New Line داخل النص

```
console.log('A\nB\nC\nD\nE'); //
A
B
C
D
E
```

### إضافة علامة التنصيص المفردة

```
console.log('It\'s such an interesting language'); //It's such an interesting language
```

### إضافة علامة التنصيص المزدوجة

```
console.log("Welcome to \"JavaScript\"");
// Welcome to "JavaScript"
```

### إضافة علامة Backslash

```
console.log('The \\ character is called backslash.');
//The \ character is called backslash.
```

## المعاملات الحسابيّة Arithmetic Operators

```
let result = 2 + 5; //7
let result = 4 - 10; //-6
let result = 2 * 2; //4
let result = 2 / 6; //0.3333333333333333
let result = 10 % 3; //1
```

## معاملات المقارنة Comparison Operators

معامل التساوي

```
let result = 6 == 3;
console.log(result); //false
```

معامل عدم التساوي

```
let result = 8 != 7;
console.log(result); //true
```

معامل أكبر من

```
let result = 3 > 2;
console.log(result); //true
```

معامل أكبر من أو يساوي

```
let result = 3 >= 3;
console.log(result); //true
```

معامل أصغر من

```
let result = 4 < 1;
console.log(result); //false
```

معامل أصغر من أو يساوي

```
let result = 7 <= 3;
console.log(result); //false
```

معامل تساوي القيمة والنوع

```
let result = 1 === 1;
console.log(result); //true
```

معامل عدم تساوي القيمة والنوع

```
let result = 1 !== "1";
console.log(result); //true
```

## نظرة على Increment و Decrement

```
let number = 5;
number = number + 1; //6
number = number - 1; //4
```

```
let number = 5;
number++; // increment
console.log(number) //6
number--; // decremen
console.log(number) //5
```

### مفهوم prefix و postfix

```
let number = 2;
let result = number++ + 4; // postfix
console.log(result); //6
console.log(number); //3
```

في المثال السابق استخدمنا أسلوب postfix لأن ++ أتت بعد number، وهذا يعني أن قيمة number ستزداد بعد تنفيذ العملية الحالية، أي سيتم أخذ القيمة الحالية للمتغير number وهي 2 ثم سيتم جمعها مع القيمة 4 ويتم تخزين النتيجة في result، وبعد الانتهاء من تنفيذ هذه العملية سيتم زيادة واحد على number أي أن postfix تعني قم بالزيادة بعد تنفيذ العملية .

أما بالنسبة لطريقة prefix، فهي عكس العملية السابقة، وهذا يعني أن قيمة المتغير ستزداد قبل تنفيذ العملية الحالية ولتوضيح الفكرة دعنا نقوم بإعادة المثال السابق ولكن بطريقة prefix وعلى النحو الموضح في الأسطر التالية:

```
let number = 2;
let result = ++number + 4; // prefix
console.log(result); //7
console.log(number); //3
```

بالنسبة لعملية الخصم -- فينطبق عليها ما ذكرناه عن ++ ، أي أنها تكون على هيئة prefix و postfix

## المعاملات المنطقية Logical Operators

### المعامل AND

```
let notRaining = true;
let notFoggy = true;
let isSunny = notRaining && notFoggy;
console.log(isSunny); //true
```

### المعامل OR

```
let isRaining = true;
let isFoggy = false;
let notSunny = isRaining || isFoggy;
console.log(notSunny); //true
```

### المعامل NOT

عملية NOT تستخدم علامة ! و التي تقوم بعكس قيمة Boolean. مما يعني أنها إن كانت القيمة true سوف تصبح false بعد استخدام معامل NOT. لفهم الفكرة نلاحظ المثال التالي:

```
let isStudent = true;
console.log(!isStudent); //false
```

### الفرق بين And و Or و Not

الفرق بين العمليات المنطقية الثلاث:

حالة And : تكون النتيجة true في حالة واحدة فقط، وهي إذا كانت القيمتين left و right تساويان true.

حالة Or : تكون النتيجة false في حالة واحدة فقط، وهي إذا كانت القيمتين left و right تساويان false.

حالة Not : يقوم بعكس قيمة right في حال كانت right تساوي true فستكون النتيجة هي false، والعكس صحيح.

يوضح المثال التالي استخدام العمليات السابقة واختلاف النتائج:

```
let first = true, second = false;
let andResult = first && second; // false
let orResult = first || seocnd;  // true
let notResult = !first // false
console.log(andResult);
console.log(orResult);
console.log(notResult);
```

## المصفوفات arrays

### طريقة تعريف Array

```
let colors = ["red", "green", "blue"];
```

طباعة قيمة Array

```
console.log(colors); //['red', 'green', 'blue']
```

طريقة تعريف Array لاتحتوي على أي قيمة:

```
myColors = [];
```

### الوصول لقيمة محددة من قيم المصفوفة

```
console.log(colors[0]); //red
```

### تحديث قيم المصفوفة

```
t colors = ['red', 'green', 'blue'];
console.log(colors[1]) //green
colors[1] = 'black';
console.log(colors[1]) //black
```

### الخاصية Array Length

```
let colors = ['red', 'green', 'blue'];
console.log(colors.length); //3
```

### استخدام Array Includes

تُستخدم includes مع المصفوفة وإرفاق قيمة ما، تقوم includes بالتحقق ما إذا كانت تلك القيمة موجودة في المصفوفة أم لا. في حال كانت القيمة موجودة في المصفوفة بالفعل، فسيتم إعادة true أما في حال كانت تلك القيمة غير موجودة في المصفوفة فسيتم إعادة false نلاحظ المثال التالي:

```
let colors = ['red', 'green', 'blue'];
console.log(colors.includes('green')); //true
console.log(colors.includes('black')); //false
```

### إضافة عنصر للمصفوفة

```
let colors = ["red", "green", "blue"];
colors.push('black');
console.log(colors); // ['red', 'green', 'blue', 'black']
```

### حذف عنصر من المصفوفة

```
let colors = ["red", "green", "blue"];
colors.pop();
console.log(colors); // ['red', 'green']
```

يعني أنه تم حذف العنصر الأخير

### إضافة عنصر باستخدام Unshift

تُستخدم unshift مع مصفوفة ما بغرض إضافة عنصر جديد في بداية تلك المصفوفة.

```
let colors = ['red', 'green', 'blue'];
colors.unshift('black');
console.log(colors); //['black', 'red', 'green', 'blue']
```

### حذف عنصر باستخدام Shift

تستخدم shift مع مصفوفة ما وذلك لحذف أول عنصر فيها وعمل return لقيمته، افترض أنك تريد حذف العنصر red من المصفوفة colors كما هو موضح في المثال التالي:

```
let colors = ['red', 'green', 'blue'];
colors.shift();
console.log(colors); //['green', 'blue']
```

### استخدام isArray

تستخدم isArray للتحقق من أن بيانات محددة هي من نوع array، وتكون قيمتها إما true أو false

```
let color = 'black';
let colors = ['red', 'green', 'blue'];
console.log(Array.isArray(color)) //false
console.log(Array.isArray(colors)) //true
```

### المصفوفة ثنائية الأبعاد | 2D Array

```
const values = [[1,2,3], true, 'javascript']
```

للوصول إلى العدد 3 نفعل هكذا

```
const values = [[1,2,3], true, 'javascript']
console.log(values[0][2]) //3
```

### تحويل نص إلى مصفوفة

```
let message = 'welcome to javascript course'
console.log(message.split(' ')) تقسيم على حسب "space"
//[ 'welcome', 'to', 'javascript', 'course' ]
```

### تحويل مصفوفة إلى string نص

```
let message = [ 'welcome', 'to', 'javascript', 'course' ]
console.log(message.join(' ')) هنا أجمعهم و أضيف مسافة بينهم
//welcome to javascript course
```

## الجمل الشرطية conditions

### طريقة استخدام if

```
let age = 12;
if (age < 12) {
console.log('Sorry, you are not old enough to play this game.');
};
```

### استخدام else

```
let age = 14;
if (age < 12){
console.log("Sorry, you are not old enough to play this game");
}
else{
console.log("Welcome to the game");
}
```

### استخدام else if

```
let number = 1;
if (number > 0) {
console.log('+');
}else if (number < 0) {
console.log('-');
}else {
console.log('Zero');
}
```

### إستعمال Switch

```
let colors = ['red', 'green', 'yellow'];
let mycolor=66;

switch(mycolor){
    case 1:
        console.log(colors[0]);
        break;
    case 2:
        console.log(colors[1]);
        break;
    case 3:
        console.log(colors[2]);
        break;
    default:
        console.log('white')
        break;
} //white
```

نستعمل break حتى يتوقف switch عن العمل في حالة تحقق الشرط

#### إضافة عملية واحدة لعدة حالات في switch

```
let colors = ['red', 'green', 'yellow'];
let mycolor=4;

switch(mycolor){
    case 1:
        console.log(colors[0]);
        break;
    case 2:
        console.log(colors[1]);
        break;
    case 3:
        console.log(colors[2]);
        break;
    case 4:
    case 5:
    case 6:
        console.log('black');
        break;
    default:
        console.log('white')
        break;
} //black
```

## التكرار Loops

### تكرار العملية باستخدام for

```
for (begin; condition; step) {
  //code...
}
```

**مثال**

```
for (let i = 5; i > 0; i--) {
    console.log(i);
}
5
4
3
2
1
```

### التكرار باستخدام while loop

```
while (condition) {
  // code
}
```

**مثال**

```
let number = 5;
while (number > 0) {
    console.log(number);
     number--;
}
5
4
3
2
1
```

### التكرار باستخدام while Do

```
let number = 5;
do{
    console.log(number);
     number--;
} while (number > 0)

5
4
3
2
1
```

### الفرق بين while و Do while

إذا لم يتحقق الشرط في while فلن يعمل الكود ولا مرة .. أما إذا إستخدمنا Do While و لم يتحقق الشرط فسيعمل الكود مرة

### نظرة على استخدام continue و break

```
for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}
1
Next
3
Next
5
Next
7
Next
9
Next
```

### إيقاف التكرار واستخدام break

```
for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        console.log("Stop");
        break;
    }
    console.log(index);
}
1
Stop
```

### التكرار عن طريق for of

```
let colors = ['red', 'white', 'green']

for(let color of colors){
    console.log(color)
}
red
white
green
```

**مثال آخر**

```
let message = 'salam'

for(let character of message){
    console.log(character)
}
s
a
l
a
m
```

## الدوال functions

**طريقة كتابة الدالة** : نكتب function ثم اسم الدالة مع إضافة () قوسين ثم نفتح الدالة ب { و ندخل الاوامر ... ثم نغلقها عند الإنتهاء }

لن يعمل اي شيئ داخل الدالة حتى تتم مناداتها في الاسفل كما يوضح المثال التالي

```javascript
function salam(){
	console.log("السلام عليكم");
	}
salam()
```

يمكن استدعاء الدالة عدة مرات

```javascript
function salam():
	print("السلام عليكم")

func_name()
func_name()
```

### مدخل الدالة parameter

يمكننا تعديل الدالة عند استدعاءها عن طريق parameter مثال function salam(parameter)

````
```javascript
function salam(name){
	console.log("salam alikom ya", name)
}
salam("ahmad")
salam("hamza")
````

يمكن إضافة عدة parameters "مدخلات"

```javascript
function greeting(name, age){
	console.log("hello", name, "your age is ", age)
}
greeting("ahmad", 22)
greeting("hamza", 25)
```

### إرجاع قيمة من الدالة Return

في الأمثلة السابقة لم نكن نرجع البيانات. ما كنا نفعله هو الطباعة عن طريق console.log, هنا return تقوم بارجع البيانات لنفعل بها ما نشاء لاحقا

في هذا المثال طبعا لن يحدث شيء قمنا بارجاع النص فقط

```javascript
function greeting(){
	return "hello from function"
}
greeting()
```

بعد هذا يمكنك طباعتها او فعل ما تريد بها

```javascript
function greeting(){
	return "hello from function"
}
console.log(greeting())
```

هنا return تنفعنا كثيرا بحيث نستعملها متى نريد في المكان الذي نريد

**إذا لم نضف return فسنحصل على undefined**

```
function logging(log){
    console.log(log)
}

console.log(logging('hello'))
//hello
//undefined
```

**يمكن أن تمرر للدالة قيمة غير متوقعة**

```
function add(num1, num2){
	return num1 + num2
}
console.log(add(5,3))
console.log(add('welcom',' to javascript')) //unexpected
```

### إمكانية استدعاء الدالة بأكثر من موضع

```
function add(num1, num2){
	result = num1 + num2
	return result
}

let value = add(8,9) - add(7,7)
console.log(value)
```

### تمرير مخرجات دالة إلى دالة أخرى

**مثال**

```
function add(num1, num2){
	return num1 + num2
}

function printNumbers(to){
    for(let i = 0; i<=to; i++){
        console.log(i)
    }
}

printNumbers(add(1,2))
```

### إنهاء الدالة عن طريق return

في هذا المثال for loop لن تعمل لأننا قمنا بإنهاء الدالة أو إغلاقها

```
function printNumbers(to){
    return;
    for(let i = 0; i<=to; i++){
        console.log(i)
    }
}

printNumbers(5)
```

### إستخدام الدالة أكثر من مرة

```
function printNumbers(to){
    if(to > 10){
        return;
    }
    for(let i = 0; i<=to; i++){
        console.log(i)
    }
    return;
}
printNumbers(11) // nothing
printNumbers(5) // prints the numbers
```

## شرح local storage

لإضافة القيم و مفاتيحها في local storage لدينا 3 طرق

```
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";
```

لإستدعاء القيم لدينا 3 طرق أيضا فقط نقوم بطلب المفتاح من local storage

```
window.localStorage.getItem("color");
window.localStorage.color;
window.localStorage["color"];
```

الآن لحذف قيمة في local storage سهل جدا

```
window.localStorage.removeItem("color");
```

و لحذف كل القيم

```
window.localStorage.clear();
```

ولمعرفة ما يوجد في المفتاح رقم 0 على سبيل المثال

```
window.localStorage.key(0)
```

## المصادر

- قناة أسامة الزيرو
- منصة سطر
