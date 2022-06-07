import { apiKey, timeStamp, hash } from './comic.js'

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    /* console.log(jsonParsed); */
    const divCharacters = document.querySelector('#characters');
    console.log(jsonParsed)
    jsonParsed.data.results.forEach(element => {
        const image = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameCharacters = element.name

        if (image !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
            createDivCharacters(image, nameCharacters, divCharacters);
        }
    });
})

function createDivCharacters(image, nameCharacters, divToAppend) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const textName = document.createElement("text");
    const img = document.createElement("img");

    textName.textContent = nameCharacters
    img.src = image

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);

    divPai.classList.add("personagens");

}