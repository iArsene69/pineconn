<template>
    <button
        class="inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50"
        :disabled="props.disabled" :class="classes" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const emits = defineEmits(['onClick'])

const handleClick = (event) => {
    emits('onClick', event)
}

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default'
    },
    variant: {
        type: String,
        default: 'default'
    },
    class: {
        type: String,
        required: false
    }
})

const buttonSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'h-8 rounded-md px-3 text-xs'
        case 'lg':
            return 'h-10 rounded-md px-8 py-3'
        case 'icon':
            return 'h-9 w-9 rounded-full'
        default:
            return 'h-9 px-4 py-2 rounded-md'
    }
})

const variantColor = computed(() => {
    switch (props.variant) {
        case 'light':
            return 'bg-theme-light hover:bg-theme-light/50'
        case 'dark':
            return 'bg-theme-dark hover:bg-theme-dark/50'
        case 'alter':
            return 'bg-alter hover:bg-alter/90'
        case 'outline':
            return 'border border-theme bg-transparent hover:bg-foreground/30'
        default:
            return 'bg-theme hover:bg-theme/50'
    }
})

const classes = computed(() => `${variantColor.value} ${buttonSize.value} ${props.class}`)
</script>