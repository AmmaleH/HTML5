<template>
    <div>
        <div class="last">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "myBottom",
        data: function() {
            return {
                title: "vue项目的底部",
            }
        }
    };
</script>

<style>
    .last {
        color: blue;
    }
</style>