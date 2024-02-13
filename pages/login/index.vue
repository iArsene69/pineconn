<template>
    <div class="w-full">
        <div class="flex justify-center">
            {{ token }}
        </div>

        <form @submit.prevent="handleLogin" class="flex flex-col justify-center gap-4">
            <UIInput v-model="data.username" label="username" placeholder="@yourusername" />
            <UIInput type="password" v-model="data.password" label="password" placeholder="*********" />
            <UIButton @on-click="handleLogin" :disabled="isButtonDisabled">Login</UIButton>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})

const router = useRouter()

const { useAuthToken } = useAuth()
const token = useAuthToken()

const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()
    console.log(data.username)
    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
        router.push({ path: "/" })
    }
}

const isButtonDisabled = computed(() => {
    return !data.username || !data.password || data.loading
})
</script>
