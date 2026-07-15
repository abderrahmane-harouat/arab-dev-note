---
title: "ما هو git و أهم استعمالاته"
domain: "أدوات"
tags: ["git"]
created: "2022-10-31"
updated: "2026-07-15"
heroImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git2.svg"
outdated: false
stage: "evergreen"
---

# بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ

## ما هو git فعلًا؟

git هو برنامج يسجّل تاريخ التعديلات التي تحدث على مجلد من الملفات. هذا المجلد يسمى **repository** (أو اختصارًا "repo"). في كل مرة تحفظ فيها snapshot من عملك (أي نسخة كاملة من حالة المشروع في لحظة معينة)، يخزّنها git على شكل **commit** — و هي نسخة مجمّدة من كل ملفاتك في تلك اللحظة، مرفقة برسالة توضيحية مثل "إصلاح مشكلة تسجيل الدخول".

لماذا وُجد git أصلًا؟ حتى تستطيع الرجوع إلى أي نسخة سابقة من مشروعك، و حتى يتمكن عدة أشخاص من العمل على نفس المشروع دون أن يمسح أحدهم عمل الآخر.

مثال بسيط — تحويل مجلد عادي إلى repo :

```bash
mkdir myproject
cd myproject
git init          # أصبح هذا المجلد الآن git repository
echo "hello" > file.txt
git add file.txt  # نطلب من git تتبّع هذا الملف
git commit -m "first commit"   # حفظ snapshot من العمل
```


## الحالة git status

- للإطلاع على حالة المشروع : يعني ما هي الملفات التي تم تعديلها و ما الى ذلك

```bash
git status
```

## عملية stage و unstage

- لإضافة الملفات إلى staging area

```bash
git add index.html
# or
git add .
git add *
```

- لحذف الملفات من staging area

```bash
git reset index.html
# or
git reset  # all files
```

النقطة `.` تضيف كل شيء بما في ذلك الملفات المخفية (dotfiles) و الملفات المحذوفة. أما النجمة `*` فهي shell glob لا تشمل الملفات المخفية و قد تعطي خطأ مع الملفات المحذوفة

## التعامل مع remote repo

- لمعرفة remote repo

```bash
git remote -v
```

- لتحميل الملفات من remote repo ل local repo

```bash
git pull origin
```

## عرض و حذف commits

```bash
# Show Log File (commits)
git log

# Reset Head
git reset --hard "Commit Hash Here"

# Push Edits From Local To Remote With Force Flag
git push origin main --force
```

## الفرع branch


### شرح الـ Branch

الـ **Branch** (الفرع) هو نسخة مستقلة من مشروعك. تخيل أن مشروعك الرئيسي هو "main"، وكل فرع يخرج منه هو طريق منفصل تعمل فيه على ميزات (Features) جديدة أو إصلاحات (Fixes) من دون أن تأثر على الكود الأساسي.

### ليش نستخدم الـ Branch؟

- **عزل العمل (Isolation):** العمل على ميزة جديدة بدون تعطيل باقي عمل الفريق.
- **التجربة (Experimentation):** تجربة أفكار جديدة، وإذا لم تعجبك، ببساطة تحذف الفرع.
- **التعاون (Collaboration):** كل شخص في الفريق يعمل على فرع خاص به على سبيل المثال، و بعدها ندمج (Merge) الفروع مع بعضها البعض.
  
### عرض الفرع Show Branches

```bash
git branch
```

### التغيير إلى فرع آخر Switch To Branch

```bash
git checkout "Other branch" # الإنتقال إلى فرع موجود بالفعل

git checkout -b "Branch Name" # الإنتقال إلى فرع لم يتم إنشاءه بعد
```

### حذف الفرع Delete Branch

```bash
git branch -d "Branch Name"
```


هنا `git branch -d` يرفض حذف branch اذا كان يحتوي على commits لم يتم دمجها (merge) في الفرع الحالي , و يمكن حذفه بالقوة عن طريق `-D` مع العلم أن هذه الـ commits ستضيع

### تغيير اسم الفرع Move / Rename Branch

```bash
git branch -m "New Branch Name"
```


### دمج الفرع مع الفرع الحالي Merge Branch With Current Branch

```bash
git merge "Branch Name You Need To Merge"
```

## الدُرج stash

الـ **Stash** هو مكان مؤقت تضع فيه تغييراتك التي لم تقم بعمل **Commit** (حفظ رسمي) لها، حتى نتظم مشروعك و تفعل شيئا آخر، ثم تعود إليها لاحقاً كأنك "خبأتها في درج".

### لماذا نستعمل الـ Stash أصلا؟

- **تغيير الفرع فجأة:** إذا كنت تعمل على فرع، و تريد الإنتقال إلى فرع آخر، و لا تستطيع القيام بـ Commit لأن عملك ناقص.
- **سحب تحديثات (Pull):** إذا كان هناك تحديثات من الفريق و تريد سحبها، لكن التغييرات تتعارض مع ما قمت بتغييره.

**ملاحظة** : لا يمكن استعمال stash الا بعد commit واحد على الأقل. الملفات المتتبَّعة (tracked) التي عدّلتها تُخبَّأ مباشرة دون الحاجة إلى staging، أما الملفات الجديدة غير المتتبَّعة (untracked) فتحتاج إلى `git add` أولا أو استعمال `git stash -u`

### أمثلة على الأوامر (Commands):

```bash
# Create Text File With "Hello World" String Inside It
echo "Hello World" > about_readme.txt

# Add File To Staging Area
git add about_readme.txt

# Save Work To Stash
git stash

# Save Work To Stash With Description
git stash push -m "Description Here"

# List Items in Stash
git stash list

# Get Work From Last Stash
git stash pop

# Get Specific Stash Using ID
git stash pop stash@{2}

# Delete Stash Using ID
git stash drop stash@{1}

# Show Lastest Added Stash Content
git stash show

# Empty The Stash
git stash clear
```

### مثال عملي:

1. كنت تعمل على فرع `feature-A` وعدّلت في 3 ملفات.
2. فجأة طلب منك مديرك الإنتقال إلى فرع `hotfix-B` لإصلاح مشكلة عاجلة.
3. لا تستطيع عمل Commit لأن الشغل ناقص، و قد يمنعك Git من الإنتقال إذا كانت تغييراتك ستُستبدل (overwritten) بملفات الفرع الآخر.
4. **الحل:** تكتب `git stash`، هكذا Git وضع تغييراتك في الدرج  `stash`  ونظف ملفاتك.
5. تنتقل لـ `hotfix-B`، تصلح الأخطاء، وتعمل Commit.
6. ترجع لـ `feature-A` وتكتب `git stash pop`، هكذا Git يرجع تغييراتك من الدرج ويضعها في ملفاتك مرة ثانية.
  
## 🔄 الفرق الجوهري بين الـ Branch و Stash:

|المفهوم|الغرض|الحالة|
|---|---|---|
|**Branch**|خط تطوير طويل الأمد للمشروع|يحفظ تاريخ كامل من الـ Commits|
|**Stash**|حفظ مؤقت للتغييرات غير المكتملة|مؤقت جداً، فقط للتغييرات التي لم تُحفظ (Uncommitted)|

**باختصار:**

- **Branch** = طريق جديد تشتغل فيه. 🛣️
- **Stash** = درج مؤقت تحط فيه شغلك لما تحتاج تنظف المكتب بسرعة. 🗄️


## استعمال clean و restore

```bash
# Restore Staged Files / Unstage
git restore --staged "File Name Here"

# Show Files That Will Be removed
git clean -n

# Remove Untracked Files (Files Git Doesn't Track)
git clean -f

# Add -d To Also Remove Untracked Directories
git clean -fd
```

## التعامل مع tags

```bash
# Show All Tags
git tag

# Add New Lightweight Tag
git tag "Version Name Or Tag Name Here ex: v1.0"

# Add New Annotated Tag
git tag -a "Version Name Or Tag Name Here" -m "Description Or Message"

# Push Tag To Remote
git push origin "Tag Name Here ex: v1.0"

# List All Tags Starting With v1.
git tag -l "v1.*"

# Delete Tag
git tag -d "Version Name Or Tag Name Here ex: v1.0"

# Delete Tag From Remote
git push origin --delete "Version Name Or Tag Name Here"
```

لإنشاء release نذهب الى موقع github و نقوم بكل شيئ هناك

## التعديلات config

- عرض التعديلات

```bash
git config -l
# or
git config --list
```

- عرض الايميل و اسم المستخدم

```bash
git config --global user.name
git config --global user.email
```

- اعطاءهم قيمة

```bash
git config --global user.name "abdurahman-ghazi"
git config --global user.email "abdurahman-ghazi@email.com"
```

- حذف القيمة منهم

```bash
git config --global user.name ""
# or
git config --global --unset user.name
```

- لإجراء تعديلات على git ندخل على home/usename/.gitconfig و نعدل عليه و نظيف اليه alias على سبييل المثال

## انشاء موقع على github page

ننشئ مستودع و نسميه هكذا باستعمال username

```bash
abdurahman-ghazi.github.io
```

## لدفع البرنامج الى github

```bash
git add .
git commit -m "اضافة localStorage"
git push -u origin main
```

ثم ندخل الاسم و التوكن الذي يعتبر password

```bash
username: abdurahman-ghazi
password: xyz
```

## دفع ملف dist فقط

أولا تثبيب gh-pages

```bash
yarn add gh-pages -D
```

ثم نظيف deploy الى scripts

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

و أخيرا

```bash
yarn deploy
```

## إنشاء ssh key

نحتاج هذه الطريقة لتفادي كتابة username و password(token) في كل مرة

```bash
ssh-keygen -t rsa -b 4096 -C "abdurahman-ghazi@email.com"
```

ثم نظغط enter و نكتب كلمة السر و نكررها , طبعا عليك حفظ كلمة السر لأنك ستستعملها في كل مرة

نقوم بطباعة key هكذا

```bash
cat /home/ghazi/.ssh/id_rsa.pub
```

نقوم بنسخه و نذهب إلى github.com نسجل الدخول ثم نذهب الى settings => ssh and gpg keys و نضغط new ssh key

اخيرا نقوم بلصق key في الخانة key

في title اكتب اي شيئ و نضغظ add ssh key

الآن لتجربة الاتصال

```bash
ssh -T git@github.com
```

**ملاحظة هامة** : لن يعمل ssh الا اذا كان origin نوعه ssh و ليس https

مثال :

```bash
git@github.com:abdurahman-ghazi/markdown-arabic-vue.git
```

و ليس

```bash
https://github.com/abdurahman-ghazi/markdown-arabic-vue.git
```

طبعا لمعرفة origin

```bash
git remote show origin
```

لحذف origin

```bash
git remote remove origin
```

لإضافة origin

```bash
git remote add origin git@github.com:abdurahman-ghazi/markdown-arabic-vue.git
```
