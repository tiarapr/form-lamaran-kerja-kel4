<template>
  <label :for="label" class="block text-sm font-medium leading-6 text-gray-900"
    ><slot></slot
  ></label>
  <div class="mt-2">
    <select
      :id="label"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      <option value=""></option>
      <option
        v-for="option in options"
        :key="option.slug"
        :value="typeof option.value == 'number' ? option.value : option.slug"
      >
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'label', 'options'],
  emits: ['update:modelValue']
}
</script>
