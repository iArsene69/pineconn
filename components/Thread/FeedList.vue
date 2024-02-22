<template>
    <div>
        <div v-if="props.threads.length === 0" class="p-4">
            <p class="text-center text-foreground/80">
                No one got offensed by smallest joke, what a peace!
            </p>
        </div>
        <div v-else v-for="thread in props.threads" :key="thread.id" @click.native="redirectTo(thread.id)" class="pb-4 border-b cursor-pointer hover:bg-background/20 border-foreground/40" >
            <ThreadItem :thread="thread" compact />
        </div>
    </div>
</template>
<script setup>
const router = useRouter()

const props = defineProps({
    threads: {
        type: Array,
        required: true
    }
})

function redirectTo(threadId){
    router.push(`/thread/${threadId}`)
}
</script>