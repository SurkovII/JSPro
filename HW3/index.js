// Урок 3. Промисы. Хранилище

// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
let comments = [];
const container = document.querySelector('.container');
loadComments()
const btn = document.querySelector('.add_review');
btn.addEventListener('click', () => {
    let inputProuctTitle = document.getElementById('input-product');
    let inputreview = document.getElementById('input-review');
    const inputTitle = inputProuctTitle.value;
    const reviewEl = inputreview.value;
    let productEl = {
        name : inputTitle,
        rewiew : reviewEl,
    }
    inputProuctTitle.value =''
    inputreview.value =''
    comments.push(productEl)
    
    localStorage.setItem('productData', JSON.stringify(comments))
    // showRewiew() 
})

function showRewiew() {
    comments.forEach(comment => {
        const nameProduct = document.createElement('h2')
        nameProduct.textContent = comment.name
        const rewiewProduct = document.createElement('p')
        rewiewProduct.textContent = comment.rewiew
        container.appendChild(nameProduct)
        container.appendChild(rewiewProduct)
    })

}
function loadComments() {
    if (localStorage.getItem('productData')) {
        comments = JSON.parse(localStorage.getItem('productData'))
    }
    showRewiew()
}