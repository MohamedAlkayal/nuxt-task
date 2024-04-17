<template>
    <div class="container mx-auto px-12">
        <PaymentsNote />
        <PaymentsMethods @methodSelected="updateSelectedMethod" />
        <div>{{ selectedMethod }}</div>
        <FormKit
            type="form"
            :submit-attrs="{
                inputClass:
                    'w-full justify-center duration-300 bg-white !text-blue-500 duration-300 hover:bg-gray-50',
                outerClass: '!w-full !max-w-full px-8',
                submitLabel: 'إتمام عملية الدفع',
            }"
        >
            <div class="flex gap-6 p-8">
                <div class="w-full">
                    <FormKit
                        type="text"
                        label="رقم البطاقة"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                    />
                    <FormKit
                        type="password"
                        label="مالك البطاقة"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class=" max-w-full"
                    />
                    <FormKit
                        type="password"
                        label="مالك البطاقة"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class=" max-w-full"
                    />
                    <FormKit
                        type="password"
                        label="CSV"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class=" max-w-full"
                    />
                    <FormKit
                        type="date"
                        label="تاريخ إنتهاء البطاقة"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class=" max-w-full"
                    />
                </div>
                <!-- image -->
                <div
                    class="w-full hidden md:block my-3 bg-gray-100 rounded-xl"
                ></div>
            </div>
        </FormKit>
    </div>
</template>

<script setup>
const selectedMethod = ref(1)

const updateSelectedMethod = (methodId) => {
    selectedMethod.value = methodId
}
</script>
