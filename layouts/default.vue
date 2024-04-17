<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <AppHeader />
            <slot></slot>
        </div>

        <AppFooter />
    </div>
</template>
