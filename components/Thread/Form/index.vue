<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center py-6">
            Loading
        </div>

        <div v-else>
            <ThreadItem   />
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

async function handleFormSubmit(data){
    //TODO: handle form submit
}
</script>