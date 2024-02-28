<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center py-6">
            Loading
        </div>

        <div v-else>
            <ThreadItem :thread="props.replyTo" v-if="props.replyTo && props.showReply" hideActions />
            <ThreadFormInput :placeholder="props.placeholder" :user="props.user" @onSubmit="handleFormSubmit" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    placeholder: {
        type: String,
        default: "What's the happs?"
    },
    replyTo: {
        type: Object,
        default: null
    },
    showReply: {
        type: Boolean,
        default: false
    }
})

const loading = ref(false)
const emits = defineEmits(['onSuccess'])
const {postThread} = useThread()

async function handleFormSubmit(data){
    loading.value = true
    try {
        const response = await postThread({
            thread: data.thread,
            media: data.media,
            replyToId: props.replyTo?.id
        })

        emits('onSuccess', response.thread)
    } catch (error) {
        console.log(error)
    }finally{
        loading.value = false
    }
}
</script>