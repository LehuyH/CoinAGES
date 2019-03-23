//Settings script
var stage = 1
var items = []
var player = {
  money: 0.00,
  clickvalue: 0.01,
	icon: "./assets/img/1.png"
  }


var stage1 = {
  cost: 0,
  upgrade: 0

}

//Objects
var robot = {
  price: 1,
  value: 0.01,
  max: 10,
  amount: 0,
  wakeup: 'managerobot',
  name: 'robot',
  code: ' <img class=" itemimg animated jello infinite" src="assets/img/robot.png">'
} 
var person = {
  price: 2,
  value: 0.03,
  max: 5,
  amount: 0,
  wakeup: 'manageperson',
  name: 'person',
  code:' <img class=" itemimg personflip infinite" src="assets/img/person.png">'
}
// Objects that are not default
var ecoflipper = {
	 price: 20,
  value: 0.10,
  max: 5,
  amount: 0,
	unlock: 2,
  wakeup: 'manageecoflipper',
  name: 'ecoflipper',
  code:' <img class=" itemimg spin infinite" src="assets/img/ecoflipper.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Eco Flipper</p> <div class='bar' id='ecobar'></div> <hr class='blu thin'> <div class='container' id='ecoflipperinfo'> <p>Use the wind to flip coins, then charge more because it is environmentally friendly.<br>Flip Time: 1 Second<br> Money Per Flip: $0.10</p> </div> <br> <button id='buy-ecoflipper' onclick='buy(\"ecoflipper\")' class='martophack buy-bot'>Build one for $20.00</button> <p id='ecoflipper-displaymax'>You are using 0/5</p> </div>"

} 
var bottleflip = {
	 price: 20,
  value: 20,
  max: 2,
  amount: 0,
	unlock: 2,
  wakeup: 'managebottleflip',
  name: 'bottleflip',
  code:' <img class=" itemimg bottleflip infinite" src="assets/img/waterbottle.png">',
	cardcode: "<div style='opacity:1'class='card'> <p>Bottle Flipper</p> <div class='bar' id='bottleflipbar'></div> <hr class='blu thin'> <div class='container' id='bottleflipinfo'> <p>Flip waterbottles with mutiple coins in them for increased efficiency!<br>Flip Time: 1 Second<br> Money Per Flip: $0.20</p> </div> <br> <button  onclick='buy(\"bottleflip\")' class='martophack buy-bot'>Buy one for $100</button> <p id='bottleflip-displaymax'>You are using 0/5</p> </div>"

} 

items.push(ecoflipper,bottleflip)
