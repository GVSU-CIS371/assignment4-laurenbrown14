<template>
  <div class="syrup" :style="{ '--syrup-color': type.color }"></div>
</template>

<script setup lang="ts">
interface SyrupType {
  id: string;
  name: string;
  color: string;
}

defineProps<{ type: SyrupType }>();
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background: repeating-linear-gradient(
    45deg,
    #ded09c,
    #ded09c 10px,
    var(--syrup-color) 10px,
    var(--syrup-color) 20px
  );
  background-size: 28px, 28px;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
