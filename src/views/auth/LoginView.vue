<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
    <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <BaseInput v-model="forms.email" label="email" type="email" required>Email</BaseInput>

        <BaseInput v-model="forms.password" label="password" type="password" required
          >Password</BaseInput
        >

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Or
        {{ ' ' }}
        <RouterLink
          :to="{ name: 'auth.register' }"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Sign up for an account</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { useAuthenticationStore } from '@/stores/authentication'

import BaseInput from '@/components/forms/auth/BaseInput.vue'

export default {
  components: {
    RouterLink,
    BaseInput
  },
  data: () => ({
    store: useAuthenticationStore(),
    forms: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async handleLogin() {
      try {
        await this.store.login(this.forms)
        this.$router.push({ name: 'applications' })
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>
