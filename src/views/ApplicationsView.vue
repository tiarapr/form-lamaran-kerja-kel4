<template>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Application for
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-if="!store.applications.length">
              <td colspan="4" class="text-center px-3 py-4 text-sm text-gray-500">
                Applications data not found.
              </td>
            </tr>
            <tr v-for="application in store.applications" :key="application.email">
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
              >
                {{ application.first_name + ' ' + application.last_name }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ application.application_for ? findJob(application.application_for) : '' }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ application.email_address }}
              </td>
              <td
                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
              >
                <button
                  @click="
                    $router.push({ name: 'application.detail', params: { id: application.id } })
                  "
                  class="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4"
                >
                  <ChevronRightIcon class="h-6 w-6 text-gray-500" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useApplicationStore } from '@/stores/application'

import { findJob } from '@/func'

export default {
  components: {
    ChevronRightIcon
  },
  data: () => ({
    store: useApplicationStore()
  }),
  methods: {
    findJob
  },
  async created() {
    await this.store.fetch()
  }
}
</script>
