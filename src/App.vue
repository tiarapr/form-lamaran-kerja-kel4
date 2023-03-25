<script setup>
import { reactive } from "vue";
import { ref } from 'vue'

const notifData = ref([false, '', true])

function notification(message, notifStatus) {
  notifData.value[1] = message
  notifData.value[2] = notifStatus
  notifData.value[0] = true
  setTimeout(() => {
    notifData.value[0] =false
  }, 3000)
}

const allData = reactive([]);

const formInput = reactive({
  name: "",
  description: "",
  experience: "",
  email: "",
  telp: "",
  address: "",
  tgl_lahir: "",
  education: "",
  jk: "",
  posisiId: "",
  skills: [],
});

const dataForm = {
  educations: [
    { value: 1, text: "SMA / SMK" },
    { value: 2, text: "D3" },
    { value: 3, text: "D4 / S1" },
    { value: 4, text: "S2" },
  ],
  positions: [
    { value: 1, text: "Front End Developer" },
    { value: 2, text: "Back End Developer" },
    { value: 3, text: "Full Stack Developer" },
    { value: 4, text: "UI/UX Designer" },
  ],
  jk: [
    { text: "Laki - Laki", value: 1 },
    { text: "Perempuan", value: 2 },
  ],
  skills: [
    { value: 1, text: "HTML, CSS, JavaScript" },
    { value: 2, text: "Vue JS" },
    { value: 3, text: "React JS" },
    { value: 4, text: "PHP, MySQL" },
    { value: 5, text: "Laravel" },
    { value: 6, text: "Code Igniter" },
    { value: 7, text: "UI Design" },
    { value: 8, text: "UX Design" },
  ],
};

const errors = reactive({
  name: "",
  description: "",
  experience: "",
  email: "",
  telp: "",
  address: "",
  tgl_lahir: "",
  education: "",
  jk: "",
  posisi: "",
  skills: "",
});

const onSubmit = () => {
  let isValid = true;
  const newValues = {};
  for (let key in formInput) if (formInput[key] == "" || formInput[key] == []) isValid = false;
  if (isValid) {
    for (let key in formInput) newValues[key] = formInput[key];
    tambahData(newValues);
    for (let key in formInput) {
      if (key == "skills") formInput[key] = [];
      else formInput[key] = "";
    }
    for (let key in errors) {
      errors[key] = "";
    }
  } else {
    errors.name = "Bidang Nama wajib diisi!";
    errors.description = "Bidang Deskripsi wajib diisi!";
    errors.experience = "Bidang Pengalaman wajib diisi!";
    errors.email = "Bidang Email wajib diisi!";
    errors.telp = "Bidang Telepon wajib diisi!";
    errors.address = "Bidang Alamat wajib diisi!";
    errors.tgl_lahir = "Bidang Tanggal Lahir wajib diisi!";
    errors.education = "Bidang Pendidikan wajib diisi!";
    errors.jk = "Bidang Jenis Kelamin wajib diisi!";
    errors.posisi = "Bidang Posisi wajib diisi!";
    errors.skills = "Bidang Skill wajib diisi!";
    notification('Isi semua data terlebih dahulu!', false)
  }
};

const tambahData = (value) => {
  allData.push(value)
  notification('Data berhasil disimpan!', true)
};

const hapusData = (index) => {
  const konfirmasi = confirm("Apakah yakin ingin menghapus data ini?");
  if (konfirmasi) allData.splice(index, 1)
  notification('Data berhasil diihapus!', true)
};
</script>

<template>
  <div class="container">
    <notif-component :notifData="notifData" />
    <div class="row">
      <div class="col-md-6">
        <form-component v-model:form="formInput" :onSubmit="onSubmit" :dataForm="dataForm" :errors="errors" />
      </div>
      <div class="col-md-6">
        <table-data :allData="allData" :hapusData="hapusData" :dataForm="dataForm" />
      </div>
    </div>
  </div>
</template>
