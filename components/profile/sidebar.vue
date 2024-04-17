<template>
    <div
        class="w-full border-b h-[200px] flex flex-col justify-center items-center gap-2"
    >
        <UserCircleIcon class="h-32 w-32 text-gray-400" />
        <p class="font-bold text-lg">{{ user?.username }}</p>
    </div>
    <ul>
        <li
            class="cursor-pointer text-gray-500 p-5 border-b flex items-center gap-3 duration-300 bg-gray-100"
        >
            <UserIcon class="h-5 w-5" />
            <p>بياناتي الشخصية</p>
        </li>
        <li
            class="cursor-pointer text-gray-500 p-5 border-b flex items-center gap-3 duration-300 hover:bg-gray-100"
        >
            <CurrencyDollarIcon class="h-5 w-5" />
            <p>تقرير عن مدفوعاتي</p>
        </li>
        <li
            class="cursor-pointer text-gray-500 p-5 border-b flex items-center gap-3 duration-300 hover:bg-gray-100"
        >
            <WalletIcon class="h-5 w-5" />
            <p>شحن المحفظة</p>
        </li>
        <li
            class="cursor-pointer text-gray-500 p-5 flex items-center gap-3 duration-300 hover:bg-gray-100"
        >
            <TicketIcon class="h-5 w-5" />
            <p>تذاكر الدعم الفني</p>
        </li>
    </ul>
</template>

<script setup>
import {
    UserIcon,
    CurrencyDollarIcon,
    WalletIcon,
    TicketIcon,
} from '@heroicons/vue/24/outline'
import { UserCircleIcon } from '@heroicons/vue/24/solid'

const { user } = defineProps({
    user: {
        required: true,
    },
})
</script>
