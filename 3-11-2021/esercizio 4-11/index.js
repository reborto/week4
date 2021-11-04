//modo per accedere ai 3 elementi
const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
    const elements = items.map((element) => 
      `<li>
        <h3>${element.name}</h3>
        <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
      </li>`
    );
    //console.log()

    const content = elements.join('');
    container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    const input = q('form input');
    const list = q('ul');

    render(list, data);

    // form.addEventListener('submit', (event)=>{
    //   event.preventDefault(); //.preventDefault blocca l'evento in un certo punto
    //   const value=input.value.toLowerCase(); //.toLowerCase trasforma tutto in minuscolo così non c'è discrepanza - annula il key sensitive
      
    //   const results=data.filter((element, index)=>{
    //     return element.name.toLowerCase().search(value) > -1 //idem qua, così sono tutti e due minuscoli
    //   });

    //   render(list, results);
    // });


    //per fare la ricerca in contemporanea alla digitazione
    input.addEventListener('keyup', (event)=>{
      const value=input.value.toLowerCase(); 

      const results=data.filter((element, index)=>{
         element.name.toLowerCase().search(value) > -1 ||
         element.email.toLowerCase().search(value) > -1 
      });

      render(list, results);
    });
});
