<template>
  <label :for="label" class="block text-sm font-medium leading-6 text-gray-900"
    ><slot></slot
  ></label>
  <div :class="[{ relative: addOn }, 'mt-2']">
    <div v-if="addOn" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-700 font-medium sm:text-sm">{{ addOn }}</span>
    </div>
    <input
      :id="label"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value.trim())"
      :class="[
        { 'pl-9': addOn },
        'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      ]"
    />
  </div>
  <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['modelValue', 'label', 'addOn', 'error'],
  emits: ['update:modelValue']
}
</script>
