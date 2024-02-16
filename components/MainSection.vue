<template>
    <div class="border-x border-foreground/40">
        <div class="sticky top-0 px-4 py-3 bg-background/80 backdrop-blur-md">
            <h2 class="text-xl font-bold text-foreground/70 ">{{ props.title }}</h2>
        </div>

        <div v-if="props.loading" class="flex items-center justify-center p-4 border-b border-foreground/40">
            Loading...
        </div>
        <div v-else>
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>