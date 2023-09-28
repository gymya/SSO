<script setup lang="ts">
import router from '../router'


const logout = ()=>{
    localStorage.removeItem('credential');
    router.push('/login');
}
</script>

<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <button @click="logout">Logout</button>
    </div>
    
</template>

<style scoped>
    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>