<template>
    <div class="container mx-auto px-12">
        <PaymentsNote />
        <PaymentsMethods @methodSelected="updateSelectedMethod" />
        <div>{{ selectedMethod }}</div>
        <FormKit
            type="form"
            :submit-attrs="{
                inputClass: 'w-full justify-center duration-300',
                outerClass: '!w-full !max-w-full',
                submitLabel: 'إتمام عملية الدفع',
            }"
        >
            <div class="flex">
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
                <div class="p-6 w-full">
                    <div class="w-full h-full bg-gray-100 rounded"></div>
                </div>
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
