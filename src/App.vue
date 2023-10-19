<script setup lang="ts">
import ProjectHeader from './components/ProjectHeader.vue';
import ProjectFigure from './components/ProjectFigure.vue';
import ProjectWrong from './components/ProjectWrong.vue';
import ProjectWord from './components/ProjectWord.vue';
import ProjectModal from './components/ProjectModal.vue';
import ProjectNotification from './components/ProjectNotification.vue';
import { computed, ref, watch } from 'vue';
import { useRandomWord } from './composables/useRandomWord'
import { useLetters } from './composables/useLetters';

const { word, getRandom } = useRandomWord()
const { letters, correctLetters, wrongLetters } = useLetters(word)

const isStatusLose = computed(() => wrongLetters.value.length === 6)
const isStatusWin = computed(() => [...word.value].every(x => correctLetters.value.includes(x)))
const notification = ref<InstanceType<typeof ProjectNotification> | null>(null)
const modal = ref<InstanceType<typeof ProjectModal> | null>(null)

watch(wrongLetters, () => {
    if (isStatusLose.value) {
        modal.value?.openModal('lose')
    }
})

watch(correctLetters, () => {
    if (isStatusWin.value) {
        modal.value?.openModal('win')
    }
})

window.addEventListener('keydown', ({ key }) => {
    if (isStatusLose.value || isStatusWin.value) {
        return
    }

    if (letters.value.includes(key)) {
        notification.value?.openNotify()
        setTimeout(() => notification.value?.closeNotify(), 2000)
        return
    }

    if (/[а-яА-ЯёЁ]/.test(key)) {
        letters.value.push(key.toLowerCase())
    }
})

const restart = async () => {
    await getRandom()
    letters.value = []
    modal.value?.closeModal()
}
</script>

<template>
    <ProjectHeader />
    <div class="main-container">
        <ProjectFigure 
        :wrong-letters-count="wrongLetters.length" />

        <ProjectWrong 
        :wrong-letters="wrongLetters" />

        <ProjectWord 
        :word="word" 
        :correct-letters="correctLetters" />
    </div>

    <ProjectModal 
    ref="modal" 
    :word="word" 
    @restart="restart" />

    <ProjectNotification ref="notification" />
</template>