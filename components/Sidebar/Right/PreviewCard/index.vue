<template>
    <div class="m-2 overflow-hidden border rounded-md bg-background">
       <h1 class="p-3 text-xl font-extrabold text-foreground border-b">
        {{ props.title }}
       </h1>
       <slot />
       <div class="p-3 text-sm dark:text-alter text-theme-dark cursor-pointer hover:bg-foreground/10">
        More...
       </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>