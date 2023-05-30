<template>
  <Disclosure as="nav" class="bg-white shadow-sm" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="hidden sm:flex sm:space-x-8">
          <RouterLink
            :to="{ name: 'form' }"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >Form</RouterLink
          >
          <RouterLink
            v-if="auth.user.value"
            :to="{ name: 'applications' }"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >Applications</RouterLink
          >
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center gap-x-4" v-if="auth.user.value">
          <button
            @click="handleLogout"
            class="text-gray-600 hover:text-gray-800 block text-sm font-medium"
          >
            Logout
          </button>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center gap-x-4" v-else>
          <RouterLink
            :to="{ name: 'auth.login' }"
            class="text-gray-600 hover:text-gray-800 block text-sm font-medium"
          >
            Login
          </RouterLink>
          <RouterLink
            :to="{ name: 'auth.register' }"
            class="text-gray-600 hover:text-gray-800 block text-sm font-medium"
          >
            Register
          </RouterLink>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pt-2 pb-3">
        <RouterLink
          :to="{ name: 'form' }"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Form</RouterLink
        >
        <RouterLink
          v-if="auth.user.value"
          :to="{ name: 'applications' }"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Applications</RouterLink
        >
      </div>
      <div class="border-t border-gray-200 pt-2 pl-4 pb-3" v-if="auth.user.value">
        <button
          @click="handleLogout"
          class="text-gray-600 hover:text-gray-800 block py-2 text-base font-medium"
        >
          Logout
        </button>
      </div>
      <div class="border-t border-gray-200 pt-2 pl-4 pb-3" v-else>
        <button
          @click="$router.push({ name: 'auth.login' })"
          class="text-gray-600 hover:text-gray-800 block py-2 text-base font-medium"
        >
          Login
        </button>
        <button
          @click="$router.push({ name: 'auth.register' })"
          class="text-gray-600 hover:text-gray-800 block py-2 text-base font-medium"
        >
          Register
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useAuthenticationStore } from '@/stores/authentication'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Bars3Icon,
    XMarkIcon,
    RouterLink
  },
  data: () => ({
    auth: useAuthenticationStore(),
    navigation: [
      { name: 'Form', to: { name: 'form' } },
      { name: 'Applications', to: { name: 'applications' } }
    ]
  }),
  methods: {
    handleLogout() {
      const confirmation = confirm('Are you sure you want to log out?')
      if (confirmation) {
        this.auth.logout()
        this.$router.push({ name: 'auth.login' })
      }
    }
  }
}
</script>
