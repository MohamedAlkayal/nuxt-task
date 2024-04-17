<template>
    <div class="flex items-center justify-between">
        <h2 class="font-bold text-gray-600">تعديل بياناتي الشخصية</h2>
        <button
            class="border rounded-lg p-2 text-sm border-blue-500 text-blue-500 duration-300 hover:bg-blue-50"
        >
            ملخص سريع
        </button>
    </div>
    <FormKit
        v-if="user"
        type="form"
        @submit="handleUpdate"
        :submit-attrs="{
            inputClass: 'w-full justify-center duration-300',
            outerClass: '!w-full !max-w-full',
            submitLabel: 'حفظ',
        }"
    >
        <div class="my-8">
            <div class="flex flex-col md:flex-row gap-6">
                <div class="w-full">
                    <formKit
                        :value="user.username"
                        type="text"
                        name="name"
                        label="اسم المستخدم"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                    />
                </div>
                <div class="w-full">
                    <formKit
                        :value="user.email"
                        type="email"
                        name="email"
                        label="البريد الإلكتروني"
                        validation="email"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-6">
                <div class="w-full">
                    <formKit
                        placeholder="اترك كلمة المرور فارغة في حالة عدم تفييرها "
                        type="password"
                        name="password"
                        label="كلمة المرور"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                        suffix-icon="eyeClosed"
                        @suffix-icon-click="handleIconClick"
                        suffix-icon-class="hover:text-blue-500"
                    />
                </div>
                <div class="w-full">
                    <formKit
                        :value="user.phone"
                        type="tel"
                        name="phone"
                        label="رقم الهاتف"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                    />
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-6">
                <div class="w-full">
                    <formKit
                        suffix-icon="down"
                        type="select"
                        name="country"
                        label="الدولة"
                        :options="country"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                        input-class="mr-3"
                        v-model="selectedCountry"
                    />
                </div>
                <div class="w-full">
                    <formKit
                        suffix-icon="down"
                        type="select"
                        name="city"
                        label="المدينة"
                        :options="cityOptions"
                        label-class="pr-3 mb-4 text-black/60"
                        outer-class="h-24 max-w-full"
                        input-class="mr-3"
                    />
                </div>
            </div>
            <div class="custom-upload">
                <input
                    type="file"
                    id="upload"
                    class="hidden"
                    accept="image/*"
                    @change="handleFileUpload"
                />
                <label
                    for="upload"
                    class="cursor-pointer w-full border-2 border-dashed border-blue-500 flex justify-center items-center gap-4 p-10 rounded-xl duration-300 hover:bg-blue-50"
                >
                    <PhotoIcon class="w-8 h-8 text-blue-500" />
                    <span
                        class="text-blue-500 font-medium max-w-2/3 overflow-hidden overflow-ellipsis"
                    >
                        {{ fileName ? fileName : 'إرفع صورة شخصية' }}
                    </span>
                </label>
            </div>
        </div>
    </FormKit>
</template>

<script setup>
import { PhotoIcon } from '@heroicons/vue/24/outline'
const handleIconClick = (node, e) => {
    node.props.suffixIcon =
        node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

const fileName = ref('')
const handleFileUpload = (event) => {
    const file = event.target.files[0]
    fileName.value = file.name
}

const { user } = defineProps({
    user: {
        required: true,
    },
})

const country = {
    egypt: 'مصر',
    ksa: 'السعودية',
    uae: 'الإمارات',
    jordan: 'الأردن',
}

const city = {
    egypt: {
        cairo: 'القاهرة',
        alexandria: 'الإسكندرية',
        luxor: 'الأقصر',
        aswan: 'أسوان',
    },
    ksa: {
        riyadh: 'الرياض',
        jeddah: 'جدة',
        dammam: 'الدمام',
        makkah: 'مكة المكرمة',
        madinah: 'المدينة المنورة',
    },
    uae: {
        dubai: 'دبي',
        abu_dhabi: 'أبو ظبي',
        sharjah: 'الشارقة',
        ajman: 'عجمان',
        al_ain: 'العين',
    },
    jordan: {
        amman: 'عمان',
        zarqa: 'الزرقاء',
        irbid: 'إربد',
        aqaba: 'العقبة',
        salt: 'السلط',
    },
}

const selectedCountry = ref(null)
const cityOptions = computed(() => {
    return selectedCountry.value
        ? Object.keys(city[selectedCountry.value]).map((cityKey) => ({
              value: cityKey,
              label: city[selectedCountry.value][cityKey],
          }))
        : city.egypt
})

function handleUpdate(data) {
    console.log(data)
}
</script>
