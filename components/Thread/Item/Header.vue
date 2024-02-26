<template>
    <div class="flex p-4">

        <div>
            <img :src="props.thread.author.profileImg" alt="" class="w-10 h-10 rounded-full">
        </div>

        <div class="ml-3 flex flex-col justify-center">

            <div class="">
                <span class="font-medium text-foreground/80">{{ props.thread.author.name }}</span>

                <span class="ml-1 text-sm font-medium text-foreground/40">
                    <NuxtLink to="#">
                        {{ props.thread.author.handle }}
                    </NuxtLink>
                </span>
            </div>

            <p v-if="!!props.thread.replyTo" class="text-sm">
                <span class="text-foreground/80">
                    Replying to
                </span>

                <NuxtLink to="#" class="text-theme-light">
                    {{ props.thread.replyTo.author.handle }}
                </NuxtLink>
            </p>

        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    thread: {
        type: Object,
        required: true
    }
})

// const author = props.thread.author
// const replyToUrl = computed(() => `/status/${props.thread?.replyTo}`)
</script>