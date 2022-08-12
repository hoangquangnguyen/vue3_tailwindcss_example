<template>
  <div class="mb-8 grid grid-cols-5 gap-5">
    <router-link to="/">Home</router-link>
    <router-link to="/background">Background example</router-link>
    <router-link to="/vuexview">Vuex example</router-link>
    <router-link to="/vuecomponent">Vue component example</router-link>
    <router-link to="/buttonview">Buttonview</router-link>
  </div>

  <router-view />
</template>

<style>
#app {
  font-family: "Inconsolata", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700&display=swap");
</style>
