<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input class="form-control" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
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
      type: [String, Number, Date],
      default: null,
    },
  },
};
</script>
