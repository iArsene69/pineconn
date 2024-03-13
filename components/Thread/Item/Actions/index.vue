<template>
    <div class="flex items-center justify-around w-full">
        <ThreadItemActionsIcon color="like" @on-click="emits('onLikeClick')">
            <template v-slot:icon>
                <Icon name="iconoir:heart"  />
            </template>

            <template v-slot:default v-if="props.compact">
                {{ props.thread.likeCount }}
            </template>
        </ThreadItemActionsIcon>

        <ThreadItemActionsIcon color="reply" @on-click="emits('onReplyClick')">
            <template v-slot:icon>
                <Icon name="iconoir:reply"  />
            </template>

            <template v-slot:default v-if="props.compact">
                {{ props.thread.repliesCount }}
            </template>
        </ThreadItemActionsIcon>

        <ThreadItemActionsIcon>
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
const emits = defineEmits(['onReplyClick', 'onLikeClick'])

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