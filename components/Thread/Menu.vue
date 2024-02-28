<template>
    <div class="p-2 transition-colors rounded-full cursor-pointer text-theme-dark hover:text-foreground dark:text-theme-light dark:hover:text-foreground"
        :class="props.class" @click="handleClick">
        <slot name="icon" />
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        required: false
    }
})

const emits = defineEmits(['onClick'])

const handleClick = (event) => {
    emits('onClick', event)
}
</script>