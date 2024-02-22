<template>
    <div>
        <MainSection title="What's today">

            <Head>
                <Title>Home / What's today?</Title>
            </Head>

            <div class="border-b border-foreground/40">
                <ThreadForm :user="auth.authUser.value" @on-success="handleFormSuccess" />
            </div>
             <ThreadFeedList :threads="threadFeed" />
        </MainSection>
    </div>
</template>

<script setup>
const auth = useAuth()

const { getThreads } = useThread()
const loading = ref(false)
const threadFeed = ref([])

onBeforeMount(async () => {
    loading.value = true
    try {
        const {threads} = await getThreads()

        threadFeed.value = threads
    } catch (error) {
        console.log(error)
    }finally{
        loading.value = false
    }
})

function handleFormSuccess(thread) {
    //TODO: handle success
}
</script>