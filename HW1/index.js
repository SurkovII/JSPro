// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// •Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.Каждый альбом имеет следующую структуру:

//     {
//         title: "Название альбома",
//         artist: "Исполнитель",
//         year: "Год выпуска"
//     }
// Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.•Используйте цикл
// for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)

const musicCollection = [{
    title: "Help!",
    artist: "Beatles",
    year: "1965"
}, {
    title: "Arrival!",
    artist: "Abba",
    year: "1976"
}, {
    title: "Reise Reise!",
    artist: "Rammstein",
    year: "2004"
}]


musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true }
        }
    }
}
for (let musiсAalbum of musicCollection) {
    console.log(`${musiсAalbum.title} - ${musiсAalbum.artist}(${musiсAalbum.year})`);
}

// Задание 2

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// •Отслеживать, какой повар готовит какое блюдо.
// •Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.

const cooks = new Map();
cooks.set('Виктор', 'Пицца')
cooks.set('Ольга', 'Суши')
cooks.set('Дмитрий', 'Десерты')


const dishVictor = new Set();
dishVictor.add('Пицца "Маргарита"').add('Пицца "Пепперони"')
const dishOlga = new Set();
dishOlga.add('Суши "Филадельфия"').add('Суши "Калифорния"')
const dishDmitry = new Set();
dishDmitry.add('Тирамису').add('Чизкейк')

const dishCook = new Map();
dishCook.set("Виктор", dishVictor)
dishCook.set("Мария", dishOlga)
dishCook.set("Дмитрий", dishDmitry)


const clientAlex = new Set();
clientAlex.add('Пицца "Пепперони"').add('Тирамису')
const clientMary = new Set();
clientMary.add('Суши "Калифорния"').add('Пиццу "Маргарита"')
const clientIrina = new Set();
clientIrina.add('Чизкейк')

const clients = new Map();
clients.set('Алексей', clientAlex)
clients.set('Мария', clientMary)
clients.set('Ирина', clientIrina)
console.log(`Повар Дмитрий специализация: ${cooks.get("Дмитрий")}`);
console.log(`Повар Виктор готоит: ${[...dishCook.get("Виктор")]}`);
console.log(`Клиент Алексей закзал: ${Array.from(clients.get('Алексей'))}`)