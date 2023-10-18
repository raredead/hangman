<script setup lang="ts">
import ProjectHeader from './components/ProjectHeader.vue';
import ProjectFigure from './components/ProjectFigure.vue';
import ProjectWrong from './components/ProjectWrong.vue';
import ProjectWord from './components/ProjectWord.vue';
import ProjectModal from './components/ProjectModal.vue';
import ProjectNotification from './components/ProjectNotification.vue';

import { computed, ref } from 'vue';

const word = ref('василий')
const letters = ref<string[]>([])
const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)))
const wrongLetters = computed(() => letters.value.filter(x => !word.value.includes(x)))
const notification = ref<InstanceType<typeof ProjectNotification> | null>(null)

window.addEventListener('keydown', ({ key }) => {
    if (letters.value.includes(key)) {
        notification.value?.openModal()
        setTimeout(() => notification.value?.closeModal(), 2000)
        return
    }
    if (/[а-яА-ЯёЁ]/.test(key)) {
        letters.value.push(key.toLowerCase())
    }
})
</script>

<template>
    <ProjectHeader />
    <div class="main-container">
        <ProjectFigure />

        <ProjectWrong 
        :wrong-letters="wrongLetters"/>

        <ProjectWord 
        :word="word" 
        :correct-letters="correctLetters"/>
    </div>

    <ProjectModal v-if="false" />

    <ProjectNotification ref="notification"/>
</template>