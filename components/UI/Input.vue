<template>
    <div>
        <label for="" v-if="props.label" class="block pl-3 ml-px text-sm font-medium text-foreground/70">{{ props.label
        }}</label>
        <div class="mt-1">
            <input :value="props.modelValue" @input="event => emits('update:modelValue', event.target.value)"
                class="flex h-9 w-full rounded-md border border-theme-dark dark:border-theme-light bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-dark dark:focus-visible:ring-theme-light disabled:cursor-not-allowed disabled:opacity-50"
                :type="props.type" :placeholder="props.placeholder">
        </div>
    </div>
</template>

<script setup>

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    label: {
        type: String,
        default: null
    }
})
</script>