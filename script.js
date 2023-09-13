let par = document.getElementById("hover-nome")
let endpoint = "https://jgalat.github.io/ds-weapons-api/"
// function getType(weapon)
// {
//     return weapon.weapon_type =="greatsword"
// }

fetch(endpoint)
.then(resposta=>resposta.json())
.then(dados=>{
    console.log(dados)
    // par.innerHTML = dados[4].name

    // let result = dados.filter(getType)
    // console.log(result)
})
