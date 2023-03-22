<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <select class="form-control" :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        >
        <option value="" v-if="placeholder">{{ placeholder }}</option>
        <option v-for="option in options"
        :key="`option-${option.value}`"
        :value="option.value"
        >
        {{ option.text }}
        </option>
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
        options: {
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
};
</script>
