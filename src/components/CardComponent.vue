<template>
  <div class="w-fit border border-orange-700 p-2">
    <p :class="{ 'bg-green-500': isToggle }">No.{{ No }}</p>
    <p>IsDAT:{{ isDAT }}</p>
    <p>Name:{{ name }}</p>
    <p>Require:{{ require }}</p>
    <button class="bg-slate-400 p-2" @click="clickCard">click</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  //props de nhan du lieu tu component cha
  props: {
    no: {
      type: Number,
      default: 1,
    },
    isDAT: { type: Boolean, default: false },
    name: String,
    require: { type: String, required: true },
  },
  setup(props: any, context: any) {
    const No = ref(props.no);
    const isToggle = ref(false);
    function clickCard() {
      No.value++;
      //truyen du lieu len component cha
      context.emit("clickData", 3);
    }
    function toggle() {
      isToggle.value = !isToggle.value;
    }
    return {
      clickCard,
      No,
      toggle,
      isToggle,
    };
  },
};
</script>
