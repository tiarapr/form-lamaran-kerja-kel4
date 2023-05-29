import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useApplicationStore = defineStore('application', () => {
  const fakeApiUrl = 'http://localhost:3000/applications'
  const applications = ref([])
  const application = ref({})

  const fetch = async () => {
    await axios
      .get(fakeApiUrl)
      .then((res) => {
        applications.value = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const findById = async (id) => {
    application.value = {}
    await axios
      .get(fakeApiUrl + '/' + id)
      .then((res) => {
        application.value = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const add = async (forms) => {
    await axios.post(fakeApiUrl, forms).catch((error) => {
      console.log(error)
    })
    await fetch()
  }

  const update = async (id, forms) => {
    await axios.put(fakeApiUrl + '/' + id, forms).catch((error) => {
      console.log(error)
    })
    await findById(id)
  }

  const remove = async (id) => {
    await axios.delete(fakeApiUrl + '/' + id).catch((error) => {
      console.log(error)
    })
    await fetch()
  }

  return { applications, application, fetch, findById, add, update, remove }
})
