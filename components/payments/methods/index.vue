<template>
    <div class="mt-8">
        <div class="flex justify-between items-center mb-4 font-bold">
            <p class="flex items-center gap-2">
                <BanknotesIcon class="w-6 h-6 text-blue-500" />
                <span>المبلغ المطلوب دفعه</span>
            </p>
            <p>{{ paymentAmount }} LE</p>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
        >
            <PaymentsMethodsCard
                @click="handleMethodSelected(1)"
                :selectedMethod="selectedMethod"
                :id="1"
                title="فيزا / ماستركارد"
            >
                <CreditCardIcon
                    :class="selectedMethod == 1 ? 'text-blue-500' : ''"
                    class="h-8 w-8"
                />
            </PaymentsMethodsCard>
            <PaymentsMethodsCard
                @click="handleMethodSelected(2)"
                :selectedMethod="selectedMethod"
                :id="2"
                title="محفظة إلكترونية"
            >
                <DevicePhoneMobileIcon
                    :class="selectedMethod == 2 ? 'text-blue-500' : ''"
                    class="h-8 w-8"
                />
            </PaymentsMethodsCard>
            <PaymentsMethodsCard
                @click="handleMethodSelected(3)"
                :selectedMethod="selectedMethod"
                :id="3"
                title="تحويل بنكي"
            >
                <BuildingLibraryIcon
                    :class="selectedMethod == 3 ? 'text-blue-500' : ''"
                    class="h-8 w-8"
                />
            </PaymentsMethodsCard>
            <PaymentsMethodsCard
                @click="handleMethodSelected(4)"
                :selectedMethod="selectedMethod"
                :id="4"
                title="الرصيد الحالي"
            >
                <WalletIcon
                    :class="selectedMethod == 4 ? 'text-blue-500' : ''"
                    class="h-8 w-8"
                />
            </PaymentsMethodsCard>
        </div>
    </div>
</template>

<script setup>
import {
    CreditCardIcon,
    BanknotesIcon,
    DevicePhoneMobileIcon,
    BuildingLibraryIcon,
    WalletIcon,
} from '@heroicons/vue/24/outline'

const selectedMethod = ref(1)
const emit = defineEmits(['methodSelected'])

const handleMethodSelected = (id) => {
    selectedMethod.value = id
    emit('methodSelected', id)
}

const route = useRoute()
const paymentAmount = computed(getPaymentAmount)

function getPaymentAmount() {
    const paymentMethodId = route.params.id
    // get one package endpoint using the id
    return 0
}
</script>
