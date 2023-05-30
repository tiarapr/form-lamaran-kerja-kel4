<template>
  <label class="text-sm font-semibold leading-6 text-gray-900">Skills</label>
  <div class="mt-2 gap-x-6 gap-y-4 flex flex-wrap">
    <div class="relative flex gap-x-2" v-for="option in options" :key="option.slug">
      <div class="flex h-6 items-center">
        <input
          :id="option.slug"
          :value="option.slug"
          v-model="value"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div class="text-sm leading-6">
        <label :for="option.slug" class="text-gray-900">{{ option.title }}</label>
      </div>
    </div>
  </div>
  <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
</template>

<script>
export default {
  props: ['modelValue', 'options', 'error'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
