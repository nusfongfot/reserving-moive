let container = document.querySelector('.container')
let seats = document.querySelectorAll('.row .seat:not(.occupied)')

let count = document.getElementById('count')
let total = document.getElementById('total')

let movieSelected = document.getElementById('movie')

let price = +movieSelected.value



container.addEventListener('click', (e)  => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occuiped')){
    //สลับสถานะ ไปใช้ selected
    e.target.classList.toggle('selected')
    updateSelected()
  }
})
movieSelected.addEventListener('change', e=>{
  price = +e.target.value
  setMovieData(e.target.selectedIndex,e.target.value)
  updateSelected()
} )

function updateSelected(){
  let selectSeat = document.querySelectorAll('.row .seat.selected')
  let countSeat = selectSeat.length
  let seatsIndex = [...selectSeat].map(seat => [...seats].indexOf(seat))
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))
  count.innerText = countSeat
  total.innerText = countSeat * price
}

function setMovieData(movieIndex,moviePrice){
  localStorage.setItem('movieIndex',movieIndex)
  localStorage.setItem('moviePrice',moviePrice)
}

//ดึงข้อมูล จาก localstorage
function showDatatoUi(){
  selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
let selectedmovieIndex = localStorage.getItem('movieIndex')
  seats.forEach((seat,index) => {
    if(selectedSeats.indexOf(index) > -1){
      seat.classList.add('selected')
    }
  })
  if(selectedmovieIndex !== null){
    movieSelected.selectedIndex = selectedmovieIndex
  }
}
showDatatoUi()
updateSelected()



