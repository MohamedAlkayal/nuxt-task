<template>
    <div class="container px-12">
        <div class="p-4 px-6 bg-blue-50 flex gap-3 text-gray-800">
            <InformationCircleIcon class="w-6 h-6 pt-1" />
            <p class="text-sm">
                يرجى ملاحظة أن كل معاملة تحتاج إلى نقطة واحدة لإنجازها بنجاح
                ستتوقف عمليتك إذا لم يكن لديك ما يكفي من النقاط وقبل حدوث ذلك
                سيتم إرسال بريد إلكتروني لإعلامك
            </p>
        </div>
        <FormKit
            v-model="value"
            type="radio"
            label="Mailing List"
            :options="[
                {
                    label: 'FormKit Superfans',
                    help: '3974 subscribers',
                    value: 'super',
                },
                {
                    label: 'FormKit Fanatics',
                    help: '1492 subscribers',
                    value: 'fanatics',
                },
                {
                    label: 'Native HTML Absolutists',
                    help: '3 subscribers',
                    value: 'absolute',
                },
            ]"
            :classes="{
                fieldset: 'border-none',
                wrapper: 'group/wrapper',
                option: 'relative border p-6 mb-4 rounded-md formkit-checked:border-none',
                decorator:
                    '$reset absolute top-0 left-0 right-0 bottom-0 rounded-md group-data-[checked=true]/wrapper:ring',
                decoratorIcon: '$reset hidden',
                label: '$reset text-lg text-gray-600 text-bold mt-0 mb-4',
                optionHelp: '$reset text-sm text-gray-500',
            }"
            help="Choose your preferred list"
        />
    </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>
