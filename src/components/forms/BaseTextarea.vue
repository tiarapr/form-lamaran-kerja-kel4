<template>
  <label :for="label" class="block text-sm font-medium leading-6 text-gray-900"
    ><slot></slot
  ></label>
  <div class="mt-2">
    <textarea
      :id="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value.trim())"
      class="resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    ></textarea>
  </div>
  <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
</template>

<script>
export default {
  props: ['modelValue', 'label', 'error'],
  emits: ['update:modelValue']
}
</script>
