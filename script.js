const gridContainer = document.querySelector(".grid");

//card options
 const cardArray=[
{name: 'a',
img: 'a.png'},
{name: 'b',
img: 'b.png'},
{name: 'c',
img: 'c.png'},
{name: 'd',
img: 'd.png'},
{name: 'e',
img: 'e.png'},
{name: 'f',
img: 'f.png'},
{name: 'g',
img: 'g.png'},
{name: 'h',
img: 'h.png'},
 {name: 'a',
img: 'a.png'},
{name: 'b',
img: 'b.png'},
{name: 'c',
img: 'c.png'},
{name: 'd',
img: 'd.png'},
{name: 'e',
img: 'e.png'},
{name: 'f',
img: 'f.png'},
{name: 'g',
img: 'g.png'},
{name: 'h',
img: 'h.png'},

 ]

 const grid= document.querySelector('.grid');
 var cardsChosen=[];
 var cardsChosenId=[];
 var cardsWon=[]



//creating the board
function creatBoard(){
    for(let i=0; i<cardArray.length; i++){
var card = document.createElement ('img')
card.setAttribute('src', 'blank.png')
card.setAttribute('data-id', i)
card.addEventListener('click',flipcard)
grid.appendChild(card)
    }
}
//shorting the cards 
cardArray.sort(()=>.5-Math.random())



//click on to match the card
function checkForMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[2]
    if(cardsChosenId===cardsChosenId[2]){
        alert ('you found a math')
        cards[optionOneId].setAttribute('src', 'optionOneId')
        cards[optionTwoId].setAttribute('src', 'optionTwoID')
        cardsWon.push(cardsChosen)
    }else{

        //flip the cards over to play agian
        cards[optionOneId].setAttribute('src', 'blank.png')
        cards[optionTwoId].setAttribute('src', 'blank.png')
        alert ('try again!')
    }
}

//flip your card
function flipcard(){
    var cardID= this.getAttribute('data-id')
    cardsChosenId.push(cardArray[cardID].name)
    cardsChosen.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }

}



creatBoard()
