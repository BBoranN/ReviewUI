<script setup lang="ts">
import Login from "./Login.vue";

</script>

<template>
    <div class="Landing">
        <img src="../../images/Ekran görüntüsü 2023-12-12 182644.png">
        <div id="login-div">
            <div></div>
            <Login></Login>
        </div>
    </div>
</template>


<style scoped>

.Landing{
    display:grid;
    grid-template-columns: 60% 40%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#login-div{
    display:grid;
    grid-template-rows: 20% 60% 20%;
}

</style>
