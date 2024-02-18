<template>
    <div>
        <ThreadItemHeader />

        <div :class="(compact) ? 'ml-16' : 'ml-2 mt-4'">
            <p class="flex-shrink w-auto font-medium text-foreground/80"
                :class="(props.compact) ? 'text-base' : 'text-2xl'">
                //Thread text
            </p>

            <div class="flex my-3 mr-2 border-2 rounded-md border-foreground/40">
                <img src="" alt="" class="w-full rounded-md">
            </div>

            <div class="mt-2" v-if="!props.hideActions">
                <ThreadItemActions  @on-reply-click="handleReplyClick" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: false
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
}
</script>