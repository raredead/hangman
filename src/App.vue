<template>
    <h1>Виселица</h1>
    <p>Введите букву, чтобы отгадать имя</p>
    <div class="main-container">
        <svg height="250" width="200" class="main-container__figure">
            <!-- Rod -->
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            <!-- Head -->
            <circle cx="140" cy="70" r="20" />
            <!-- Body -->
            <line x1="140" y1="90" x2="140" y2="150" />
            <!-- Arms -->
            <!-- <line x1="140" y1="120" x2="120" y2="100" />
          <line x1="140" y1="120" x2="160" y2="100" /> -->
            <!-- Legs -->
            <!-- <line x1="140" y1="150" x2="120" y2="180" />
          <line x1="140" y1="150" x2="160" y2="180" /> -->
        </svg>

        <div class="main-container__wrong wrong-container">
            <div class="wrong-container__letters">
                <p>Ошибки</p>
                <span>п , </span>
                <span>м , </span>
                <span>с </span>
            </div>
        </div>

        <div class="main-container__word word-container">
            <span class="word-container__letter">л</span>
            <span class="word-container__letter"></span>
            <span class="word-container__letter">д</span>
            <span class="word-container__letter"></span>
            <span class="word-container__letter"></span>
        </div>
    </div>

    <!-- Container for final message -->
    <div v-if="false" class="main-container__modal modal-container">
        <div class="modal-container__popup">
                <h2>Поздравляю, вы победили!</h2>
                <!-- <h2>Вы проиграли.</h2> -->
            <!-- <h3>...имя: Лидия</h3> -->
            <button class="modal-container__btn">Попробовать еще раз</button>
        </div>
    </div>

    <!-- Notification -->
    <div class="main-container__notification show">
        <p>Вы уже вводили этот символ</p>
    </div>
</template>