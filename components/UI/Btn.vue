<template>
  <div class="w-full">
    <button class="cursor-pointer w-full p-2 text-white bg-blue-500 text-dim-200 rounded duration-300 hover:bg-blue-600" :type="type">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const { type, value } = defineProps({
  type: { type: String, default: "button" },
});
</script>
