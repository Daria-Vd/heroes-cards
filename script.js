let heroes = [
    ["Axe", "Tank"],
    ["Crystal Maiden", "Support"],
    ["Crystal", "Supp"]
];

const heroesContainer = document.getElementById("heroesContainer");

function displayHeroes() {
    // Очищаем текущее содержимое
    heroesContainer.innerHTML = "";

    // С помощью цикла for of проходимся по массиву массивов героев
    // с помощью метода деструктуризации массивов получаем переменные hero и classes
    for (let [hero, classes] of heroes) {
        // Создаём элемент, в который будем добавлять информацию о герое
        let heroDiv = document.createElement("div");
        // добавляем класс для возможности стилизации эдемента
        heroDiv.classList.add("card");

        // Записываем в созданный элемент разметку, подставляя необходимые данные
        heroDiv.innerHTML = `<h3>${hero}</h3><p>${classes}</p>`;

        // Добавляем карточку героя в контейнер
        heroesContainer.appendChild(heroDiv);
    }
}

// если в начале работы приложения массив heroes имеет данные, то выводим их на экран
heroes.length > 0 && displayHeroes();

function addHero() {
    /* Ищем поля ввода */
    const nameInput = document.getElementById("heroName");
    const classInput = document.getElementById("heroClass");
    const newHeroName = nameInput.value;
    const newHeroClass = classInput.value;

    /* Кидаем новые данные из инпутов в массивы с именами и классами */

    heroes = [...heroes, [newHeroName, newHeroClass]];
    /*
        Используем функцию, которую мы подготовили в прошлом уроке,
        чтобы обновить список героев на странице
    */

    // Вызываем написанную функцию
    displayHeroes();

    /*
        Очищаем поля ввода – чтобы пользователю было удобнее
        сразу иметь возможность вводить данные нового персонажа
    */
    nameInput.value = "";
    classInput.value = "";
}

document.getElementById("addButton").addEventListener("click", addHero);
