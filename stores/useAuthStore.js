export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    async function login({ email, password, remember }) {
        const { data } = await useApiFetch('/login', {
            body: { email, password },
            method: 'POST',
        })
        if (data._rawValue.errors) {
            throw new Error(data._rawValue.errors)
        }
        if (remember) {
            localStorage.setItem('token', data._rawValue.token)
            localStorage.setItem('user', JSON.stringify(data._rawValue))
        } else {
            sessionStorage.setItem('token', data._rawValue.token)
            sessionStorage.setItem('user', JSON.stringify(data._rawValue))
        }
        user.value = data._rawValue
        return data
    }

    function logout() {
        user.value = null
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
    }

    function refreshUser() {
        const storedUser =
            localStorage.getItem('user') || sessionStorage.getItem('user')
        if (storedUser) {
            try {
                const userObject = JSON.parse(storedUser)
                user.value = userObject
            } catch (error) {
                console.error(
                    'Error parsing user data from localStorage:',
                    error
                )
            }
        }
    }

    return { user, login, logout, refreshUser }
})
