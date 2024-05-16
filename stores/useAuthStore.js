import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const isFetchingUser = ref(true)

    async function login({ email, password, remember }) {
        isFetchingUser.value = true
        const { data } = await useApiFetch('/login', {
            body: { email, password },
            method: 'POST',
        })
        if (data._rawValue.errors) {
            isFetchingUser.value = false
            throw new Error(data._rawValue.errors)
        }
        if (remember) {
            // Set token and user data in cookies
            document.cookie = `token=${data._rawValue.token}; path=/;`
            document.cookie = `user=${JSON.stringify(data._rawValue)}; path=/;`
        } else {
            // Set token and user data in session cookies
            document.cookie = `token=${data._rawValue.token}; path=/;`
            document.cookie = `user=${JSON.stringify(data._rawValue)}; path=/;`
        }
        user.value = data._rawValue
        isFetchingUser.value = false
        return data
    }

    function logout() {
        user.value = null
        // Clear cookies
        document.cookie =
            'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
        document.cookie =
            'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
        console.log(user.value)
    }

    function refreshUser() {
        isFetchingUser.value = true

        // Retrieve user data from cookies
        const cookies = Object.fromEntries(
            document.cookie.split('; ').map((cookie) => cookie.split('='))
        )
        const storedUser = cookies.user

        if (storedUser) {
            try {
                const userObject = JSON.parse(storedUser)
                user.value = userObject
                isFetchingUser.value = false
            } catch (error) {
                console.error('Error parsing user data from cookies:', error)
                isFetchingUser.value = false
            }
        }
    }

    return { user, login, logout, refreshUser }
})
