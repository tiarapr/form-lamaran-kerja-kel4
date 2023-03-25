<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <textarea class="form-control" :class="{ 'is-invalid': getError() }" rows="5" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
    <div class="invalid-feedback" v-if="getError()">{{ getError() }}</div>
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
  methods: {
    getError() {
      if (this.modelValue === "") return this.error;
      return false;
    },
  },
};
</script>
