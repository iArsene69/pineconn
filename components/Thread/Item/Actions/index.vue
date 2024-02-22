<template>
    <div class="flex items-center justify-around w-full">
        <ThreadItemActionsIcon color="red" @on-click="emits('onReplyClick')">
            <template v-slot:icon>
                <Icon name="iconoir:heart"  />
            </template>

            <template v-slot:default v-if="props.compact">
                {{ props.thread.likeCount }}
            </template>
        </ThreadItemActionsIcon>

        <ThreadItemActionsIcon color="blue">
            <template v-slot:icon>
                <Icon name="iconoir:reply"  />
            </template>

            <template v-slot:default v-if="props.compact">
                {{ props.thread.repliesCount }}
            </template>
        </ThreadItemActionsIcon>

        <ThreadItemActionsIcon color="green">
            <template v-slot:icon>
                <Icon name="iconoir:chat-lines"  />
            </template>

            <template v-slot:default v-if="props.compact">
                Direct Message
            </template>
        </ThreadItemActionsIcon>
    </div>
</template>

<script setup>
const emits = defineEmits(['onReplyClick'])

const props = defineProps({
    thread: {
        type: Object,
        required: true
    },
    compact: {
        type: Boolean,
        default: false
    }
})
</script>