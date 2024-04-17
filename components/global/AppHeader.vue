<template>
    <header class="p-8 py-4 shadow mb-8">
        <div class="container flex justify-between items-center mx-auto">
            <div class="flex items-center gap-8">
                <nuxt-link class="font-bold text-xl" to="/">
                    UPGRADE
                </nuxt-link>
                <nuxt-link
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/"
                >
                    الرئيسية
                </nuxt-link>
                <nuxt-link
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/packages"
                >
                    الباقات
                </nuxt-link>
                <nuxt-link
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/"
                >
                    المشاريع
                </nuxt-link>
                <nuxt-link
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/"
                >
                    تواصل معنا
                </nuxt-link>
                <nuxt-link
                    class="duration-300 text-gray-500 hover:text-blue-500"
                    to="/"
                >
                    من نحن
                </nuxt-link>
            </div>
            <nav class="flex flex-row-reverse items-center gap-12">
                <div v-if="user">
                    <nuxt-link
                        :to="`/profile/${user.username}`"
                        class="flex items-center gap-3 rounded-full bg-gray-50 p-3 duration-300 hover:bg-gray-100"
                    >
                        <p class="text-lg font-bold pr-4">
                            {{ user.username }}
                        </p>
                        <UserCircleIcon class="h-10 w-10 text-gray-600" />
                    </nuxt-link>
                </div>
                <div v-else>
                    <nuxt-link to="/login"> تسجيل الدخول </nuxt-link>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid'

const user = computed(() => useAuthStore().user)
</script>
