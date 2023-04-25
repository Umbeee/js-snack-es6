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

divBici.innerHTML += `<p>La ${maxNome}, è la più pesante, pesando ${max} kg</p>`


const squadre = [
    {
        nome: 'juventus',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'roma',
        punti: 0,
        falli: 0,
    }
]

function numRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

for (let i=0; i<squadre.length; i++){


    squadre[i].punti = numRandom(30, 90)

    squadre[i].falli = numRandom(5, 25)

    
}

console.log(squadre)


let nomi = []
for( let i=0; i<squadre.length; i++){
    nomi.push(squadre[i].nome + ' ' + squadre[i].falli)
}

let falli = []
for( let i=0; i<squadre.length; i++){
    falli.push(squadre[i].falli)
}


console.log(nomi, falli)


