export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token')

    const store = useAuthStore()
    // guest gaurd
    if (to.meta.guest && token.value) {
        return navigateTo('/')
    }
    // auth gaurd
    //
    if (to.meta.auth && !token.value) {
        return navigateTo('/login')
    }
})
