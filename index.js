// CONSEJOS PARA LA TAREA
// empiecen haciendo el fetch y recibiendo la info en la consola 
// maquetan en html 
// pasan la maqueta de html a javascript 
// USEN SASS 

// fetch('https://rickandmortyapi.com/api/character')
//     .then((data) => {
//         return data.json();
//     })
//     .then((personajes) => {
//         console.log(personajes);
//         const link = document.querySelector("#prox")
//         link.href = personajes.info.next
//         const seccion = document.querySelector('section');

//         seccion.innerHTML = '';
//         personajes.results.map((personaje) => {
//             seccion.innerHTML += `
//         <article>
//             <div class="imagen">
//                 <img src="${personaje.image}">
//             </div>
//             <div class="info">
//             <div class="nombre">
//                 <h2>${personaje.name}</h2>
//             </div>
//             <div class="estado">
//                 <p>${personaje.status}</p>
//                 - <p>${personaje.species}</p>
//             </div>
//             <div class="ubicacion">
//                 <p>Last known location:</p>
//                 <p>${personaje.location.name}</p>
//             </div>
//             <div class="episodio">
//                 <p>First seen in:</p>
//                 <a>${personaje.episode[0]}</a>
//             </div>
//             </div>
//         </article>
//         `
//         })
//     });


//  NEXT

const buscarInfo = (url) => {
fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((personajes) => {
        console.log(personajes);
        const link = document.querySelector("#prox")

        link.onclick = (e) => {
          e.preventDefault()
          buscarInfo(personajes.info.next)
        }

        const seccion = document.querySelector('section');

        seccion.innerHTML = '';
        personajes.results.map((personaje) => {
            seccion.innerHTML += `
        <article>
            <div class="imagen">
                <img src="${personaje.image}">
            </div>
            <div class="info">
            <div class="nombre">
                <h2>${personaje.name}</h2>
            </div>
            <div class="estado">
                <p>${personaje.status}</p>
                - <p>${personaje.species}</p>
            </div>
            <div class="ubicacion">
                <p>Last known location:</p>
                <p>${personaje.location.name}</p>
            </div>
            <div class="episodio">
                <p>First seen in:</p>
                <a>${personaje.episode[0]}</a>
            </div>
            </div>
        </article>
        `
        })
    });
}

buscarInfo('https://rickandmortyapi.com/api/character')


