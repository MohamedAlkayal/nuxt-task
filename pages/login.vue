<template>
    <Head>
        <Title>Login - UPGRADE</Title>
    </Head>

    <div
        class="h-screen mx-auto flex flex-col justify-center items-center"
        :style="{
            backgroundImage: `url('https://images.unsplash.com/photo-1620937170928-a03bb6261277?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }"
    >
        <AuthLoginForm />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth',
    guest: true,
})
</script>
