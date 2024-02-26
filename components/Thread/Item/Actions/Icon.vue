<template>
    <div @click.stop.prevent="emits('onClick')" class="flex items-center text-foreground/80 cursor-pointer group">
        <div
            :class="`p-2 rounded-full ${colorClasses} dark:group-hover:bg-opacity-20 transition-colors`">
            <slot name="icon" :class="sizeClasses" />
        </div>

        <span :class="`ml-1 ${colorClasses}`">
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
        default: 'default'
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

const colorClasses = computed(() => {
    switch (props.color) {
        case "like":
            return 'group-hover:text-red-400'
        case 'reply':
            return 'group-hover:text-blue-400'
        default:
            return 'group-hover:text-green-400'
    }
})

</script>