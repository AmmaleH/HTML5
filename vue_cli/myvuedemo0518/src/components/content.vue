<template>
    <div>
        <input :text = "title">
        <button>点击</button>
    </div>
</template>

<script>
    export default {
        name: "myContent",
        data: function() {
            return {
                title: "vue项目(输入内容)",
            }
        }
    };
</script>

<style></style>