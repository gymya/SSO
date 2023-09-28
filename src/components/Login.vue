<script setup lang="ts">
import router from '../router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { CallbackTypes } from "vue3-google-login";

const route = useRoute()

const pageName = computed(()=>{
    return route.name
})




// using GoogleLogin component => Use CredentialCallback
const callback: CallbackTypes.CredentialCallback = (response) => {
    console.log("Credential JWT string", response.credential);
    alert('登入成功')
    localStorage.setItem('credential',response.credential);
    document.cookie = `credential=${response.credential}`
    router.push('/');
};


//using custom button slot and popup-type prop is set to TOKEN => use TokenResponseCallback
// const callback: CallbackTypes.TokenResponseCallback = (response) => {
//     console.log("Access token", response);
// };


//using custom button slot => Use CodeResponseCallback
// const callback: CallbackTypes.CodeResponseCallback = (response) => {
//     console.log("Authorisation code", response.code);
// };


</script>

<template>
    <h1>{{ pageName }}</h1>

    <GoogleLogin :callback="callback" />

    <!-- <GoogleLogin :callback="callback" popup-type="TOKEN">
        <button>Google SSO Login</button>
    </GoogleLogin> -->
</template>

<style scoped>

</style>
