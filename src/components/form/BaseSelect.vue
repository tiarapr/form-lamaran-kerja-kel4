<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select class="form-control" :class="{ 'is-invalid': getError() }" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs">
      <option value="" v-if="placeholder">{{ placeholder }}</option>
      <option v-for="option in options" :key="`option-${option.value}`" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="invalid-feedback" v-if="getError()">{{ getError() }}</div>
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
      type: Array
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: String,
  },
  methods: {
    getError() {
      if (this.modelValue === "") return this.error;
      return false;
    },
  },
};
</script>
