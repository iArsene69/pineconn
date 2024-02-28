<template>
    <div>
        <ThreadItemHeader :thread="props.thread" />

        <div :class="(compact) ? 'ml-16' : 'ml-2 mt-4'">
            <p class="flex-shrink w-auto font-medium text-foreground/80"
                :class="(props.compact) ? 'text-base' : 'text-xl'">
                {{ props.thread.thread }}
            </p>

            <div v-for="image in thread.media" :key="image.id" class="flex my-3 mr-2 border-2 rounded-md border-foreground/40">
                <img :src="image.url" alt="" class="w-full rounded-md">
            </div>

            <div class="mt-2" v-if="!props.hideActions">
                <ThreadItemActions :thread="props.thread" :compact="props.compact"  @on-reply-click="handleReplyClick" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: true
    },
    compact: {
        type: Boolean,
        default: false
    },
    hideActions: {
        type: Boolean,
        default: false
    }
})

function handleReplyClick() {
    //TODO: make reply click function
    console.log("i'm clicked")
}
</script>