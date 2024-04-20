
// Crear un nuevo elemento style
var style = document.createElement('style');
style.type = 'text/css';
// Definir tu CSS dentro del elemento style
style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button,
  input {
    border: none;
    outline: none;
  }
  
  ul {
    list-style: none;
  }
  
  body {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: #fff;
    // background: radial-gradient(circle, #eeaeca 0%, #94bbe9 100%);
    padding: 40px 0;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .phone {
    /*width: 375px;*/
    /* height: 812px; */
    width: 90%;
    height: 1000px;
    background: #DFECFF;
    border-radius: 7px;
    overflow: hidden;
  }
  
  .icon {
    display: inline-block;
    background-image: url("https://i.ibb.co/Kh1dDt6/sprite-min.png");
    background-repeat: no-repeat;
  }
  
  .icon-visa {
    width: 64px;
    height: 20px;
    background-position-y: -32px;
  }
  
  .icon-signal {
    width: 18px;
    height: 12px;
  }
  
  .icon-wifi {
    width: 16px;
    height: 12px;
    background-position: -18px 0;
  }
  
  .icon-battery {
    width: 25px;
    height: 12px;
    background-position: -34px 0;
  }
  
  .icon-bell {
    width: 20px;
    height: 20px;
    background-position: 0 -12px;
  }
  
  .icon-contact-add {
    width: 26px;
    height: 26px;
    background-position: 0 -52px;
  }
  
  .icon-calendar {
    width: 20px;
    height: 17px;
    background-position: -40px -13px;
  }
  
  .icon-dribbble {
    width: 14px;
    height: 14px;
    background-position: -50px -52px;
  }
  
  .icon-appstore {
    width: 12px;
    height: 14px;
    background-position: 0 -78px;
  }
  
  .icon-supermarket {
    width: 14px;
    height: 13px;
    background-position: -50px -66px;
  }
  
  header {
    background: #1B69C5;
    padding-bottom: 72px;
    background-image: url("https://i.ibb.co/jwLXqyd/clouds-min.png");
    background-repeat: no-repeat;
    background-position: bottom;
  }
  
  .top-bar {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-bar .time {
    font-size: 18px;
  }
  
  .status-bar > .icon:not(:last-child) {
    margin-right: 6px;
  }
  
  .header-main {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .header-main .title {
    font-size: 28px;
    font-weight: 900;
  }
  .header-main .burger {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    width: 22px;
    height: 20px;
    cursor: pointer;
  }
  .header-main .burger > * {
    height: 2px;
    background: #fff;
  }
  .header-main .burger > *:nth-child(1) {
    width: 22px;
  }
  .header-main .burger > *:nth-child(2) {
    width: 8px;
  }
  .header-main .burger > *:nth-child(3) {
    width: 16px;
  }
  .header-main .bell {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
  .header-main .bell .icon-bell {
    position: relative;
  }
  .header-main .bell .icon-bell:after {
    content: "";
    display: block;
    position: absolute;
    top: -3px;
    right: -2px;
    border: 2px solid #5f2967;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #51eb24 0%, #39df19 100%);
  }
  
  .search {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 50px;
  }
  .search > * {
    border-radius: 4px;
  }
  .search .search-bar {
    padding: 9px 0;
    width: 265px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: #fff;
    overflow: hidden;
  }
  .search .search-bar .search-bar__input {
    width: 214px;
    border-radius: 4px;
    font-size: 12px;
    color: #7b7b7b;
    padding-left: 23px;
  }
  .search .search-bar .search-bar__icon {
    border-left: 1px dashed #7b7b7b;
    width: 50px;
    position: relative;
    background: none;
  }
  .search .search-bar .search-bar__icon::after {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("https://i.ibb.co/Kh1dDt6/sprite-min.png");
    background-position: -20px -12px;
  }
  .search .search-button {
    width: 50px;
    background-color: #865e8c;
    color: #fff;
    font-size: 20px;
  }
  
  main {
    overflow: hidden;
  }
  
  .cards .card-list > div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 0;
    transition: all 0.5s;
    height: 210px;
  }
  .cards .card {
    position: absolute;
    flex-basis: auto;
    flex-grow: 1;
    min-width: 280px;
    height: 150px;
    background-color: #fff;
    border-radius: 6px;
    z-index: 2;
    box-shadow: 0px 0 15px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    color: #7b7b7b;
    overflow: hidden;
    transition: all 0.5s ease-out;
  }
  .cards .card-active::after, .cards .card-active::before {
    content: "";
    position: absolute;
    display: block;
    background-color: #ededf8;
    opacity: 0.25;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    z-index: -1;
  }
  .cards .card-active::after {
    top: 19px;
    left: 60px;
  }
  .cards .card-active::before {
    top: -126px;
    left: 148px;
  }
  .cards .card .card-numbers {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .cards .card .card-numbers .dots {
    display: flex;
  }
  .cards .card .card-numbers .dots .dot {
    width: 6px;
    height: 6px;
    background-color: #7b7b7b;
    border-radius: 50%;
  }
  .cards .card .card-numbers .dots .dot:not(:last-child) {
    margin-right: 5px;
  }
  .cards .card .card-date {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .cards .card .card-info {
    display: flex;
    justify-content: space-between;
  }
  .cards .card .card-info .card-info__balance {
    font-size: 20px;
    color: #5f2967;
    font-weight: 900;
    margin-top: 10px;
  }
  .cards .card .card-info .card-info__balance::before {
    content: "$";
    margin-right: 5px;
    font-weight: 600;
  }
  .cards .card-behind {
    z-index: 1;
    position: absolute;
    height: 110px;
    opacity: 0.65;
  }
  .cards .card-verified {
    content: "";
    position: absolute;
    top: -8px;
    right: -8px;
    display: block;
    width: 24px;
    height: 24px;
    background-image: url("https://i.ibb.co/Kh1dDt6/sprite-min.png");
    background-position: -26px -52px;
  }
  .cards .card-slider {
    display: flex;
    justify-content: center;
  }
  .cards .card-slider .card-slider__item {
    width: 6px;
    height: 6px;
    background-color: #7b7b7b;
    border-radius: 50%;
    cursor: pointer;
  }
  .cards .card-slider .card-slider__item:not(:first-child) {
    margin-left: 14px;
  }
  .cards .card-slider .card-slider__item-active {
    background-color: #00789c;
  }
  
  .section-title {
    color: #000000;
    font-size: 24px;
    font-weight: 600;
  }
  
  .contacts {
    margin-top: 20px;
  }
  .contacts .contacts-list {
    display: flex;
    margin-top: 19px;
  }
  .contacts .contacts-list .contact-add {
    background-color: transparent !important;
    border: 1px dashed #7b7b7b;
    box-shadow: none !important;
  }
  .contacts .contacts-list .contact {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    flex-basis: auto;
    flex-grow: 1;
    min-width: 80px;
    height: 80px;
    background-color: #fff;
    align-items: center;
    border-radius: 4px;
    color: #7b7b7b;
    font-size: 10px;
    box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.07);
    transition: all 0.3s;
    cursor: pointer;
  }
  .contacts .contacts-list .contact:hover {
    box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.07);
  }
  .contacts .contacts-list .contact .contact-name {
    margin-top: 9px;
  }
  .contacts .contacts-list .contact .contact-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    overflow: hidden;
  }
  .contacts .contacts-list .contact .contact-avatar img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .contacts .contacts-list .contact:not(:first-child) {
    margin-left: 20px;
  }
  
  .transactions {
    margin-top: 33px;
  }
  
  .transactions-list {
    margin-top: 14px;
  }
  
  .transactions-head {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .transaction {
    display: flex;
    padding: 20px;
    border-top: 1px solid #cacad3;
    justify-content: space-between;
  }
  .transaction .transaction-info {
    margin-left: 16px;
  }
  .transaction .transaction-title {
    color: #351739;
    font-size: 12px;
    font-weight: 600;
  }
  .transaction .transaction-desc {
    font-size: 10px;
    color: #7b7b7b;
    margin-top: 2px;
  }
  .transaction .transaction-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
  }
  .transaction .transaction-sum {
    font-size: 14px;
    color: #351739;
    font-weight: 600;
    flex: 1;
    text-align: right;
    align-self: center;
  }
`;

// Adjuntar el elemento style al head del documento
document.head.appendChild(style);



class CardSlider {
	constructor(cards, { slide = 0 }) {
		this.options = {
			margin: 27,
			width: 280,
			height: 150
		}
		this.cards = this.initCards(cards)
		this.slides = this.initSlides(cards)
		this.slide(slide)
		this.render()
	}
	
	setActiveCard(n) {
		// remove styles
		if (this.currentSlide !== undefined) {
			this.cards[this.currentSlide].classList.remove('card-active')
			this.slides[this.currentSlide].classList.remove('card-slider__item-active')
		}
		
		this.currentSlide = n
		
		this.cards[this.currentSlide].classList.add('card-active')
		this.slides[this.currentSlide].classList.add('card-slider__item-active')
	}

	generateCardTemplate(card) {
		return `
			${card.verified
				? '<div class="card-verified"></div>'
				: ''
			}
			<div class="card-info">
				<div>
					<p class="card-info__title">Current balance</p>
					<p class="card-info__balance">${card.balance}</p>
				</div>
				<div class="icon icon-visa card-info__logo"></div>
			</div>
			<div class="card-numbers">
				${('<div class="dots">' + '<div class="dot"></div>'.repeat(4) + '</div>').repeat(3)}
				<div>${card.number}</div>
			</div>
			<div class="card-date">
				<p>Nugget Card</p>
				<p>${card.date}</p>
			</div>
		`
	}
	
	initCards(cards) {
		const cardsElements = []

		for (let i = 0; i < cards.length; i++) {
			const newCard = document.createElement('div')
			newCard.classList.add('card')
			newCard.style.left = `${(this.options['width'] + this.options['margin']) * i}px`
			newCard.style.zIndex = String(i)
			newCard.innerHTML = this.generateCardTemplate(cards[i])
			cardsElements.push(newCard)
		}
		
		return cardsElements
	}
	
	initSlides(cards) {
		const slideElements = []
		
		for (let i = 0; i < cards.length; i++) {
			const slideItem = document.createElement('span')
			
			slideItem.classList.add('card-slider__item')
			slideItem.addEventListener('click', () => {
				this.slide(i)
			})
			slideElements.push(slideItem)
		}
		
		return slideElements
	}
	
	slide(item) {
		this.setActiveCard(item)

		const MAX_HEIGHT_CARD = this.options['height']
		const MULTIPLIER_HEIGHT = 0.9

		for (let i = 0; i <= item; i++) {
			this.cards[i].style.left = `${5 * i}px`

			if (i !== item)
				this.cards[i].style.height = `${MAX_HEIGHT_CARD * MULTIPLIER_HEIGHT ** (item - i)}px`
		}

		this.cards[item].style.height = ''

		for (let i = item + 1; i < this.cards.length; i++) {
			const offsetLeft = (this.options['width'] + this.options['margin']) * (i - item)
			this.cards[i].style.left = `${offsetLeft}px`
			this.cards[i].style.height = ''
		}
		
	}
	
	render(cardListClass = '.card-list', cardSliderClass = '.card-slider') {
		const cardList = document.querySelector(cardListClass)
		const cardSlider = document.querySelector(cardSliderClass)
		
		if (!cardList || !cardSlider) throw new Error('Render error')
		
		const cardListWrapper = document.createElement('div')
		
		this.cards.forEach(cardElement => cardListWrapper.appendChild(cardElement))
		this.slides.forEach(slideElement => cardSlider.appendChild(slideElement))
		
		cardList.appendChild(cardListWrapper)
	}
}

const cards = [
	{
		verified: false,
		balance: 7850.89,
		number: 1234,
		date: '28/07'
	},
	{
		verified: true,
		balance: 322,
		number: 4125,
		date: '16/03'
	},
	{
		verified: false,
		balance: 49.32,
		number: 9831,
		date: '07/09'
	},
	{
		verified: true,
		balance: 591.71,
		number: 3914,
		date: '02/01'
	},
	{
		verified: false,
		balance: 20.29,
		number: 5401,
		date: '19/05'
	}
]

new CardSlider(cards, { slide: 3 })
