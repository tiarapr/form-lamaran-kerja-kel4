import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useApplicationStore = defineStore('application', () => {
  const applications = ref([])
  const application = ref({})

  const fetch = async () => {
    await axios
      .get('http://localhost:3000/applications')
      .then((res) => {
        applications.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const findById = async (id) => {
    application.value = {}
    await axios
      .get('http://localhost:3000/applications/' + id)
      .then((res) => {
        application.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const add = async (forms) => {
    await axios.post('http://localhost:3000/applications', forms).catch((err) => {
      console.log(err)
    })
    await fetch()
  }

  return { applications, application, fetch, findById, add }
})
