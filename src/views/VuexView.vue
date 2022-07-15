<template>
  <div>
    <p>vuex dung de quan ly cac state</p>
    <p>cac thanh phan trong vuex</p>
    <p>
      state:chưa các biến trạng thái, để theo dõi sử dụng chung giữa các view,
      component
    </p>
    <p>getters:</p>
    <p>
      mutations và actions chứa các phương thức để xử lý dữ liệu, nên gọi
      mutation thông qua action
    </p>
    <p>mutations: chỉ có thể xử lý đồng bộ(not async)</p>
    <p>actions: có thể xử lý bất đống bộ (async)</p>
    <p>
      modules:khi store chứa quá nhiều state ta có thể chia nhỏ thành các
      modules để dễ quản lý
    </p>
    <p>nen cai them extension devtool tren trinh duyet</p>
    <p>---------------------------------------------------------</p>
    <p>vuex store classic use</p>
    <p>Count:{{ Count }}</p>
    <button @click="clickPlus" class="bg-slate-500">Plus</button>
    <div>
      <input
        type="number"
        placeholder="enter N"
        v-model="ninput"
        class="border border-violet-900"
      />
      <button @click="clickPlusN" class="bg-slate-500">PlusN</button>
    </div>
    <p>---------------------------------------------------------</p>
    <p>---------------------------------------------------------</p>
    <p>vuex store modules classic use</p>
    <p>Count:{{ CountM }}</p>
    <button @click="clickMPlus" class="bg-slate-500">Plus</button>
    <p>---------------------------------------------------------</p>
    <p>---------------------------------------------------------</p>
    <p>vuex store modules attach to new file</p>
    <p>Count:{{ CountC }}</p>
    <button @click="clickModuleCPlus" class="bg-slate-500">Plus</button>
    <p>---------------------------------------------------------</p>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    //#region  vuex store classic use
    const Count = computed(() => {
      return store.getters.getCount;
    });
    const ninput = ref(0);
    function clickPlus() {
      store.dispatch("plus1Count");
    }
    function clickPlusN() {
      store.dispatch("plusNCount", ninput.value);
    }
    //#endregion

    //#region vuex modules classic use
    const CountM = computed(() => {
      return store.state.a.count;
    });
    function clickMPlus() {
      store.dispatch("a/increase");
    }
    //#endregion

    //#region vuex modules attach to new module file
    const CountC = computed(() => {
      return store.state.c.count;
    });
    function clickModuleCPlus() {
      store.dispatch("c/increase");
    }
    //#endregion

    return {
      Count,
      ninput,
      clickPlus,
      clickPlusN,
      CountM,
      clickMPlus,
      CountC,
      clickModuleCPlus,
    };
  },
};
</script>
