<template>
    <div
        class="relative bg-white flex flex-col gap-8 border rounded-xl p-12 w-full max-w-[420px]"
    >
        <h1 class="text-bold text-4xl text-center mb-8">مرحباً</h1>
        <FormKit
            submit-label="تسجيل الدخول"
            type="form"
            @submit="handleLogin"
            :submit-attrs="{
                inputClass: 'w-full justify-center duration-300',
            }"
        >
            <FormKit
                label="البريد الإلكتروني"
                placeholder="example@mail.com"
                name="email"
                type="email"
                validation="required|email"
                label-class="mb-4"
                outer-class="h-28"
                value="kayalvshimself@gmail.com"
            />
            <FormKit
                label="كلمة المرور"
                placeholder="*********"
                type="password"
                name="password"
                validation="required"
                :validation-messages="{
                    required: 'كلمة المرور مطلوبة',
                }"
                suffix-icon="eyeClosed"
                @suffix-icon-click="handleIconClick"
                suffix-icon-class=" duration-300 hover:text-blue-500"
                label-class="mb-4"
                outer-class="h-24"
                value="1234567"
            />
            <FormKit
                label="تذكر حسابي"
                :value="false"
                decorator-icon="check"
                name="remember"
                type="checkbox"
                label-class="pr-3"
                outer-class="mb-8"
            />
            <div class="h-8 absolute bottom-4 left-0 w-full">
                <FormKitMessages class="text-center h-8" />
            </div>
        </FormKit>
    </div>
</template>
<script setup>
const handleIconClick = (node, e) => {
    node.props.suffixIcon =
        node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async ({ email, password, remember }, node) => {
    try {
        await auth.login({ email, password, remember })
        router.push({ name: 'index' })
    } catch (error) {
        node.setErrors(error.message)
        console.error(error)
    }
}
</script>
