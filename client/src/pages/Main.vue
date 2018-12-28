<template>
<div>
    <navbar />
    <div class="container">
        <tiles />
    </div>
</div>
</template>

<script>
import Navbar from "./../components/Navbar"
import Tiles from "./../components/Tiles"
export default {
    name: "Main",
    components: {
        navbar: Navbar,
        tiles: Tiles,
    }
}
</script>