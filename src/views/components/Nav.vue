<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-light bg-light">
        <div class="navbar-nav">
            <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
            <RouterLink to="/create" class="nav-item nav-link">Form</RouterLink>
        </div>
        <div class="navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <p class="nav-item nav-link">Hi {{ authUser?.firstName }}!</p>
                <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
            </div>
        </div>
    </nav>
</template>
