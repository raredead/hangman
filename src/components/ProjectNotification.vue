<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false)

const openModal = () => {
    isVisible.value = true
}

const closeModal = () => {
    isVisible.value = false
}

defineExpose({
    openModal,
    closeModal
})
</script>

<template>
    <div class="main-container__notification" :class="{ show: isVisible }">
        <p>Вы уже вводили этот символ</p>
    </div>
</template>