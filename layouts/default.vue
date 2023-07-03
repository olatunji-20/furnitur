<template>
    <div>
        <div class="navbar border-4 border-green-800 p-5">
            <p>Kanipe this is the navbar.</p>
        </div>
        <div>
            <slot />
        </div>
        <div class="footer p-16">
            <h1>KANIPE THIS IS THE FOOTER</h1>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.navbar {
    width: 100%;
    height: 80px;
    /* border: 2px solid red; */
    background: powderblue;
}
.footer {
    width: 100%;
    height: 500px;
    border: 2px solid red;
    background: lemonchiffon;
}

</style>