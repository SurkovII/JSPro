// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class library{
    #books=[];
    get allBooks(){
        return this.#books;
    }
    addBook(title){
        if (this.#books.includes(title)) {
            throw new Error('Этот пользоВатель уже есть В библиотеке')
        }
        this.#books.push(title)
    }
    removeBook(title){
        const bookResult = this.#books.filter((book) => book !== title);
        this.#books = bookResult
    }
    hasBook(title){
        if (this.#books.includes(title)) {
            return true
        }
        return false
    }
    constructor(allBooks){
        let uniq = []
        this.#books.forEach(element => {
            if (!uniq.includes(element)) {
                uniq.push(element)
            }
        })
        if (this.#books.length !== uniq.length) {
            throw new Error('Есть поторяющиеся книги')
        };
    }
}

let lib = new library()
lib.addBook('Война и мир')
lib.addBook('Война и мир2')
lib.addBook('Война и мир3')
lib.removeBook('Война и мир2')

console.log(lib.allBooks);
console.log(lib.hasBook('Война и мир'));