<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <textarea class="form-control" v-bind="$attrs"  rows="5" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"></textarea>
    </div>
</template>
  
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            required: true,
        },
        error: String,
    },
};
</script>
  