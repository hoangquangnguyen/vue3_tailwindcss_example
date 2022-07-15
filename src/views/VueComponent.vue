<template>
  <div>
    <p>truyen data xuong component con thong qua props</p>
    <p>total click:{{ totalclick }}</p>
    <div class="flex flex-row">
      <CardComponent
        name="A1"
        :isDAT="true"
        require="a"
        @clickData="receiveClickData"
      />
      <CardComponent
        :no="2"
        name="abc"
        require="a"
        @clickData="receiveClickData"
      />
      <CardComponent
        v-bind="cardprop"
        @clickData="receiveClickData"
        ref="childComponentRef"
      />
    </div>
    <button class="bg-slate-500 p-3" @click="toggleColor">toggle color</button>
    <p>------------------------------------------------------</p>
    <p>manger component gen by v-for</p>
    <div class="flex flex-row">
      <CardComponent
        v-bind="cardprop"
        v-for="(item, index) in matrix"
        :key="index"
        :ref="setItemRef"
      />
    </div>
    <button class="bg-slate-500 p-3" @click="toggleColorVfor">
      toggle color v-for item 0
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

import CardComponent from "@/components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  setup() {
    const totalclick = ref(0);
    const cardprop = {
      no: 3,
      isDAT: true,
      name: "CDE",
      require: "b",
    };
    function receiveClickData(data: number) {
      totalclick.value += data;
    }

    //#region call function in child component
    const childComponentRef = ref();
    function toggleColor() {
      childComponentRef.value.toggle();
    }
    //#endregion

    //#region manager v-for obj
    const matrix = ref([1, 2, 3, 4, 5]);
    let itemRefs: any[] = [];
    const setItemRef = (el: any) => {
      if (el != null && itemRefs.length < matrix.value.length) {
        itemRefs.push(el);
      }
    };
    function toggleColorVfor() {
      //console.log(itemRefs);
      itemRefs[0].toggle();
    }
    //#endregion manager v-for obj

    return {
      cardprop,
      totalclick,
      receiveClickData,
      childComponentRef,
      toggleColor,
      matrix,
      toggleColorVfor,
      setItemRef,
    };
  },
};
</script>
