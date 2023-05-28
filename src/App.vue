<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'
import axios from "axios";


import { useAuthStore } from '@/stores';
const authStore = useAuthStore();

const allData = ref([]);
const notifData = ref([false, '', true])
const isEdit = ref(false);
const dataForm = ref({});
const router = useRouter()

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
    isEdit.value = false;
    for (let key in formInput) {
        if (key === "skills") formInput[key] = [];
        else formInput[key] = "";
    }
    for (let key in errors) {
        errors[key] = "";
    }
}

function notification(message, notifStatus) {
    notifData.value[1] = message;
    notifData.value[2] = notifStatus;
    notifData.value[0] = true;
    setTimeout(() => {
        notifData.value[0] = false;
    }, 3000);
}

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
    for (let key in formInput) {
        if (formInput[key] === "" || formInput[key] === []) {
            if (key === 'id') {
                continue;
            }
            isValid = false;
        }
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
        notification('Isi semua data terlebih dahulu!', false);
    }
}

// load data form
const loadDataForm = async () => {
    try {
        const response = await axios.get('http://localhost:3000/dataForm');
        dataForm.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

// load data pelamar
const load = async () => {
    try {
        const response = await axios.get("http://localhost:3000/pelamar");
        allData.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

// Untuk tambah data
const tambahData = (value) => {
    axios.post('http://localhost:3000/pelamar', formInput).then(res => {
        load();
        clearFormInput();
        router.push({ name: "data" });
        notification('Data berhasil ditambah!', true);
    });
}

// untuk edit data
const editData = (data) => {
    isEdit.value = true;
    for (let key in formInput) {
        formInput[key] = data[key];
    }
    router.push({ name: "edit", params: { id: data.id } });
}

// untuk update data
const updateData = (data) => {
    const newValue = {};
    for (let key in formInput)
        newValue[key] = formInput[key];
    return axios.put(`http://localhost:3000/pelamar/${data.id}`, newValue).then(res => {
        load();
        clearFormInput();
        isEdit.value = false;
        router.push({ name: "detail", params: { id: newValue.id } })
        notification('Data berhasil diperbarui!', true);
    }).catch(err => {
        console.log(err);
    });
}

// untuk hapus data
const hapusData = (index) => {
    const konfirmasi = confirm("Apakah yakin ingin menghapus data ini?");
    if (konfirmasi) {
        axios.delete(`http://localhost:3000/pelamar/${index}`).then(res => {
            load();
            let index = allData.value.indexOf(formInput.id);
            allData.value.splice(index, 1);
            router.push({ name: "data" });
            notification('Data berhasil dihapus!', true);
        });
    }
}

onMounted(() => {
    loadDataForm();
    load();
})
</script>

<template>
    <div>
        <nav-component/>
    </div>
    <div class="container pt-4 pb-4">
        <RouterView v-model:form="formInput" :onSubmit="onSubmit" :dataForm="dataForm" :errors="errors" :isEdit="isEdit"
            :clearFormInput="clearFormInput" :allData="allData" :editData="editData" :hapusData="hapusData" />
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>