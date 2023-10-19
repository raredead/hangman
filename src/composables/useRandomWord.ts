import { getRandomName } from '@/api/getRandomName'

import { onMounted, ref } from 'vue'

export const useRandomWord = () => {
    const word = ref('')
    const getRandom = async () => {
        try {
            const name = await getRandomName()
            word.value = name.toLowerCase()
        }
        catch (err) {
            console.log(err)
            word.value = ''
        }
    }
    onMounted(() => {
        getRandom()
    })

    return {
        word,
        getRandom
    }
}