<template>
    <div>
        <div class="navbar">
            <p>Kanipe this is the navbar.</p>
        </div>
        <div>
            <slot />
        </div>
        <div class="footer">
            <h1></h1>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.navbar {
    width: 100%;
    height: 80px;
    border: 2px solid red;
    background: powderblue;
}
.footer {
    width: 100%;
    height: 500px;
    border: 2px solid red;
    background: lemonchiffon;
}

</style>