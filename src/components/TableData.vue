<script setup>
const props = defineProps({
  allData: Array,
  dataForm: Object,
  editData: Function,
  hapusData: Function
});
</script>

<template>
  <div class="table-data">
    <div class="mb-4 border-bottom d-flex justify-content-between">
      <h3>Data Pelamar</h3>
      <router-link :to="{name: 'create-data'}" class="d-flex align-items-center text-decoration-none">Tambah Data</router-link>
    </div>
    <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Jenis Kelamin</th>
          <th scope="col">Posisi</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!allData.length">
          <td colspan="13">Belum memiliki Data</td>
        </tr>
        <tr v-for="(item, index) in allData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.jk ? dataForm.jk[item.jk - 1].text : "" }}</td>
          <td>{{ item.posisiId ? dataForm.positions[item.posisiId - 1].text : "" }}</td>
          <td>
            <router-link :to="{name: 'detail', params: {id: item.id} }">Detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>