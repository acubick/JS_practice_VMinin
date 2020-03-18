const fruits = [
	{id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
	{id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
	{id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
]

const toHTML = fruit => `
\t<div class="col">
\t\t\t<div class="card">
\t\t\t\t<img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
\t\t\t\t<div class="card-body">
\t\t\t\t\t<h5 class="card-title">${fruit.title}</h5>
\t\t\t\t\t<a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
\t\t\t\t\t<a href="#" class="btn btn-danger">Удалить</a>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
`

/*
* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (и это должна быть 1 модалка)
* 3. Модалка для удаления с 2мя кнопками
* ---------
* 4. На основе $.modal нужно сделать другой плагин $.confirm (Promise)
* */

 function render() {
// 	const html = fruits.map(fruit => toHTML(fruit))
 	const html = fruits.map(toHTML).join('')
 	document.querySelector('#fruits').innerHTML = html
 }
  render()

const priceModal = $.modal({
	title: 'Цена на Товар',
	closable: true,
	width: '460px',
	footerButtons: [
		{text: 'Закрыть', type: 'primary', handler(){
				priceModal.close()
			} },
		{text: 'Cancel', type: 'danger', handler(){
				priceModal.close()
			} }
	]
})

document.addEventListener('click', event =>{
	event.preventDefault() 
const btnType = event.target.dataset.btn
	if(btnType === 'price'){
		priceModal.open()
	}
})
             
