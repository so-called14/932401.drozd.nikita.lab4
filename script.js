const userName = prompt('Как вас зовут?');

if (userName) {
    alert(`Здравствуйте, ${userName}! Давайте проанализируем вашу продуктивность.`);
}
else {
    alert('Здравствуйте! Давайте проанализируем вашу продуктивность.');
}

console.log(`Пользователь: ${userName || 'Анонимный фотограф'}`);

const photosPerDay = [100, 30, 50, 70, 20, 300, 350];

console.log('Количество фото по дням:', photosPerDay);
function findMax(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function filterHighActive(arr, check) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function countLowActive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 50) {
            count++;
        }
    }
    let percent = 0;
    if (arr.length > 0) {
        percent = (count / arr.length) * 100;
    }
    return { count, percent };
}

const countPhotos = calculateSum(photosPerDay);

const highActive = filterHighActive(photosPerDay, function (count) { return count > 200; });

const maxPhotos = findMax(photosPerDay);

const lowActive = countLowActive(photosPerDay);

alert(`Всего сделано ${countPhotos} фото, в ${highActive.length} днях активность была высокой`);

console.log(`Дней с малой активностью: ${lowActive.count}`);
console.log(`Процент дней с малой активностью: ${lowActive.percent.toFixed(1)}%`);

if (maxPhotos > 300) {
    console.log('В этот день вы были особенно продуктивны!');
}