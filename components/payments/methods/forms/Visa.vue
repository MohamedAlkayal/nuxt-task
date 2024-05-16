<template>
    <FormKit
        type="form"
        submit-label="إتمام عملية الدفع"
        :submit-attrs="{
            inputClass:
                'w-full justify-center duration-300 duration-300 hover:bg-blue-700',
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
            <div
                class="w-full hidden md:flex justify-center items-center my-3 border rounded-lg pl-6"
            >
                <img src="/images/visaXmastercard.png" alt="" />
            </div>
        </div>
    </FormKit>
</template>
