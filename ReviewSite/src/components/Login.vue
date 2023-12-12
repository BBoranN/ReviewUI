
<template>
    <div id="login">
        <p> Welcome to Movie Review</p>
        <input type="text" id="username" v-model="username"  placeholder="Username" required/>
        <input type="password" id="password" v-model="password"  placeholder="Password" required/>
        <button>Login</button>
    </div>
</template>

<script setup lang="ts">

import {ref, onMounted} from 'vue';

const username= ref("");
const password =ref("");
function login(){

}

</script>

<style scoped>

#login{
    display:grid;
    grid-template-rows: 2fr 1fr 1fr 2fr ;
}

p{
    color: azure;
    font-size: 20px;
}

</style>
