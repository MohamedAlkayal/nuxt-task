<template>
  <nuxt-link class="duration-300 text-center pt-8 border-t text-blue-700 hover:text-blue-500" :to="{ name: routeName }"> {{ lable }} </nuxt-link>
</template>

<script setup>
const { lable, routeName } = defineProps({
  lable: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
});
</script>
