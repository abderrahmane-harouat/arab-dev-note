---
title: "إستعمال بايثون"
updated: "20 ذو القعدة 1445 ﻬ"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_python.svg"
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

```python
name = 'Ahmed' # String
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

```

نستطيع الوصول إلى عناصر القوائم و تعديلها عن طريق index

```python
names = ['dana', 'mariam', 'moatassime', 'abdallah']
# change first name
names[0] = 'ahmad'
print(names)
#['ahmad', 'mariam', 'moatassime', 'abdallah']
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
def func_name(name, age):
	print("hello", name, "your age is ", age)

func_name("ahmad", 22)
func_name("hamza", 25)
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

هنا return تنفعنا كثيرا بحيث نستعملها متى نريد في المكان الذي نريد

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
```
