const $ = (query) => document.querySelector(query);
const $$ = (query) => document.querySelectorAll(query);
const background = document.querySelector(".barra .background");

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
