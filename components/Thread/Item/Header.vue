<template>
    <div class="flex p-4">

        <div>
            <img src="" alt="" class="w-10 h-10 rounded-full">
        </div>

        <div class="ml-3">
            <span class="font-medium text-foreground/80">//Author Name//</span>

            <span class="ml-3 text-sm font-medium text-foreground/40">
                <NuxtLink to="#">
                    //Author Handle//
                </NuxtLink>
            </span>

            <p class="text-sm">
                <span class="text-foreground/80">
                    Replying To
                </span>

                <NuxtLink to="#" class="text-theme-light">
                    //Reply to Author handle//
                </NuxtLink>
            </p>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: false
    }
})

// const author = props.thread.author
// const replyToUrl = computed(() => `/status/${props.thread?.replyTo}`)
</script>