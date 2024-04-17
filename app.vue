<template>
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>

<script setup>
onMounted(() => {
    const { refreshUser } = useAuthStore()
    refreshUser()
})
</script>
