<template>
  <div>
    <h1 v-if="bool">ถูก</h1>
    <h1 v-else>ไม่ถูก</h1>
    
    <h4 v-for="i in list" :key="i">
      {{i}}
    </h4>
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Kabigon",
      list: ["A", "B", "C", "D"],
      bool: false
    }
  },
}
</script>