const $ = (query) => document.querySelector(query);
const $$ = (query) => document.querySelectorAll(query);
const background = document.querySelector(".barra .background");
const body = $('body');

let locationY = 0;
let locationX = 0;

body.addEventListener('mouseover', e => {
  console.log('mouse in');
  locationY = e.clientY
  locationX = e.clientX
})
body.addEventListener('mouseleave', e => {
  locationX = e.clientX
  locationY = e.clientY
  redirect()
})

function redirect(){
  setTimeout(() => {
    console.log('passou aqui');
    if(locationY < 0 && locationX > 0){
      window.location.href = 'https://protocolomacro.com/home/'
    }
  }, 3000)
}

let percentageCounter = 100;

function passarQuestao() {
  const transform = `translateX(-${percentageCounter}%)`;

  $(".wrapper").style.transform = transform;
  percentageCounter += 100;
  console.log(percentageCounter);
  atualizarBarraDeProgresso();
}

function voltarQuestao() {
  if(percentageCounter <= 100) return

  percentageCounter -= 100;
  const transform = `translateX(-${percentageCounter - 100}%)`;
  
  $(".wrapper").style.transform = transform;
  console.log(percentageCounter);

  atualizarBarraDeProgresso(true);
}

function atualizarBarraDeProgresso(isRemove = false) {
  if(percentageCounter <= 0) return
  let width = (percentageCounter - 100) / 4;
  console.log(width,percentageCounter);
  $(".barra .background").style.width = `${width}%`;

  if(isRemove){
    const actives = $$(".circle.active")
    const lastActive = actives[actives.length - 1];

    console.log(actives, lastActive);

    lastActive.classList.remove('active')
  } else {
    $(".circle:not(.active)").classList.add("active");
  }
}
