let pikachuAttack = 50
let psyduckAttack = 65

// the strength comparison

if (pikachuAttack > psyduckAttack) {
    console.log ("Pikachu is more OP than Psyduck")
}
else if (psyduckAttack > pikachuAttack){
    console.log ("Psyduck is mor OP than Pikachu")
}
else {
    console.log ("They are evenly matched")
}

//Psyduck wants to fight so he attacks

let pikachuHealth = 100
let pikachuDefence = 40

    console.log ("Pikachu is attacked!")

if (pikachuHealth <= psyduckAttack) {
    console.log ("Pikchu fainted")
    pikachuHealth = 0
}
else {
    // pikachuHealth = pikachuHealth - psyduckAttack
    // console.log ("Pikachu took a hit! His HP is now " + pikachuHealth)

    pikachuHealth -= psyduckAttack
    console.log (`Pikachu took a hit! His HP is now ${pikachuHealth}`)
}

console.log (`Pikachu is going to attack!`)

//pikachu counters with his move thunderwave
//however pikachu got some dirt in his eye so there is only a 50/50 chance of it working

let coinflip

if (Math.random() < 0.5) {
    coinflip = false
} else {
    coinflip = true
}

if (coinflip) {
    console.log (`Psyduck is paralized!`)
} else {
    console.log (`Pikchu\`s thunderwave missed!`)
}

console.log(`Psyduck is angry and uses fury swipes!`)

let furySwipeCount = Math.floor(Math.random() * 4) + 2
let furySwipeDamage = 10

for (let i = 0; i < furySwipeCount; i++) {
    console.log (`swipe!`)
    if (pikachuHealth <= furySwipeDamage) {
        console.log ("Pikchu fainted")
        pikachuHealth = 0
        break;
    }
    else {
       
        pikachuHealth -= furySwipeDamage
        console.log (`Pikachu took a hit! His HP is now ${pikachuHealth}`)
    }
}

if (pikachuHealth > 0){
    console.log(`Pikachu survived the onslaught of duck claw.`)
    console.log(`Pikachu decided it had had enough and fled!`)
}