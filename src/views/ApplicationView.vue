<template>
  <div class="overflow-hidden bg-white ring-1 ring-black ring-opacity-5 shadow md:rounded-lg">
    <div
      class="px-4 py-5 sm:px-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-y-4"
    >
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div class="text-center sm:text-right space-x-4 text-sm">
        <button
          class="ring-1 ring-gray-300 text-gray-700 py-1 px-2 rounded-md"
          @click="$router.push({ name: 'applications' })"
        >
          Back
        </button>
        <button
          class="ring-1 ring-gray-300 text-gray-700 py-1 px-2 rounded-md"
          @click="$router.push({ name: 'application.edit' })"
        >
          Update
        </button>
        <button
          class="ring-1 ring-gray-300 text-gray-700 py-1 px-2 rounded-md"
          @click="handleDelete"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ store.application.first_name + ' ' + store.application.last_name
            }}<span class="text-gray-500 pl-4">{{
              store.application.gender == 1 ? 'He / Him' : 'She / Her'
            }}</span>
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Application for</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{
              store.application.application_for ? findJob(store.application.application_for) : ''
            }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ store.application.email_address }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{
              store.application.salary_expectation
                ? currencyFormat(store.application.salary_expectation)
                : ''
            }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">About</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ store.application.about }}
          </dd>
        </div>
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Skills</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ store.application.skills ? arrayToString(store.application.skills) : '' }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { useApplicationStore } from '@/stores/application'

import { currencyFormat, arrayToString, findJob } from '@/func'

export default {
  props: ['id'],
  data: () => ({
    store: useApplicationStore()
  }),
  methods: {
    currencyFormat,
    arrayToString,
    findJob,
    async handleDelete() {
      const confirmation = confirm('Are you sure you want to delete this data?')
      if (confirmation) {
        await this.store.remove(this.id)
        this.$router.push({ name: 'applications' })
      }
    }
  },
  async created() {
    await this.store.findById(this.id)
  }
}
</script>
