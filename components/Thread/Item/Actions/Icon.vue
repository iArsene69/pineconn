<template>
    <div @click.stop.prevent class="flex items-center text-foreground/80 cursor-pointer group">
        <div :class="`p-2 rounded-full group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 dark:group-hover:bg-opacity-20 transition-colors`">
            <slot name="icon" :class="sizeClasses" />
        </div>

        <span :class="`ml-1 group-hover:text-${props.color}-40`">
            <slot />
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const emits = defineEmits(['onClick'])

const props = defineProps({
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: 'default'
    }
})

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'h-4 w-4'
        case 'lg':
            return 'h-8 w-8'
        case 'xl':
            return 'h-10 w-10'
        default:
            return 'h-6 w-6'

    }
})

</script>