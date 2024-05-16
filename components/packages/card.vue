<template>
    <div class="border w-full p-4 rounded min-w-52">
        <p class="text-center mb-4 font-medium">{{ pkg.name }}</p>
        <div
            class="w-full h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center"
        >
            <!-- image -->
            <PhotoIcon class="h-8 w-8 text-gray-400" />
        </div>
        <div class="flex flex-col gap-2 mt-4 pt-4 border-t text-sm">
            <div class="flex justify-between">
                <p class="flex items-center gap-2">
                    <InboxArrowDownIcon class="text-blue-500 h-4 w-4" />
                    <span> عدد النقاط </span>
                </p>
                <p class="font-bold">{{ pkg.no_points }}</p>
            </div>
            <div class="flex justify-between">
                <p class="flex items-center gap-2">
                    <CurrencyDollarIcon class="text-blue-500 h-4 w-4" />
                    <span> السعر </span>
                </p>
                <p class="flex gap-1 font-bold">
                    <span>LE </span>
                    <span>{{ pkg.price }}</span>
                </p>
            </div>
            <div class="flex justify-between">
                <p class="flex items-center gap-2">
                    <BanknotesIcon class="text-blue-500 h-4 w-4" />
                    <span> سعر النقطة </span>
                </p>
                <p class="flex gap-1 font-bold">
                    <span>LE </span>
                    <span>
                        {{
                            pkg.price > 0
                                ? parseFloat(
                                      (pkg.no_points / pkg.price).toFixed(1)
                                  )
                                : 0
                        }}
                    </span>
                </p>
            </div>
            <div class="flex justify-between">
                <p class="flex items-center gap-2">
                    <CheckBadgeIcon class="text-blue-500 h-4 w-4" />
                    <span> صلاحية الباقة بالأيام </span>
                </p>
                <p class="font-bold">
                    {{ pkg.expire_date }}
                </p>
            </div>
        </div>
        <nuxt-link :to="`/packages/${pkg.id}`">
            <button
                class="p-2 text-center w-full border rounded-lg mt-5 border-blue-500 text-blue-500 duration-300 hover:bg-blue-50"
            >
                شراء الآن
            </button>
        </nuxt-link>
    </div>
</template>

<script setup>
import {
    BanknotesIcon,
    CurrencyDollarIcon,
    CheckBadgeIcon,
    InboxArrowDownIcon,
    PhotoIcon,
} from '@heroicons/vue/24/outline'
const { pkg } = defineProps({
    pkg: Object,
})
</script>
