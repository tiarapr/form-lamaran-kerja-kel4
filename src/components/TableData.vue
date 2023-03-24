<script setup>
const props = defineProps({
  allData: Array,
  hapusData: Function,
  dataForm: Object,
});

const educations = props.dataForm.educations;
const positions = props.dataForm.positions;
const skills = props.dataForm.skills;
</script>

<template>
  <div class="table-data">
    <h3 class="border-bottom mb-8">Data Pelamar</h3>
    <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Nama</th>
          <th scope="col">Deskripsi</th>
          <th scope="col">Pengalaman Kerja</th>
          <th scope="col">Pendidikan</th>
          <th scope="col">Email</th>
          <th scope="col">No. Telp</th>
          <th scope="col">Alamat</th>
          <th scope="col">Tanggal Lahir</th>
          <th scope="col">Jenis Kelamin</th>
          <th scope="col">Posisi</th>
          <th scope="col">Skills</th>
          <th scope="col">Opsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!allData.length">
          <td colspan="13">Belum memiliki Data</td>
        </tr>
        <tr v-for="(item, index) in allData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.experience }}</td>
          <td>{{ item.education ? educations[item.education - 1].text : "" }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.telp }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.tgl_lahir }}</td>
          <td>{{ item.jk }}</td>
          <td>{{ item.posisiId ? positions[item.posisiId - 1].text : "" }}</td>
          <td>
            <ul class="pl-0" style="list-style-type: none">
              <li v-for="skill in item.skills">{{ skill ? skills[skill - 1].text : "" }}</li>
            </ul>
          </td>
          <td>
            <span @click="hapusData(index)" style="cursor: pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
