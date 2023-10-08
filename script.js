let iconArray = document.getElementsByClassName("icon-a")

// let hoverNome = document.getElementById("hover-nome")
let preview = document.getElementById("preview")

let nome = document.getElementById("name")
let category = document.getElementById("weapon_category")
let weight = document.getElementById("weight")
let durability = document.getElementById("durability")
let dmgPhysical = document.getElementById("dmg_physical")
let dmgMagic = document.getElementById("dmg_magic")
let dmgFire = document.getElementById("dmg_fire")
let dmgLightning = document.getElementById("dmg_lightning")
let protPhysical = document.getElementById("prot_physical")
let protMagic = document.getElementById("prot_magic")
let protFire = document.getElementById("prot_fire")
let protLightning = document.getElementById("prot_lightning")
let bonusStrength = document.getElementById("bonus_strength")
let bonusDex = document.getElementById("bonus_dexterity")
let bonusInt = document.getElementById("bonus_intelligence")
let bonusFaith = document.getElementById("bonus_faith")
let reqStr = document.getElementById("req_strength")
let reqDex = document.getElementById("req_dexterity")
let reqInt = document.getElementById("req_intelligence")
let reqFaith = document.getElementById("req_faith")

let endpoint = "https://jgalat.github.io/ds-weapons-api/"
fetch(endpoint)
.then(resposta=>resposta.json())
.then(dados=>{
    console.log(dados)
    for (var i = 0; i< iconArray.length; i++)
    {
      iconArray[i].addEventListener("mouseover", function(){
        arma = dados[this.id]
        dano = arma.damage
        prot = arma.damage_reduction
        bonus = arma.bonus
        req = arma.requirements

        // hoverNome.innerHTML = arma.name
        nome.innerHTML = arma.name
        category.innerHTML = arma.weapon_type
        weight.innerHTML = arma.weight
        durability.innerHTML = arma.durability
        dmgPhysical.innerHTML = dano.physical
        dmgMagic.innerHTML = dano.magic
        dmgFire.innerHTML = dano.fire
        dmgLightning.innerHTML = dano.lightning
        protPhysical.innerHTML = prot.physical
        protMagic.innerHTML = prot.magic
        protFire.innerHTML = prot.fire
        protLightning.innerHTML= prot.lightning
        bonus.strength === null ? bonusStrength.innerHTML = "-" : bonusStrength.innerHTML = bonus.strength;
        bonus.dexterity === null ? bonusDex.innerHTML = "-" : bonusDex.innerHTML = bonus.dexterity;
        bonus.intelligence === null ? bonusInt.innerHTML = "-" : bonusInt.innerHTML = bonus.intelligence;
        bonus.faith === null ? bonusFaith.innerHTML = "-" : bonusFaith.innerHTML = bonus.faith;
        req.strength === null ? reqStr.innerHTML = "-" : reqStr.innerHTML = req.strength;
        req.dexterity === null ? reqDex.innerHTML = "-" : reqDex.innerHTML = req.dexterity;
        req.intelligence === null ? reqInt.innerHTML = "-" : reqInt.innerHTML = req.intelligence;
        req.faith === null ? reqFaith.innerHTML = "-" : reqFaith.innerHTML = req.faith;

        let foto = this.querySelector(".hover-foto")
        preview.src = foto.src

      }, false)
    }
})