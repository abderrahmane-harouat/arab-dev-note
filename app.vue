<template>
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&display=swap');

.aref-ruqaa-ink-regular {
  font-family: "Aref Ruqaa Ink", serif;
  font-weight: 400;
  font-style: normal;
}

html {
    height: 100%;
    background: url(/background.jpg) repeat center center fixed;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-zinc-900;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-zinc-700
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-zinc-800
}
</style>
