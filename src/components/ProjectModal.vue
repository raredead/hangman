<script setup lang="ts">
import { ref } from 'vue';
import type { GameStatus } from '@/types/GameStatus';

interface Iprops {
    word: string
}

defineProps<Iprops>()

const gameStatus = ref<GameStatus | null>(null)
const isVisible = ref(false)

const openModal = (status: GameStatus) => {
    gameStatus.value = status
    isVisible.value = true
}
const closeModal = () => {
    isVisible.value = false
}

defineExpose({
    openModal,
    closeModal
})

const emit = defineEmits<{
    (e: 'restart'): void
}>()
</script>

<template>
    <div v-show="isVisible" class="main-container__modal modal-container">
        <div class="modal-container__popup">
            <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили!</h2>
            <template v-else>
                <h2>Вы проиграли.</h2>
                <h3>...имя: {{ word }}</h3>
            </template>
            <button class="modal-container__btn" @click="emit('restart')">Попробовать еще раз</button>
        </div>
    </div>
</template>