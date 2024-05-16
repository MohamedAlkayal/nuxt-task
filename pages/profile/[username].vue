<template>
    <Head>
        <Title> {{ user?.username }} - UPGRADE </Title>
    </Head>

    <div class="container px-4 mx-auto">
        <div class="md:grid md:grid-cols-12 flex flex-col border rounded-xl">
            <div class="col-span-4">
                <ProfileSidebar :user="user" />
            </div>
            <div class="col-span-8 border-r p-6">
                <ProfileForm :user="user" />
            </div>
        </div>
    </div>
</template>

<script setup>
const user = computed(() => useAuthStore().user)

definePageMeta({
    auth: true,
})
</script>
