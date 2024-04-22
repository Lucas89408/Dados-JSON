const fs = require('fs');

let myPets = [
    {nome: "Flock", cor: "Branco e Preto", tipo: "Cachorro", raca: "Shitzu"},
    {nome: "Totó", cor: "Bege Claro", tipo: "Cachorro", raca: "Lhasa"},
    {nome: "Jack", cor: "Branco", tipo: "Cachorro", raca: "Labrador com alguma coisa"},
    {nome: "Sansa", cor: "Preta", tipo: "Cachorro", raca: "Não sabemos"},
    {nome: "Fitz", cor: "Cinza e Bege", tipo: "Cachorro", raca: "YorkFitz"},
    {nome: "Frajóla", cor: "Cinza e Branco", tipo: "Gato", raca: "Vagabound"}
];

let chosenPets = myPets[2];
    console.log(`O ${chosenPets.nome} é da raça ${chosenPets.raca}`);

let forFriendList = JSON.stringify(myPets);
    console.log(forFriendList);

fs.writeFile('dados.json', forFriendList, (err) =>{
    if(err){
        console.error('Erro ao escrever o arquivo:', err);
        return;
    }
   console.log('Arquivo salvo com sucesso!');
});