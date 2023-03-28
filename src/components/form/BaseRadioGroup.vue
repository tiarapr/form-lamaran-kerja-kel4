<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div>
      <base-radio :name="name" v-for="option in options" :key="`radio-${option.value}`" :label="option.text" :value="option.value" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :error="error" :getError="getError"></base-radio>
      <div class="invalid-feedback" v-if="getError()">{{ getError() }}</div>
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
      type: Array
    },
    label: {
      type: String,
      required: true,
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
