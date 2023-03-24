<script setup>
import { reactive } from "vue";

const allData = reactive([
  // {
  //   name: "Tiara",
  //   description: "Hello, I'm Tiara!",
  //   experience: "Bekerja di PT selama 2 tahun",
  //   email: "contact.tiarapr@gmail.com",
  //   telp: "085606114068",
  //   address: "Jalan - jalan",
  //   tgl_lahir: "",
  //   education: 1,
  //   jk: "Perempuan",
  //   posisiId: 1,
  //   skills: [1, 4, 5, 7],
  // },
]);
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
  }
};
const tambahData = (value) => {
  allData.push(value);
};
const hapusData = (index) => {
  const konfirmasi = confirm("Apakah yakin ingin menghapus data ini?");
  if (konfirmasi) allData.splice(index, 1);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form-component v-model:form="formInput" :onSubmit="onSubmit" :dataForm="dataForm" />
      </div>
      <div class="col-md-6">
        <table-data :allData="allData" :hapusData="hapusData" :dataForm="dataForm" />
      </div>
    </div>
  </div>
</template>
