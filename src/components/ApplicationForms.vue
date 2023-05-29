<template>
  <form
    class="bg-white p-8 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
    @submit.prevent="handleSubmit"
  >
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Job Application Submission Form
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Complete this form with your identity according to your personal data.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <BaseInput
            type="text"
            v-model="forms.first_name"
            label="firstName"
            :error="errors.first_name"
            >First name</BaseInput
          >
        </div>

        <div class="sm:col-span-3">
          <BaseInput
            type="text"
            v-model="forms.last_name"
            label="lastName"
            :error="errors.last_name"
            >Last name</BaseInput
          >
        </div>

        <div class="sm:col-span-4">
          <BaseInput
            type="email"
            v-model="forms.email_address"
            label="emailAddress"
            :error="errors.email_address"
            >Email address</BaseInput
          >
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <BaseSelect
            v-model="forms.application_for"
            label="applicationFor"
            :options="jobs"
            :error="errors.application_for"
            >Application for</BaseSelect
          >
        </div>

        <div class="sm:col-span-2">
          <BaseSelect v-model="forms.gender" label="gender" :options="gender" :error="errors.gender"
            >Gender</BaseSelect
          >
        </div>

        <div class="sm:col-span-2">
          <BaseInput
            type="number"
            v-model="forms.salary_expectation"
            label="salaryExpectation"
            addOn="Rp"
            :error="errors.salary_expectation"
            >Salary expectation</BaseInput
          >
        </div>

        <div class="col-span-full">
          <BaseTextarea v-model="forms.about" label="about" :error="errors.about"
            >About</BaseTextarea
          >
        </div>

        <div class="col-span-full">
          <BaseCheckbox
            v-model="forms.skills"
            :options="skills"
            :error="errors.skills"
          ></BaseCheckbox>
        </div>
      </div>
    </div>

    <div class="mt-6 flex justify-end">
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import resources from '@/resources.json'
import { useApplicationStore } from '@/stores/application'

import BaseInput from './forms/BaseInput.vue'
import BaseSelect from './forms/BaseSelect.vue'
import BaseTextarea from './forms/BaseTextarea.vue'
import BaseCheckbox from './forms/BaseCheckbox.vue'

export default {
  props: ['id'],
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
        gender: '',
        salary_expectation: '',
        about: '',
        skills: []
      },
      errors: {
        first_name: '',
        last_name: '',
        email_address: '',
        application_for: '',
        gender: '',
        salary_expectation: '',
        about: '',
        skills: ''
      }
    }
  },
  methods: {
    clearForms() {
      this.forms = {
        first_name: '',
        last_name: '',
        email_address: '',
        application_for: '',
        gender: '',
        salary_expectation: '',
        about: '',
        skills: []
      }
    },
    validation() {
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

      if (!this.forms.first_name) this.errors.first_name = 'First name is required'
      if (!this.forms.last_name) this.errors.last_name = 'Last name is required'
      if (!this.forms.email_address) this.errors.email_address = 'Email address is required'
      if (!this.forms.application_for) this.errors.application_for = 'Application for is required'
      if (!this.forms.gender) this.errors.gender = 'Gender is required'
      if (!this.forms.salary_expectation)
        this.errors.salary_expectation = 'Salary expectation is required'
      if (!this.forms.about) this.errors.about = 'About is required'
      if (!this.forms.skills.length) this.errors.skills = 'Skills is required'
    },
    async handleSubmit() {
      this.validation()
      let isValid = true
      for (const key in this.errors) if (this.errors[key]) isValid = false
      if (isValid) {
        if (this.$route.name === 'application.edit') {
          await this.store.update(this.id, this.forms)
          this.$router.push({ name: 'application.detail', params: { id: this.id } })
        } else {
          await this.store.add(this.forms)
          this.$router.push({ name: 'thank' })
        }
        this.clearForms()
      }
    }
  },
  async created() {
    if (this.$route.name === 'application.edit') {
      await this.store.findById(this.id)
      for (const key in this.forms) {
        this.forms[key] = this.store.application[key]
      }
    }
  }
}
</script>
