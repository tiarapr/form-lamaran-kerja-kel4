<script setup>
import TableData from './TableData.vue'
</script>

<template>
    <div class="container">
        <div class="row">
            <div>
                <form class="lamaran-form" action="#">
                    <h1 class="border-bottom mb-8">Form Lamaran Kerja</h1>
                    <base-input type="text" v-model="form.name" label="Nama"></base-input>
                    <div class="form-group">
                        <label>Deskripsi Diri</label>
                        <textarea class="form-control" rows="5" :value="form.description"
                            @input="form.description = $event.target.value"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Pengalaman Kerja</label>
                        <textarea class="form-control" rows="5" :value="form.experience"
                            @input="form.experience = $event.target.value"></textarea>
                    </div>
                    <base-select label="Pendidikan" v-model="form.education" :options="educations"
                        placeholder="Pilih Pendidikan Terakhir">
                    </base-select>
                    <base-input type="email" v-model="form.email" label="Email"></base-input>
                    <base-input type="text" v-model="form.telp" label="No. Telp"></base-input>
                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea class="form-control" rows="5" :value="form.address"
                            @input="form.address = $event.target.value"></textarea>
                    </div>
                    <base-input type="date" v-model="form.tgl_lahir" label="Tanggal Lahir"></base-input>
                    <div class="base-group">
                        <base-radio-group label="Jenis Kelamin" name="jenisKelamin" :options="jk" v-model="form.jk">
                        </base-radio-group>
                    </div>
                    <base-select label="Pilih Posisi" v-model="form.posisiId" :options="positions"
                        placeholder="Select a position">
                    </base-select>
                    <base-checkbox-group label="Skills" v-model="form.skills" :options="skills" inline>
                    </base-checkbox-group>
                    <hr />
                    <div class="form-group">
                        <button class="btn btn-lg btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
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
            },
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
    },
};
</script>