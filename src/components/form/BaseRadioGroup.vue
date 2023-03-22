<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <div>
            <base-radio :name="name" v-for="option in options" :key="`radio-${option.value}`" :label="option.text"
                :value="option.value" :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)">
            </base-radio>
        </div>
    </div>
</template>
    
<script>
export default {
    inheritAttrs: false,
    props: {
        modelValue: {
            type: [String, Number],
            default: null,
        },
        name: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
    