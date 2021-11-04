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
    const form1 = q('#form1');
    const input = q('#form1 input');
    const list = q('ul');
    const form2 = q('#form2');
    const name = q('#name');
    const phone = q('#phone');
    const email = q('#email');

    render(list, data);

    // form.addEventListener('submit', (event)=>{
    //   event.preventDefault(); //.preventDefault blocca l'evento in un certo punto
    //   const value=input.value.toLowerCase(); //.toLowerCase trasforma tutto in minuscolo così non c'è discrepanza - annula il key sensitive

    //   const results=data.filter((element, index)=>{
    //     return element.name.toLowerCase().search(value) > -1 //idem qua, così sono tutti e due minuscoli
    //   });

    //   render(list, results);
    // });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        const nuovo = {
            name: name.value,
            phone: phone.value,
            email: email.value
        }
        data.push(nuovo);
        render(list, data);
    })


    //per fare la ricerca in contemporanea alla digitazione
    input.addEventListener('keyup', (event) => {
        const value = input.value.toLowerCase();

        const results = data.filter((element, index) => {
            element.name.toLowerCase().search(value) > -1 ||
                element.email.toLowerCase().search(value) > -1
        });

        render(list, results);
    });
});
