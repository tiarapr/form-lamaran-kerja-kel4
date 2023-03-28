<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const notifData = ref([false, '', true])

function notification(message, notifStatus) {
  notifData.value[1] = message
  notifData.value[2] = notifStatus
  notifData.value[0] = true
  setTimeout(() => {
    notifData.value[0] =false
  }, 3000)
}

const allData = ref([]);

const isEdit = ref(false);

const formInput = reactive({
  id: "",
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

const clearFormInput = () => {
  for (let key in formInput) {
    if (key == "skills") formInput[key] = [];
    else formInput[key] = "";
  }
  for (let key in errors) {
    errors[key] = "";
  }
}

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
  for (let key in formInput)
    if (formInput[key] == "" || formInput[key] == []) {
      if (key == 'id')
        continue;
      isValid = false;
    }
  if (isValid) {
    isEdit.value ? updateData(formInput) : tambahData();
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

const load = (value) => {
  axios.get("http://localhost:3000/users").then(res => {
    allData.value = res.data;
  }).catch(err => {
    console.log(err);
  })
}

const tambahData = (value) => {
  axios.post('http://localhost:3000/users', formInput).then(res => {
    load();
    clearFormInput();
    notification('Data berhasil ditambah!', true);
  });
}

const editData = (data) => {
  isEdit.value = true;
  for (let key in formInput) {
    formInput[key] = data[key];
  }
}

const updateData = (data) => {
  const newValue = {};
  for (let key in formInput)
    newValue[key] = formInput[key];
  return axios.put(`http://localhost:3000/users/${data.id}`, newValue).then(res => {
    load();
    clearFormInput();
    isEdit.value = false;
    notification('Data berhasil diperbarui!', true);
  }).catch(err => {
    console.log(err);
  });
}

const hapusData = (index) => {
  const konfirmasi = confirm("Apakah yakin ingin menghapus data ini?");
  if (konfirmasi) {
    axios.delete(`http://localhost:3000/users/${index}`).then(res => {
      load();
      let index = allData.value.indexOf(formInput.id);
      allData.value.splice(index, 1);
      notification('Data berhasil dihapus!', true);
    });
  }
}

onMounted(load)
</script>

<template>
  <div class="container">
    <notif-component :notifData="notifData" />
    <div class="row">
      <div class="col-md-6">
        <form-component v-model:form="formInput" :onSubmit="onSubmit" :dataForm="dataForm" :errors="errors" :isEdit="isEdit" />
      </div>
      <div class="col-md-6">
        <table-data :allData="allData" :dataForm="dataForm" :editData="editData" :hapusData="hapusData" />
      </div>
    </div>
  </div>
</template>
