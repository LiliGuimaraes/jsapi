var app = document.getElementById('app');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

//make GET request


fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then((response) => {
        return response.json();
    })
    .then(function(data) {
        console.log('SUCESSO');
        console.log(data);

        data.content.forEach(womans => {

                const order = document.createElement('ul');
                order.setAttribute('class', 'womans');
                order.textContent = womans.order;

                const title = document.createElement('h1');
                title.setAttribute('class', 'womans');
                title.textContent = womans.title;

                const description = document.createElement('p');
                description.setAttribute('class', 'description');
                description.textContent = womans.description;

                const birthdate = document.createElement('ul');
                birthdate.setAttribute('class', 'birthdate');
                birthdate.textContent = womans.birthdate;

                const deathdate = document.createElement('ul');
                deathdate.setAttribute('class', 'deathdate');
                deathdate.textContent = womans.deathdate;

                const country = document.createElement('ul');
                country.setAttribute('class', 'country');
                description.textContent = womans.country;

                document.querySelector('_photo').src = data.metadata.image.url;

                app.appendChild(order)
                app.appendChild(title)
                app.appendChild(description)
                app.appendChild(birthdate)
                app.appendChild(deathdate)
                app.appendChild(country)

            })
            .catch(err => {
                console.log('Ocorreu algum erro', err)
            })
    });