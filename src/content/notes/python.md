---
title: "إستعمال بايثون"
domain: "أساسيات"
tags: ["python"]
created: "2023-04-29"
updated: "2024-05-28"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg"
outdated: false
stage: "budding"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## مقدمة عن لغة بايثون

**أول إصدار** : 1991

**فيما تستخدم لغة بايثون ؟**

- تستخدم في تطوير تطبيقات الويب
- علم البيانات
- الذكاء الصناعي
- أتمتت المهام
- انشاء برامج الفحص و الاختراق

**بما تتميز ؟**

- سهولة كتابتها كأنك تكتب لغة إنجليزية
- مشهورة في مجال تطبيقات الويب
- مشهورة أيضا في مجال علم البيانات

**أشهر frameworks**

مجال تطوير الويب

- دجانغو django
- فلاسك flask

مجال علم البيانات

- تانسرفلو tensorflow
- سايكيت scikit-learn

## تثبيت البيئة على archlinux

```sh
sudo pacman -Syu
```

من المهم تحديث كامل النظام حتى لا تحدث مشاكل مع برامج أخرى

```sh
sudo pacman -S python
```

ثم نحمل pycharm بسهولة و مجانا

```sh
sudo pacman -S pycharm-community-edition
```

## إنشاء أول برنامج

طباعة نص او رقم في بايثون

```python
print('السلام عليكم')
print(38)
```

التعليق في بايثون

```python
# هذا تعليق
# this is a comment
```

## المتغيرات

نستطيع إعطاء المتغير أي اسم نريد ما عدا الكلمات المحجوزة في بايثون مثل print على سبيل المثال

```python
name = 'ghazi'
age = 22
# or
name, age = 'ghazi', 22
```

## المدخلات و المخرجات input output

```python
# name = input()
name = input('Enter your name: ')
print('hello', name)
# hello ghazi
```

هنا الدالة input تمثل المدخلات (يعني يمكن للمستخدم إدخال البيانات) و الدالة print تمثل المخرجات (يعني ما يطبع)

## العمليات الحسابية

```python
result = 2 + 5 # الجمع
result = 4 - 10 # الطرح
result = 2 * 2 # الضرب
result = 2 / 2 # القسمة
result = 10 % 3 # باقي القسمة
```

صيغة مختصرة

```python
result = 10
result = result - 5
result -= 5
```

## المقارنة comparison

نقارن عن طريق `==` ما إذا كان يساوي

```python
result = 6 == 3
print(result)
# False
```

نقارن عن طريق `=!` ما إذا كان لا يساوي

```python
result = 8 != 7
print(result)
# True
```

نقارن عن طريق `<` ما إذا كان أكبر من

```python
result = 3 > 2
print(result)
# True
```

نقارن عن طريق `=<` ما إذا كان أكبر من او يساوي

```python
result = 3 >= 3
print(result)
# True
```

نقارن عن طريق `>` ما إذا كان أصغر من

```python
result = 1 < 4
print(result)
# True
```

نقارن عن طريق `=>` ما إذا كان أصغر من أو يساوي

```python
result = 7 <= 3
print(result)
# False
```

## المعاملات المنطقية logical operators

المعامل AND : هنا يجب ان يكون كلا الشرطين صحيح

```python
not_raining = True
not_foggy = True
is_sunny = not_raining and not_foggy
print(is_sunny)
# True
```

المعامل OR : هنا يجب ان يكون شرط واحد صحيح

```python
is_raining = True
is_foggy = False
not_sunny = is_raining or is_foggy
print(not_sunny)
# True
```

المعامل NOT

```python
is_student = True
print(not is_student)
# False
```

## أنواع‭ ‬البيانات Data Types

### النوع String

```python
name = 'Ahmed' # String
```

للوصول إلى الحروف في String نستعمل indexing

```python
alphabet = 'abcdefghijklmnopqrstuvwxyz'
# get first letter
print(alphabet[0]) # a

# get last letter
print(alphabet[-1]) # z

# get before last letter
print(alphabet[-2]) # y
```

للحصول على index حرف او كلمة على سبيل المثال

```python
alphabet = 'abcdefghijklmnopqrstuvwxyz'
# get index of letter "k"
# note here index is case sensitive
print(alphabet.index("k")) # 10

# same example using find
print(alphabet.find("kl")) # 10

# specify range of search
alphabet = 'abcdefghijklmnopqrstuvwxyz kl xxxxxxxx'
print(alphabet.find("kl", 20,50)) # 27

#find index of last match using rfind
title = 'my username is ghazi okey? its ghazi'
print(title.rfind('ghazi')) # 31
# if the ghazi does not exist the result will be -1
```

للحصول على عدد الأحرف

```python
alphabet = 'abcdefghijklmnopqrstuvwxyz'
print(len(alphabet)) # 26
```

للحصول على عدد حرف أو كلمة تكررت

```python
title = 'this is Python note'
# note: count is case sensitive
print(title.count('s')) # 2
```

للحصول على عدة حروف في string نستعمل slicing

```python
# get "Python" word
title = 'this is Python note'
# [from:to]  from first letter to after last letter
print(title[8:14]) # Python
# same example using slice function
s = slice(8, 14)
print(title[s]) # Python

# get all words after Python
print(title[8:]) # Python note

# get all word before Python
print(title[:14]) # this is Python

# get everything
print(title[:])

# get "note" word using negative value
print(title[-4:])

# using steps [from:to:step]
print(title[8:14:2]) # pto

# get "Python" inverse
print(title[13:7:-1]) # nohtyP
```

تحويل String إلى List

```python
# default : split by space
text = 'A, B, C'
print(text.split()) # ['A,', 'B,', 'C']

# split by comma
text = 'A,B,C'
print(text.split(',')) # ['A', 'B', 'C']

# split once
text = 'A,B,C'
print(text.split(',' , 1)) # ['A', 'B,C']
```

التحقق ما إذا كان string يحتوي على أرقام و أحرف فقط

```python
value = 'A7854b'
print(value.isalnum()) # True

value = 'A78 54b'
print(value.isalnum()) # False
```

قائمة دوال التحقق من النص

![ قائمة دوال التحقق من النص](/images/python_is.png "قائمة دوال التحقق من النص")

مفهوم raw string : لكتابة string دون الحاجة إلى backslash escape

```python
# print a path without escape
path = r'C:\xMyFolder\xMySubFolder\xMyFile.txt'
print(path)
# note: if you write R instead of r its fine
# note: if you type r'\' you will get an error
```

الدالة format

```python
first_name = 'mohamed'
last_name = 'fahd'
age = 19
print('my name is {} {} and my age is {}'.format(first_name, last_name, age))

# format with index
first_name = 'mohamed'
last_name = 'fahd'
age = 19
print('my name is {2} {1} and my age is {0}'.format(age, last_name, first_name))
					      #index0  #index1    #index2

# using varible
first_name = 'mohamed'
last_name = 'fahd'
age = 19
print('my name is {f_name} {l_name} and my age is {age}'.format(age=age, l_name=last_name, f_name=first_name))
```

### باقي البيانات

```python
age = 20 # Integer
weight = 52.5 # Float
is_student, is_employee = True, False # Boolean
home_address = None # None
complex = 10j # complex
```

يشير النوع None إلى أن المتغير يعتبر فارغ أو يحتوي على قيمة غير معروفة

**استخدام type لمعرفة نوع البيانات**

```python
name = 'Khalid'
age = 18
is_student = True
print(type(name))
print(type(age))
print(type(is_student))
```

## التعامل مع مجموعة من البيانات Sequence

### القوائم Lists

نستطيع أن نظيف في list عدة أنواع بيانات و نغيرها لاحقا

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah', 1 , 50.5, True]
```

نستطيع الوصول إلى عناصر القوائم و عرضها عن طريق index

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
# 	index0    index1     index2        index3

# print moatassime
print(names[2])
# same example using slice function
s = slice(2)
print(names[2])

# print last
print(names[-1])

# print last two names
print(names[-2:])

# print first two names invertly
print(names[1::-1])
```

للحصول على عدد العناصر في القائمة

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah', 1 , 50.5, True]
print(len(names)) # 7
```

للحصول على عدد المرات التي تكرر فيها عنصر ما

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah', 1 , 50.5, True, 'dana', 'dana']
print(names.count('dana')) # 3
```

نستطيع الوصول إلى عناصر القوائم و تعديلها عن طريق index

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
# change first name
names[0] = 'ahmad'
print(names)
#['ahmad', 'mariam', 'moatassime', 'abdallah']
```

للوصول إلى index العناصر

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah', 'khalil', 'abdallah'] # name of abdallah is written twice
# note: it gets the first item
print(names.index("abdallah")) # 3
```

اضافة عنصر جديد في اخر القائمة

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
names.append('housam')
print(names)
# ['dana', 'mariam', 'moatassime', 'abdallah', 'housam']
```

اضافة عنصر في المكان الذي نريده في القائمة

```python
# insert(index, value)
names = ['dana', 'mariam', 'moatassime', 'abdallah']
names.insert(0, 'housam')
print(names)
# ['housam', 'dana', 'mariam', 'moatassime', 'abdallah']
```

حذف عنصر من القائمة

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
names.remove('dana')
print(names)
# ['mariam', 'moatassime', 'abdallah']
```

حذف جميع العناصر من القائمة

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
names.clear()
print(names)
# []
```

تحويل list إلى String

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
print(''.join(names)) #danamariammoatassimeabdallah
# separate by space
print(' '.join(names)) # dana mariam moatassime abdallah
```

ترتيب list ترتيبا تصاعديا

```python
numbers = [5,8,7,1]
names = ['khadijah', 'Asma', 'sofian']
numbers.sort()
names.sort()
print(numbers)
print(names)
```

ترتيب list ترتيبا تنازليا

```python
numbers = [5,8,7,1]
names = ['khadijah', 'Asma', 'sofian']
numbers.sort(reverse=True)
names.sort(reverse=True)
print(numbers)
print(names)
```

### مفهوم tuples

نوع tuple عناصره غير قابلة للتعديل

```python
child_one = ('abdurahman', 'ghazi', 'male', '22')
# or
child_one = 'abdurahman', 'ghazi', 'male', '22'
```

للوصول الى العناصر نفعل مثل ما فعلنا في list

```python
child_one = ('abdurahman', 'ghazi', 'male', '22')
print(child_one[0])
```

لنجرب تغيير عنصر في tuple

```python
child_one = ('abdurahman', 'ghazi', 'male', '22')
child_one[0] = 'ahmad'

# Traceback (most recent call last):
#	File "<string>", line 2, in <module>
# TypeError: 'tuple' object does not support item assignment
```

ظهر error

### القاموس Dictionary

في بعض الأحيان تكون لدينا بيانات كثيرة يصعب التحكم بها لذلك نستخدم Dictionary , بحيث يكون لدينا مفتاح لكل قيمة , اي اننا اذا أردنا الوصول الى القيمة نستعمل المفتاح بكل بساطة

لنعد كتابة tuple عن طريق Dictionary

```python
# child_one = ('abdurahman', 'tlemcen', '22')
child_one = {'name': 'abdurahman', 'city': 'tlemcen', 'age': 22}
```

عكس list و tuple لنحصل على القيمة لا نستعمل index و انما نستعمل key "المفتاح"

```
child_one = {'name': 'abdurahman', 'city': 'tlemcen', 'age': 22}
print(child_one['name'])
```

لطباعة جميع القيم

```
child_one = {'name': 'abdurahman', 'city': 'tlemcen', 'age': 22}
print(child_one.values())
```

الآن للحصول على جميع المفاتيح

```python
child_one = {'name': 'abdurahman', 'city': 'tlemcen', 'age': 22}
print(child_one.keys())
```

### القوائم ثنائية الأبعاد | 2D Lists

```python
value = [
	[1,2,3],
	['python','javascript', 'php'],
	True
	 ]
# print 3
print(value[0][2])
```

### مفهوم List Comprehension

إنشاء list من خلال list و التعديل عليها بسهولة

```python
# for loop example
numbers = [1, 2, 4, 6, 8]
multiplyed_numbers = [num*2 for num in numbers]
print(multiplyed_numbers) # [2, 4, 8, 12, 16]

# for loop + if example
# multiply only numbers which are greater than 4
numbers = [1, 2, 4, 6, 8]
multiplyed_numbers = [num*2 for num in numbers if num>4]
print(multiplyed_numbers) # [12, 16]

# for loop + multiple conditions example
# multiply only numbers which are greater than 4 and divisible by 5
numbers = [1, 2, 4, 5, 6, 8]
multiplyed_numbers = [num*2 for num in numbers if num>4 and num % 5 == 0]
print(multiplyed_numbers) # [10]
```

## الشروط conditions

### مقدمة في If Statement

تنفيذ امر الا اذا تحقق الشرط

```python
age = 22
if age >= 18:
	print('you are an adult')
```

### نظرة على مفهوم Else

اذا لم يتحقق الشرط يمكننا فعل شيئ آخر عن طريق else

```python
age = 16
if age >= 18:
	print('you are an adult')
else:
	print('you are NOT an adult')
# you are NOT an adult
```

### نظرة على Elif

عن طريق elif يمكننا إضاقة عدة شروط

```python
path = "IOS"
if path == "Web Dev":
	print('Javascript')
elif path == "IOS":
	print('Swift')
elif path == "Android":
	print("kotlin")
else:
	print('something else')
```

## التكرار loop

### إستخدام while

طباعة الارقام من واحد إلى ستة

```python
i = 1

while i<=6:
	print(i)
	i+=1
```

### إستخدام for

طباعة كل الاسماء

```python
students = ['omar', 'ali', 'othman', 'abubakr']

for student in students:
	print(student)
```

### إستخدام for مع range

طباعة الأرقام من 0 إلى 9 بسهولة

```python
for n in range(10):
	print(n)
```

طباعة الارقام من 5 إلى 9

```python
for n in range(5,10):
	print(n)
```

## الدوال functions

**طريقة كتابة الدالة** : نكتب def ثم اسم الدالة مع إضافة () قوسين ثم : نقطتين و ندخل الاوامر

لن يعمل اي شيئ داخل الدالة حتى تتم مناداتها في الاسفل كما يوضح المثال التالي

```python
def func_name():
	print("السلام عليكم")

func_name()
```

يمكن استدعاء الدالة عدة مرات

```python
def func_name():
	print("السلام عليكم")

func_name()
func_name()
```

### مدخل الدالة parameter

يمكننا تعديل الدالة عند استدعاءها عن طريق parameter مثال def func_name(parameter)

````
```python
def func_name(name):
	print("hello", name)

func_name("ahmad")
func_name("hamza")
````

يمكن إضافة عدة parameters "مدخلات"

```python
def func_name(name, age): # هذه الدالة في مرحلة الإنشاء و ما بداخلها يسمى parameter
	print("hello", name, "your age is ", age)

func_name("ahmad", 22) # ما بداخل هذه الدالة يسمى argument
func_name("hamza", 25) # position of argument is important or the meaning will be messed up
```

**ملاحظة**: يجب ان يكون عدد arguments يساوي عدد parameters

مفهوم Keyword Arguments :

```python
def func_name(name, age):
	print("hello", name, "your age is", age)
# this is keyword arguments
func_name(age=22, name="ahmad") # we can change arguments position if we add keywords
```

**ملاحظة**: يجب ان يكون اسم keyword argument مطابق لإسم parameters و إدا استعمالنا keyword في argument الاول حين إذن يحب اعطاء keyword لباقي ال arguments

مفهوم Default Parameter

```python
def func_name(name="ahmad", age=18):
	print("hello", name, "your age is", age)
# this is keyword arguments
func_name() # we can call the function without arguments if we give it parameters first
func_name('fahd') # if we give the function argument it will override the default
```

مفهوم argument packing : كتابة عدد لا متناهي من arguments : و نفعل ذلك عن طريق إظافة \*

```python
def avg(*args): # we can name the parameter what ever we want
	total = sum(args)
	leng = len(args)

	average = total / leng

	print(average)
avg(2, 6, 4)
```

مفهوم argument unpacking => إستقبال tuple ك arguments : عن طريق \*

```python
def info(name1, name2, name3):
	print('first name is: ', name1)
	print('first name is: ', name2)
	print('first name is: ', name3)
names = 'abdullah', 'sarah', 'mahmoud'
info(*names)
```

استخدام Packing و Unpacking ف نفس الوقت

```python
def my_items(*items):
	print(items)

items = ['a', 'b', 'v']
my_items(*items) # result is a tuple
```

مفهوم Dictionary Packing : في هذا المفهوم نستطيع تحويل arguments إلى dictionary عن طريق \*\*

```python
def info(**kwargs): # kwargs is just common in the community
	print(kwargs)
info(name='ali', age=18) # {'name': 'ali', 'age': 18}
```

مفهوم Dictionary Unpacking : يمكننا استعمال dictionary ك argument عن طريق \*\*

```python
def info(name, age):
	print('My name is', name, 'and my age is', age, 'years old')
d = {'name': 'ali', 'age': 18}
info(**d) # My name is ali and my age is 18 years old
```

### إرجاع قيمة من الدالة Return

في الأمثلة السابقة لم نكن نرجع البيانات. ما كنا نفعله هو الطباعة عن طريق print, هنا return تقوم بارجع البيانات لنفعل بها ما نشاء لاحقا

في هذا المثال طبعا لن يحدث شيء قمنا بارجاع النص فقط

```python
def function_name():
	return "hello from function"

function_name()
```

بعد هذا يمكنك طباعتها او فعل ما تريد بها

```python
def function_name():
	return "hello from function"

print(function_name())
```

**ملاحظة** :هنا return تنفعنا كثيرا بحيث نستعملها متى نريد في المكان الذي نريد

إستعمال if else مع return

```python
def isEvenOrOdd(num):
	return 'even' if num % 2 == 0 else 'odd'
print(isEvenOrOdd(5))
```

### الدوال الجاهزة built-in functions

```python
# int to float
float(25) # 25.0

# float to int
int(46.5) # 46

# float to string
str(46.5) # 46.5

# int to string
str(46) # 46

# absolute value
print(abs(-988))

# round
print(round(3.687)) # 4

# round two numbers after .
print(round(3.687, 2)) # 3.69

# power الاس
print(pow(3, 2)) # 9

# max أكبر عدد
numbers = 55,596,66,56,5,880
print(max(numbers)) # 880

# min أصغر عدد
numbers = 55,596,66,56,5,880
print(min(numbers)) # 5

# sum مجموع الأعداد
numbers = 55,596,66,56,5,880
print(sum(numbers)) # 1658

# square root الجذر التربيعي
import math
print(math.sqrt(144)) # 12.0

# remainder باقي القسمة
import math
print(math.remainder(10,3))

# generate a random number between 1-100
import random
print(random.randint(1,100))

# replace
value = '1\n2\n3\n4\n5'
print(value.replace('\n', '-')) # 1-2-3-4-5

# replace only firs two
value = '1,5,5,4,8'
print(value.replace(',', '!', 2)) # 1!5!5,4,8

# remove spaces and new line before and after text
name = '        mahmoud ahmad         '
print(name.strip())

# remove spaces and new line before text
name = '        mahmoud ahmad         '
print(name.lstrip())

# remove spaces and new line after text
name = '        mahmoud ahmad         '
print(name.rstrip())

# lowercase
name = 'This is python'
print(name.lower())

# uppercase
name = 'This is python'
print(name.upper())

# swapcase
name = 'This is python'
print(name.swapcase())

# make every first letter upercase using title
name = 'This is python'
print(name.title())

# filter function : accepts 2 parameters and the first one is the function , the second is the list
ages = [30, 5, 15, 18, 2, 50, 54, 22, 13, 8]
def my_func(age):
	return age >=18
print(list(filter(my_func, ages))) # items that return True are the ones that will be shown

# map function : accepts 2 parameters and the first one is the function , the second is the list
numbers = [30, 5, 15, 20, 50, 55, 40, 3]
def square(num):
	return num ** 2
print(list(map(square, numbers))) # the function will do the job for every single item in the list

# reverse function: last will become first and so on
names = ['khadijah', 'Asma', 'sofian']
names.reverse()
print(names)
```

## التاريخ و الوقت date and time

إنشاء تاريخ

```python
import datetime
date = datetime.date(2022,11,13)
print(date) # 2022-11-13
```

طباعة السنة , اليوم , الشهر

```python
import datetime
date = datetime.date(2022,11,13)
print(date.year) #2022
print(date.day) #13
print(date.month) #11
```

إنشاء وقت

```python
import datetime
time = datetime.time(14,10,30)
print(time) # 14:10:30
```

طباعة الساعة, الدقيقة , الثانية

```python
import datetime
time = datetime.time(14,10,30)
print(time.hour) # 14
print(time.second) # 30
print(time.minute) # 10
```

الوقت الحالي , اليوم الحالي , الساعة الحالية , الدقيقة الحالية , الثانية الحالية

```python
import datetime
now = datetime.datetime.today()
print(now) # 2022-11-13 16:47:31.206012
print(now.day)
print(now.hour)
print(now.minute)
print(now.second)
```

تحويل التاريخ إلى نص

![ رموز تنسيق الوقت و التاريخ](/images/python_strftime.png "رموز تنسيق الوقت و التاريخ")

```
import datetime
date = datetime.date(2022,11,13)
print(date.strftime('%A %B %Y')) # Sunday November 2022
time = datetime.time(14,10,30)
print(time.strftime('%I %M %S')) # 02 10 30
```

## المعامل in

البحث ما إذا كان string يحتوي على حرف او كلمة معيتة

```python
alphabet = 'abcdefghijklmnopqrstuvwxyz'
print('abcd' in alphabet) # True
print('dddd' not in alphabet) # True
```

الأمر ينطبق على list و tuples

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah', 1 , 50.5, True, 'dana', 'dana']
print(50.5 in names)
print(50.5 not in names)
```

## الدمج و التكرار repeat and concatenate

الدمج

```python
first = 'sara'
last = 'faisal'
print(first + ' ' + last) # sara faisal
```

التكرار

```python
first = 'sara '
print(first*3) # sara sara sara
```

نفس الشيئ مع list و tuple

الدمج

```python
my_list = [1, 6, 8]
second_list = [5, 5, 5]
print(my_list + second_list) # [1, 6, 8, 5, 5, 5]
```

التكرار

```python
my_list = [1, 6, 8]
print(my_list*3) # [1, 6, 8, 1, 6, 8, 1, 6, 8]
```
