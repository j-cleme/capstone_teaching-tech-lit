<script setup>
import { Menu } from 'lucide-vue-next';
</script>

<script>
export default {
    data() {
        return { navOpen: false }
    },
    methods: {
        toggleNav() {
            let sidenav = document.getElementById('sidenav');
            if (this.$data.navOpen === true) {
                sidenav.style.transform = "translateX(-200px)";
                this.$data.navOpen = false;
            }
            if (this.$data.navOpen === false) {
                sidenav.style.transform = "translateX(0px)";
                this.$data.navOpen = true;
            }
        },
    }
}
</script>

<template>
    <Menu @click="toggleNav()" color="orange" cursor="pointer" />
    <nav class="columns-1 flex justify-start my-4">
        <div class="drawer-container" id="sidenav">
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
        </div>
    </nav>
</template>

<style scoped>
.drawer-container {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    position: fixed;
    background-color: #111;
    width: 200px;
    transform: translateX(-200px);
    transition: 0.5s;
}

.drawer-container a {
    text-decoration: none;
    display: block;
    padding: 15px;
    color: white;
}

.drawer-container a:hover {
    background-color: #F76902;
}
</style>