<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false)

const openNotify = () => {
    isVisible.value = true
}

const closeNotify = () => {
    isVisible.value = false
}

defineExpose({
    openNotify,
    closeNotify
})
</script>

<template>
    <div class="main-container__notification" :class="{ show: isVisible }">
        <p>Вы уже вводили этот символ</p>
    </div>
</template>