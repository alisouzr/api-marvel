const timeStamp = '1654098089';
const apiKey = '4c3607b7715a0d2b401a0c68b168913b';
const hash = '14670b0fc3dff7f0e365a7b220b2ccd4';

fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    /* console.log(jsonParsed); */
    const divComics = document.querySelector('#comics');
    console.log(jsonParsed)
    jsonParsed.data.results.forEach(element => {
        const image = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameComics = element.title

        if (image !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
            createDivComics(image, nameComics, divComics);
        }
    });
})

function createDivComics(image, nameComics, divToAppend) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const textName = document.createElement("text");
    const img = document.createElement("img");

    textName.textContent = nameComics
    img.src = image

    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);

    divPai.classList.add("personagens");

}
