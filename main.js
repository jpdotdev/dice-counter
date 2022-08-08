let john1 = 0;
let john20 = 0;

let daren1 = 0;
let daren20 = 0;

let josh1 = 0;
let josh20 = 0;

let aaron1 = 0;
let aaron20 = 0;

let kelvin1 = 0;
let kelvin20 = 0;

let lauren1 = 0;
let lauren20 = 0;

let lis1 = 0;
let lis20 = 0;

let selk1 = 0;
let selk20 = 0;

let total1 = 0;
let total20 = 0;

document.querySelector('#johnnat1').innerText = john1;
document.querySelector('#johnnat20').innerText = john20;

document.querySelector('#darennat1').innerText = daren1;
document.querySelector('#darennat20').innerText = daren20;

document.querySelector('#joshnat1').innerText = josh1;
document.querySelector('#joshnat20').innerText = josh20;

document.querySelector('#aaronnat1').innerText = aaron1;
document.querySelector('#aaronnat20').innerText = aaron20;

document.querySelector('#kelvinnat1').innerText = kelvin1;
document.querySelector('#kelvinnat20').innerText = kelvin20;

document.querySelector('#laurennat1').innerText = lauren1;
document.querySelector('#laurennat20').innerText = lauren20;

document.querySelector('#lisnat1').innerText = lis1;
document.querySelector('#lisnat20').innerText = lis20;

document.querySelector('#selknat1').innerText = selk1;
document.querySelector('#selknat20').innerText = selk20;

document.querySelector('#totalnat1').innerText = total1;
document.querySelector('#totalnat20').innerText = total20;


// functions for John's dice
document.querySelector('#add1john').addEventListener('click', addOneJohn)
function addOneJohn() {
  john1 += 1
  document.querySelector('#johnnat1').innerText = john1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1john').addEventListener('click', subOneJohn)
function subOneJohn() {
  if (john1 > 0) {
  john1 -= 1
  document.querySelector('#johnnat1').innerText = john1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20john').addEventListener('click', addTwentyJohn)
function addTwentyJohn() {
  john20 += 1
  document.querySelector('#johnnat20').innerText = john20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20john').addEventListener('click', subTwentyJohn)
function subTwentyJohn() {
  if (john20 > 0) {
  john20 -= 1
  document.querySelector('#johnnat20').innerText = john20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Daren's dice
document.querySelector('#add1daren').addEventListener('click', addOneDaren)
function addOneDaren() {
  daren1 += 1
  document.querySelector('#darennat1').innerText = daren1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}

document.querySelector('#subtract1daren').addEventListener('click', subOneDaren)
function subOneDaren() {
  if (daren1 > 0) {
  daren1 -= 1
  document.querySelector('#darennat1').innerText = daren1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20daren').addEventListener('click', addTwentyDaren)
function addTwentyDaren() {
  daren20 += 1
  document.querySelector('#darennat20').innerText = daren20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20daren').addEventListener('click', subTwentyDaren)
function subTwentyDaren() {
  if (daren20 > 0) {
  daren20 -= 1
  document.querySelector('#darennat20').innerText = daren20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}
// functions for Josh's dice
document.querySelector('#add1josh').addEventListener('click', addOneJosh)
function addOneJosh() {
  josh1 += 1
  document.querySelector('#joshnat1').innerText = josh1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}

document.querySelector('#subtract1josh').addEventListener('click', subOneJosh)
function subOneJosh() {
  if (josh1 > 0) {
  josh1 -= 1
  document.querySelector('#joshnat1').innerText = josh1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20josh').addEventListener('click', addTwentyJosh)
function addTwentyJosh() {
  josh20 += 1
  document.querySelector('#joshnat20').innerText = josh20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20josh').addEventListener('click', subTwentyJosh)
function subTwentyJosh() {
  if (josh20 > 0) {
  josh20 -= 1
  document.querySelector('#joshnat20').innerText = josh20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Aaron's dice
document.querySelector('#add1aaron').addEventListener('click', addOneAaron)
function addOneAaron() {
  aaron1 += 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1aaron').addEventListener('click', subOneAaron)
function subOneAaron() {
  if (aaron1 > 0) {
  aaron1 -= 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20aaron').addEventListener('click', addTwentyAaron)
function addTwentyAaron() {
  aaron20 += 1
  document.querySelector('#johnnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20aaron').addEventListener('click', subTwentyAaron)
function subTwentyAaron() {
  if (aaron20 > 0) {
  aaron20 -= 1
  document.querySelector('#aaronnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Aaron's dice
document.querySelector('#add1aaron').addEventListener('click', addOneAaron)
function addOneAaron() {
  aaron1 += 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1aaron').addEventListener('click', subOneAaron)
function subOneAaron() {
  if (aaron1 > 0) {
  aaron1 -= 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20aaron').addEventListener('click', addTwentyAaron)
function addTwentyAaron() {
  aaron20 += 1
  document.querySelector('#johnnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20aaron').addEventListener('click', subTwentyAaron)
function subTwentyAaron() {
  if (aaron20 > 0) {
  aaron20 -= 1
  document.querySelector('#aaronnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Aaron's dice
document.querySelector('#add1aaron').addEventListener('click', addOneAaron)
function addOneAaron() {
  aaron1 += 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1aaron').addEventListener('click', subOneAaron)
function subOneAaron() {
  if (aaron1 > 0) {
  aaron1 -= 1
  document.querySelector('#aaronnat1').innerText = aaron1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20aaron').addEventListener('click', addTwentyAaron)
function addTwentyAaron() {
  aaron20 += 1
  document.querySelector('#aaronnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20aaron').addEventListener('click', subTwentyAaron)
function subTwentyAaron() {
  if (aaron20 > 0) {
  aaron20 -= 1
  document.querySelector('#aaronnat20').innerText = aaron20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Kelvin's dice
document.querySelector('#add1kelvin').addEventListener('click', addOneKelvin)
function addOneKelvin() {
  kelvin1 += 1
  document.querySelector('#kelvinnat1').innerText = kelvin1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1kelvin').addEventListener('click', subOneKelvin)
function subOneKelvin() {
  if (kelvin1 > 0) {
  kelvin1 -= 1
  document.querySelector('#kelvinnat1').innerText = kelvin1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20kelvin').addEventListener('click', addTwentyKelvin)
function addTwentyKelvin() {
  kelvin20 += 1
  document.querySelector('#kelvinnat20').innerText = kelvin20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20kelvin').addEventListener('click', subTwentyKelvin)
function subTwentyKelvin() {
  if (kelvin20 > 0) {
  kelvin20 -= 1
  document.querySelector('#kelvinnat20').innerText = kelvin20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Lauren's dice
document.querySelector('#add1lauren').addEventListener('click', addOneLauren)
function addOneLauren() {
  lauren1 += 1
  document.querySelector('#laurennat1').innerText = lauren1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1lauren').addEventListener('click', subOneLauren)
function subOneLauren() {
  if (lauren1 > 0) {
  lauren1 -= 1
  document.querySelector('#laurennat1').innerText = lauren1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20lauren').addEventListener('click', addTwentyLauren)
function addTwentyLauren() {
  lauren20 += 1
  document.querySelector('#laurennat20').innerText = lauren20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20lauren').addEventListener('click', subTwentyLauren)
function subTwentyLauren() {
  if (lauren20 > 0) {
  lauren20 -= 1
  document.querySelector('#laurennat20').innerText = lauren20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Lis's dice
document.querySelector('#add1lis').addEventListener('click', addOneLis)
function addOneLis() {
  lis1 += 1
  document.querySelector('#lisnat1').innerText = lis1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1lis').addEventListener('click', subOneLis)
function subOneLis() {
  if (lis1 > 0) {
  lis1 -= 1
  document.querySelector('#lisnat1').innerText = lis1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20lis').addEventListener('click', addTwentyLis)
function addTwentyLis() {
  lis20 += 1
  document.querySelector('#lisnat20').innerText = lis20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20lis').addEventListener('click', subTwentyLis)
function subTwentyLis() {
  if (lis20 > 0) {
  lis20 -= 1
  document.querySelector('#lisnat20').innerText = lis20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}

// functions for Selk's dice
document.querySelector('#add1selk').addEventListener('click', addOneSelk)
function addOneSelk() {
  selk1 += 1
  document.querySelector('#selknat1').innerText = selk1;
  document.querySelector('#totalnat1').innerText = total1 += 1;
}
document.querySelector('#subtract1selk').addEventListener('click', subOneSelk)
function subOneSelk() {
  if (selk1 > 0) {
  selk1 -= 1
  document.querySelector('#selknat1').innerText = selk1;
  document.querySelector('#totalnat1').innerText = total1 -= 1;
  }
}

document.querySelector('#add20selk').addEventListener('click', addTwentySelk)
function addTwentySelk() {
  selk20 += 1
  document.querySelector('#selknat20').innerText = selk20;
  document.querySelector('#totalnat20').innerText = total20 += 1;
}
document.querySelector('#subtract20selk').addEventListener('click', subTwentySelk)
function subTwentySelk() {
  if (selk20 > 0) {
  selk20 -= 1
  document.querySelector('#selknat20').innerText = selk20;
  document.querySelector('#totalnat20').innerText = total20 -= 1;
  }
}
