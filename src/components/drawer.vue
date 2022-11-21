<script>
export default {
    methods: {
        closeNav() {
            let sidenav = document.getElementById('sidenav');
            sidenav.style.transform = "translateX(-200px)";
        }
    }
}

</script>
<template>
    <nav class="app-Drawer">
        <div class="drawer-container" id="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
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