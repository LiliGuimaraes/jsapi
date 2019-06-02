var app = document.getElementById('app');
var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

//make GET request


fetch('https://theblackwomanhistory.firebaseio.com/28.json')
    .then((response) => {
        return response.json();
    })
    .then(function(data) {
        console.log('SUCESSO');
        console.log(data);

        data.content.forEach(womans => {


            const title = document.createElement('h1');
            title.setAttribute('class', 'womans');
            title.textContent = womans.title;

            const description = document.createElement('p');
            description.setAttribute('class', 'description');
            description.textContent = womans.description;

            const birthdate = document.createElement('p');
            birthdate.setAttribute('class', 'birthdate');
            birthdate.textContent = womans.birthdate;

            const deathdate = document.createElement('p');
            deathdate.setAttribute('class', 'deathdate');
            deathdate.textContent = womans.deathdate;

            const country = document.createElement('p');
            country.setAttribute('class', 'country');
            description.textContent = womans.country;


            app.appendChild(order)
            app.appendChild(title)
            app.appendChild(description)
            app.appendChild(birthdate)
            app.appendChild(deathdate)
            app.appendChild(country)

        })

    });