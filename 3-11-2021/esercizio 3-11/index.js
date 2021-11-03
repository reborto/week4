// const q = (selector) => document.querySelector(selector);

// const render = (container, items) =>{
//     const elements = items.map((element)=>
// `<form>
// <h2>${element.title}</h2>
// <p>${title}</p>
// </form>`
    
// );

// const content = elements.join('');
// container.innerHTML = content;


// document.addEventListener('DOMContentLoaded', () => {
//     const form = q('form');
//     render(form, data);
// })
// }
const q = (selector) => document.querySelector(selector);
const btnPop = document.querySelector('#btnPop');

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');

    render(form, data);
});


const render = (container, items) => {
    const elements = items.map((element) => {
        if (element.completed === true) {
            return `<form>
            <input type="checkbox" name="lorem" id="box" checked>
            <label for="lorem">${element.title}</label>
          </form>`
        } else  {
            return `<form>
            <input type="checkbox" name="lorem" id="box">
            <label for="lorem">${element.title}</label>
          </form>`
        }
    });

    const content = elements.join('');
    container.innerHTML = content;
  }


// aggiungere un pulsante che al click rimuove l'ultimo elemento della lista con il metodo .pop() aggiornando il render in pagina.

const content = elements.join(" ");

btnPop.addEventListener('click', () => {
    elements.pop("");
    const content = elements.join(" ");
    container.innerHTML = content;
});