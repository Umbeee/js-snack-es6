const bici = [
    {
        nome: 'Legnano',
        peso: 7.2,
    },
    {
        nome: 'Pinarello',
        peso: 6.85,
    },
    {
        nome: 'Cannondale',
        peso: 8.3,
    }
]

const divBici = document.querySelector('.container-bici')



console.log(bici)

let min = 100;
let minNome = ''

let max = 0;
let maxNome = ''



for (let i=0; i<bici.length; i++){

    if (bici[i]['peso']<min){
        min = bici[i]['peso']
        minNome = bici[i]['nome']
    }
    if(bici[i]['peso']>max){
        max = bici[i]['peso']
        maxNome = bici[i]['nome']
    }
}

console.log(min, max)

divBici.innerHTML += `<p>La ${minNome}, è la più leggera, pesando solo ${min} kg</p>`

divBici.innerHTML += `<p>La ${maxNome}, è la più leggera, pesando ${max} kg</p>`