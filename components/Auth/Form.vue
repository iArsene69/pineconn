<template>
    <div class="w-full">
        <div class="flex justify-center">
            Logo
        </div>

        <form @submit.prevent="handleLogin" class="flex flex-col justify-center gap-4">
            <UIInput v-model="data.username" label="username" placeholder="@yourusername" />
            <UIInput v-model="data.password" label="password" placeholder="*********" />
            <UIButton @click="handleLogin" :disabled="isButtonDisabled" />
        </form>
    </div>
</template>

<script setup>
const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()

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
    }
}

const isButtonDisabled = computed(() => {
    return {!data.username || !data.password || data.loading
}
})
</script>
