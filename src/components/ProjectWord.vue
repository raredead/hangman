<script setup lang="ts">
interface Iprops {
    word: string,
    correctLetters: string[],
}

defineProps<Iprops>()
</script>

<template>
    <div class="main-container__word word-container">
        <span
        v-for="(letter, idx) in word" 
        :key="idx" 
        class="word-container__letter"
        >{{ correctLetters.includes(letter) ? letter : '' }}</span>
    </div>
</template>