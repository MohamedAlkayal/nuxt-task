<template>
    <div class="p-4 px-6 rounded-lg bg-blue-50 flex gap-3 text-gray-800">
        <InformationCircleIcon class="w-6 h-6" />
        <p class="text-sm">
            يرجى ملاحظة أن كل معاملة تحتاج إلى نقطة واحدة لإنجازها بنجاح ستتوقف
            عمليتك إذا لم يكن لديك ما يكفي من النقاط وقبل حدوث ذلك سيتم إرسال
            بريد إلكتروني لإعلامك
        </p>
    </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>
