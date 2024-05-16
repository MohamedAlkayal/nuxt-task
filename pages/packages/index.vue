<template>
    <Head>
        <Title>Packages - Upgrade</Title>
    </Head>
    <div class="container px-4 md:px-16 mx-auto">
        <p class="mb-6 font-bold text-lg text-gray-700 flex items-center gap-3">
            <CheckBadgeIcon class="text-blue-500 h-8 w-8" />
            الباقات المتاحة في الوقت الحالي
        </p>
        <div
            v-if="packagesData"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
        >
            <PackagesCard
                v-for="pkg in packagesData"
                :key="pkg.id"
                :pkg="pkg"
            />
        </div>
        <div v-else class="text-center">Loading ...</div>
    </div>
</template>
<script setup>
// cache this request later
import { CheckBadgeIcon } from '@heroicons/vue/24/outline'

definePageMeta({
    auth: true,
})

const { data: packagesData } = useAsyncData(async () => {
    const { data } = await useApiFetch('/packages')
    return data?._rawValue?.data
})
</script>
