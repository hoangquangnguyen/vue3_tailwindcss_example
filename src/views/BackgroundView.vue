<template>
  <div class="grid grid-cols-3 items-start gap-y-8 p-8">
    <div>
      <h1>mono color: green</h1>
      <div class="h-60 w-60 bg-green-600"></div>
    </div>
    <div>
      <h1>gradient color: green to blue</h1>
      <div class="h-60 w-60 bg-gradient-to-r from-green-600 to-blue-600"></div>
    </div>
    <div>
      <h1>tip 1: image in assets direct in class</h1>
      <div
        class="h-60 w-60 bg-[url('/src/assets/backgroundimage.jpg')] bg-cover bg-no-repeat"
      ></div>
    </div>
    <div>
      <h1>tip 2: image use tailwind.config.js</h1>
      <div class="h-60 w-60 bg-hell bg-cover bg-no-repeat"></div>
    </div>
    <div>
      <h1>tip 3: image use custom class in tailwind.css</h1>
      <div class="bgBackground h-60 w-60"></div>
    </div>
    <div>
      <h1>tip 4: 2 bg image and blur bg gradient above</h1>
      <!-- use reltive absolute de div gb thuw 2 ko chiem cho cac obj ben trong -->
      <div class="bgBackground relative h-60 w-60">
        <div
          class="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-r from-green-600 to-blue-600 opacity-90 blur-[100px]"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
