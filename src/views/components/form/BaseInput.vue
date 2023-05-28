<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input class="form-control" :class="{ 'is-invalid': getError() }" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
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
      type: [String, Number, Date],
      default: null,
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
