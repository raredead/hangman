<script setup lang="ts">
interface Iprops {
    wrongLetters: string[]
}

defineProps<Iprops>()
</script>

<template>
    <div v-if="wrongLetters.length" class="main-container__wrong wrong-container">
        <div class="wrong-container__letters">
            <p>Ошибки</p>
            <span 
            v-for="(letter, idx) in wrongLetters"
            :key="letter"
            >{{ idx === wrongLetters.length - 1 ? letter : `${letter}, ` }}</span>
        </div>
    </div>
</template>