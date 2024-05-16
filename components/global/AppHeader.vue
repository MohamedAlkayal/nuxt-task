<template>
    <header class="p-8 py-4 shadow mb-8">
        <div class="container flex justify-between items-center mx-auto">
            <div class="flex items-center gap-4">
                <nuxt-link class="font-bold text-xl flex items-center" to="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="min-w-8 md:me-3"
                        alt="FlowBite Logo"
                    />
                    <p class="hidden md:block">UPGRADE</p>
                </nuxt-link>
                <nuxt-link
                    activeClass="!text-blue-500"
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/"
                >
                    الرئيسية
                </nuxt-link>
                <nuxt-link
                    :class="user ? 'block' : 'hidden'"
                    activeClass="!text-blue-500"
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/packages"
                >
                    الباقات
                </nuxt-link>
            </div>
            <nav class="flex flex-row-reverse items-center gap-12">
                <div
                    @click="isMenuToggled = !isMenuToggled"
                    class="relative"
                    v-if="user"
                >
                    <div
                        class="cursor-pointer md:w-44 flex justify-end gap-4 items-center duration-300 hover:text-blue-500"
                    >
                        <ChevronDownIcon class="w-4 h-4" />

                        <div class="flex items-center gap-3">
                            <p class="text-lg font-bold pr-4">
                                {{ user?.username }}
                            </p>
                            <UserCircleIcon class="h-10 w-10 text-gray-600" />
                        </div>
                    </div>
                    <ul
                        :class="isMenuToggled ? 'block' : 'hidden'"
                        class="absolute bg-white p-4 left-0 border rounded w-full text-sm md:text-base"
                    >
                        <li
                            class="cursor-pointer p-1 pb-4 border-b duration-300 hover:text-blue-500"
                        >
                            <nuxt-link :to="`/profile/${user.username}`">
                                الصفحة الشخصية
                            </nuxt-link>
                        </li>
                        <li
                            @click="handleLogout"
                            class="cursor-pointer p-1 pt-4 duration-300 hover:text-blue-500"
                        >
                            تسجيل الخروج
                        </li>
                    </ul>
                </div>
                <div
                    class="h-12 flex justify-center items-center duration-300 hover:text-blue-500"
                >
                    <nuxt-link v-if="!user" to="/login">
                        تسجيل الدخول
                    </nuxt-link>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'

const isMenuToggled = ref(false)

const router = useRouter()
const { logout } = useAuthStore()
function handleLogout() {
    logout()
    router.push('/login')
}

const user = computed(() => useAuthStore().user)
const isFetchingUser = computed(() => useAuthStore().isFetchingUser)
</script>
