<template>
  <form class="bg-white p-8 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" @submit.prevent="handleSubmit">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Job Application Submission Form
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Complete this form with your identity according to your personal data.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <BaseInput type="text" v-model="forms.first_name" label="firstName">First name</BaseInput>
          <span v-if="errors.first_name" class="text-red-500">{{ errors.first_name }}</span>
        </div>

        <div class="sm:col-span-3">
          <BaseInput type="text" v-model="forms.last_name" label="lastName">Last name</BaseInput>
          <span v-if="errors.last_name" class="text-red-500">{{ errors.last_name }}</span>
        </div>

        <div class="sm:col-span-4">
          <BaseInput type="email" v-model="forms.email_address" label="emailAddress">Email address</BaseInput>
          <span v-if="errors.email_address" class="text-red-500">{{ errors.email_address }}</span>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <BaseSelect v-model="forms.application_for" label="applicationFor" :options="jobs">Application for</BaseSelect>
          <span v-if="errors.application_for" class="text-red-500">{{ errors.application_for }}</span>
        </div>

        <div class="sm:col-span-2">
          <BaseSelect v-model="forms.gender" label="gender" :options="gender">Gender</BaseSelect>
          <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>
        </div>

        <div class="sm:col-span-2">
          <BaseInput type="number" v-model="forms.salary_expectation" label="salaryExpectation" addOn="Rp">Salary
            expectation</BaseInput>
          <span v-if="errors.salary_expectation" class="text-red-500">{{ errors.salary_expectation }}</span>
        </div>

        <div class="col-span-full">
          <BaseTextarea v-model="forms.about" label="about">About</BaseTextarea>
          <span v-if="errors.about" class="text-red-500">{{ errors.about }}</span>
        </div>

        <div class="col-span-full">
          <BaseCheckbox v-model="forms.skills" :options="skills"></BaseCheckbox>
          <span v-if="errors.skills" class="text-red-500">{{ errors.skills }}</span>
        </div>
      </div>
    </div>

    <div class="mt-6 flex justify-end">
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import resources from '@/resources.json'
import { useApplicationStore } from '@/stores/application'
import { reactive } from 'vue'

import BaseInput from './forms/BaseInput.vue'
import BaseSelect from './forms/BaseSelect.vue'
import BaseTextarea from './forms/BaseTextarea.vue'
import BaseCheckbox from './forms/BaseCheckbox.vue'

export default {
  components: {
    BaseInput,
    BaseSelect,
    BaseTextarea,
    BaseCheckbox
  },
  data() {
    return {
      store: useApplicationStore(),
      gender: [
        {
          title: 'Male',
          slug: 'male.1',
          value: 1
        },
        {
          title: 'Female',
          slug: 'male.2',
          value: 0
        }
      ],
      jobs: resources.jobs,
      skills: resources.skills,
      forms: {
        first_name: '',
        last_name: '',
        email_address: '',
        application_for: '',
        gender: null,
        salary_expectation: '',
        about: '',
        skills: []
      },
      errors: reactive({
        first_name: '',
        last_name: '',
        email_address: '',
        application_for: '',
        gender: '',
        salary_expectation: '',
        about: '',
        skills: ''
      })
    }
  },
  methods: {
    handleSubmit() {
      // Menghapus error sebelum validasi form
      this.errors = {
        first_name: '',
        last_name: '',
        email_address: '',
        application_for: '',
        gender: '',
        salary_expectation: '',
        about: '',
        skills: ''
      }

      // Validasi form
      if (!this.forms.first_name) {
        this.errors.first_name = 'First name is required'
      }
      if (!this.forms.last_name) {
        this.errors.last_name = 'Last name is required'
      }
      if (!this.forms.email_address) {
        this.errors.email_address = 'Email address is required'
      }
      if (!this.forms.application_for) {
        this.errors.application_for = 'Application for is required'
      }
      if (this.forms.gender === null) {
        this.errors.gender = 'Gender is required'
      }
      if (!this.forms.salary_expectation) {
        this.errors.salary_expectation = 'Salary expectation is required'
      }
      if (!this.forms.about) {
        this.errors.about = 'About is required'
      }
      if (this.forms.skills.length === 0) {
        this.errors.skills = 'Skills is required'
      }

      // Jika terdapat error, form tidak akan disubmit
      if (Object.values(this.errors).some(error => error !== '')) {
        return
      }

      // Formulir valid, lakukan aksi yang diinginkan (misalnya, menambahkan data ke store)
      this.store.add(this.forms)

      // Pindah ke halaman tabel setelah menambah data
      this.$router.push({ name: 'applications' })
    }
  }
}
</script>

