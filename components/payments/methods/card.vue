<template>
    <div
        :class="selectedMethod == id ? 'border-blue-500' : ''"
        class="cursor-pointer relative flex flex-col justify-center items-center border rounded p-6 duration-300 hover:bg-gray-50"
    >
        <div
            :class="selectedMethod == id ? 'border-blue-500' : ''"
            class="absolute flex justify-center items-center top-2 left-2 border duration-300 rounded-full h-5 w-5"
        >
            <span
                :class="selectedMethod == id ? 'bg-blue-500' : ''"
                class="block w-3 h-3 rounded-full"
            ></span>
        </div>
        <slot></slot>
        <p class="p-2 text-gray-500">{{ title }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    selectedMethod: {
        type: Number,
        required: true,
    },
})
</script>
