<script setup>
import { onMounted, onUpdated, ref } from 'vue'

const props = defineProps({
  id: String,
  allData: Array,
  dataForm: Object,
  editData: Function,
  hapusData: Function,
});

const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const user = ref({})
const date = ref("")

const load = () => {
  if (props.allData.length)
    user.value = props.allData.find(e => e.id == props.id)
}

onMounted(() => {
  load()
})

onUpdated(() => {
  load()
})
</script>

<template>
  <div class="col-12 form-card">
    <h2 class="border-bottom mb-3 pb-4">Detail - {{ user.name }}</h2>
    <div class="row">
      <div class="col">
        <div>
          <table>
            <tr>
              <td class="font-weight-bold">Nama:</td>
              <td class="font-weight-normal pl-3" v-text="user.name"></td>
            </tr>
            <tr>
              <td class="font-weight-bold">Deskripsi:</td>
              <td class="font-weight-normal pl-3" v-text="user.description"></td>
            </tr>
            <tr>
              <td class="font-weight-bold">Telepon:</td>
              <td class="font-weight-normal pl-3" v-text="user.telp"></td>
            </tr>
            <tr>
              <td class="font-weight-bold">Tanggal lahir:</td>
              <td class="font-weight-normal pl-3" v-text="new Date(user.tgl_lahir).toLocaleDateString('id-ID', dateFormat)"></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col">
        <table>
          <tr>
            <td class="font-weight-bold">Email:</td>
            <td class="font-weight-normal pl-3" v-text="user.email"></td>
          </tr>
          <tr>
            <td class="font-weight-bold">Pengalaman:</td>
            <td class="font-weight-normal pl-3" v-text="user.experience"></td>
          </tr>
          <tr>
            <td class="font-weight-bold">Alamat:</td>
            <td class="font-weight-normal pl-3" v-text="user.address"></td>
          </tr>
          <tr>
            <td class="font-weight-bold">Jenis kelamin:</td>
            <td class="font-weight-normal pl-3" v-text="user.jk ? dataForm.jk[user.jk - 1].text : ''"></td>
          </tr>
          <tr>
            <td class="font-weight-bold">Posisi:</td>
            <td class="font-weight-normal pl-3" v-text="user.posisiId ? dataForm.positions[user.posisiId - 1].text : ''"></td>
          </tr>
        </table>
      </div>
      <div class="col">
        <table>
          <tr>
            <td class="font-weight-bold">Pendidikan:</td>
            <td class="font-weight-normal pl-3" v-text="user.education ? dataForm.educations[user.education - 1].text : ''"></td>
          </tr>
          <tr class="position-relative">
            <td class="font-weight-bold">Skill:</td>
            <td>
              <ul class="skills">
                <li v-for="skill in user.skills" v-text="skill ? dataForm.skills[skill - 1].text : ''"></li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="buttons border-top pt-4 d-flex justify-content-end">
      <router-link :to="{name: 'data'}" class="btn btn-secondary">Kembali</router-link>
      <button type="submit" class="btn btn-primary" @click="editData(user)">Edit</button>
      <button type="submit" class="btn btn-danger" @click="hapusData(user.id)">Hapus</button>
    </div>
  </div>
</template>

<style scoped>
td {
  padding-bottom: 0.7em;
}
.skills {
  position: relative;
  top: 0;
  padding: 0 1em;
  list-style-type: none;
}
</style>