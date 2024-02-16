<template>
    <div class="p-2 text-theme-dark dark:text-theme-light transition-colors rounded-full cursor-pointer hover:bg-theme-dark hover:text-foreground dark:hover:bg-theme-light"
        :class="props.class" @click="handleClick">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        required: false
    }
})

const emits = defineEmits(['onclick'])

const handleClick = (event) => {
    emits('onclick', event)
}
</script>