<template>
    <button @click="emits('onClick')">
        <NuxtLink to="#"
            class="flex items-center px-6 py-2 rounded-md w-min hover:bg-theme-light" :class="textClasses">
            <div class="">
                <slot name="icon"></slot>
            </div>
            <div class="hidden ml-4 text-xl md:block">
                <slot name="name"></slot>
            </div>
        </NuxtLink>
    </button>
</template>

<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['onClick'])

const textClasses = computed(() => props.active ? 'bg-theme-light' : 'font-normal')
</script>