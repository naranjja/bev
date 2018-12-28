<template>
<div class="container">
    <tiles />
</div>
</template>

<script>
import Tiles from "./../components/Tiles"
export default {
    name: "Main",
    components: {
        tiles: Tiles,
    }
}
</script>