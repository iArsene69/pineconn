<template>
    <div>
        <div>
            <MainSection title="What's today">

                <Head>
                    <Title>Home / What's today?</Title>
                </Head>

                <div class="border-b border-foreground/40">
                    <ThreadForm :user="auth.authUser.value" @on-success="handleFormSuccess" />
                </div>
                <ThreadFeedList :threads="store.threads" />
            </MainSection>
        </div>
        <UIDialog :isOpen="postThreadModal" @on-close="closeThreadModal">
            <ThreadForm :replyTo="threadById" showReply :user="auth.authUser.value" />
        </UIDialog>

    </div>
</template>

<script setup>
import { useThreadStore } from '~/stores/useThreadStore';

const auth = useAuth()
const store = useThreadStore()

const { getThreads, postThreadModal, closeThreadModal, replyToId } = useThread()
const loading = ref(false)
const threadFeed = ref([])
const threadById = ref({})

await useAsyncData('threads', async () => store.getThreads())


const getById = () => {
    const thread = threadFeed.value.find((thr) => thr.id === replyToId.value)
    console.log(thread)
    threadById.value = thread
}


watch(() => replyToId.value, () => getById())

// watch(() => threads.value, () => fetchThreads())

// onNuxtReady(() => fetchThreads())



function handleFormSuccess(thread) {
    //TODO: handle success
}
</script>