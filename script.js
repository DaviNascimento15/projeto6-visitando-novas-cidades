let turist = prompt('Qual o seu nome turista?')
let question = prompt('você visitou alguma cidade? (s/n)')
let city = []
let numberOfCities = 0

while(question == 's') {
    city[numberOfCities] = prompt('Qual o nome da cidade visitada?')
    numberOfCities += 1

    question = prompt('Você ja visitou alguma outra cidade? (s/n)')

}
alert(`Turista: ${turist}
    Quantidade de cidade visitadas: ${numberOfCities}
    Cidades visitadas: ${city}`)