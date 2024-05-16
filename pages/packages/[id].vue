<template>
    <Head>
        <Title>Payment - Upgrade</Title>
    </Head>
    <div class="container mx-auto px-12">
        <PaymentsNote />
        <PaymentsMethods @methodSelected="updateSelectedMethod" />
        <PaymentsMethodsFormsVisa v-if="selectedMethod === 1" />
        <div v-else class="p-8 w-full h-full justify-center items-center">
            forms for other payment methods
            {{
                selectedMethod === 2
                    ? 'محفظة إلكترونية'
                    : selectedMethod === 3
                    ? 'تحويل بنكي'
                    : 'الرصيد الحالي'
            }}
        </div>
    </div>
</template>

<script setup>
const selectedMethod = ref(1)

const updateSelectedMethod = (methodId) => {
    selectedMethod.value = methodId
}
</script>
