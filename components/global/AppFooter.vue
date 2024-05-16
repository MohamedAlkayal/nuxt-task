<template>
    <footer class="bg-white dark:bg-gray-900 container mx-auto px-8 mt-32">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <NuxtLink to="#" class="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            class="h-8 me-3"
                            alt="FlowBite Logo"
                        />
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                            >UPGRADE</span
                        >
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            روابط سريعة
                        </h2>
                        <ul
                            class="text-gray-500 dark:text-gray-400 font-medium"
                        >
                            <li class="mb-4">
                                <NuxtLink to="#" class="hover:underline"
                                    >الرئيسية</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:underline"
                                    >المشاريع</NuxtLink
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            مصادر
                        </h2>
                        <ul
                            class="text-gray-500 dark:text-gray-400 font-medium"
                        >
                            <li class="mb-4">
                                <NuxtLink to="#" class="hover:underline"
                                    >الخصوصية</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:underline"
                                    >الأسئلة الشائعة</NuxtLink
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                        >
                            التواصل
                        </h2>
                        <ul
                            class="text-gray-500 dark:text-gray-400 font-medium"
                        >
                            <li class="mb-4">
                                <NuxtLink to="#" class="hover:underline"
                                    >+9021312312</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:underline"
                                    >info@mail.net</NuxtLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr
                class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
            />
            <div class="sm:flex sm:items-center sm:justify-center">
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    >© 2023
                    <NuxtLink to="#" class="hover:underline">UPGRADE</NuxtLink>
                    All Rights Reserved
                </span>
            </div>
        </div>
    </footer>
</template>
