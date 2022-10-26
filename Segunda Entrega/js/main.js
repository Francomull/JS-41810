class HPpelis {
    constructor(titulo, anio, director, id) {

        this.titulo = titulo;
        this.anio = parseInt(anio);
        this.director = director;
        this.id = id;
    }

    agregarId(array) {
        this.id = array.length;
    }

};



const peliculas = [

    new HPpelis('Harry Potter y la piedra filosofal ', 2001, 'Chris Columbus', 1),
    new HPpelis('Harry Potter y la camara secreta', 2002, 'Chris Columbus', 2),
    new HPpelis('Harry Potter y el prisionero de Azkaban', 2004, 'Alfonso Cuaron', 3),
    new HPpelis('Harry Potter y el caliz de fuego', 2005, 'Mike Newell', 4),
    new HPpelis('Harry Potter y la Orden del Fenix', 2007, ' David Yates', 5),
    new HPpelis('Harry Potter y el misterio del principe', 2009, 'David Yates', 6),
    new HPpelis('Harry Potter y las reliquias de la muerte - Parte 1', 2010, 'David Yates', 7),
    new HPpelis('Harry Potter y las reliquias de la muerte - Parte 2', 2011, 'David Yates', 8),

];


let continuar = true;

while (continuar) {


    let opcion = parseInt(prompt('Te gusta Harry Potter? Estas en el lugar indicado \n Ingresa: \n 1-Agregar una Pelicula \n 2-Buscarlas por titulos \n 3-Ordenarlas por año \n 4-Ordernarlas por titulo \n 5-Buscar por director \n 9-Salir '));

    if (opcion == 9) {
        continuar = false;
        break

    }



    switch (opcion) {

 
        case 1: {
            let nuevaHPpeli = prompt('Ingrese el titulo, año y director separados por un # ')

            let info = nuevaHPpeli.split('#');
            console.log(info);

            let peliNueva = new HPpelis(info[0], info[1], info[2], info[3]);
            peliculas.push(peliNueva);
            peliNueva.agregarId(peliculas);

            break;


        }

        case 2: {

            let peliBuscada = prompt('Ingrese el nombre de la película');

            let filtro = peliculas.filter((pelicula) => pelicula.titulo.toUpperCase().includes(peliBuscada.toUpperCase()));

            if (filtro.length == 0) {
                alert('La película no se encuentra disponible');
            } else {
                let peliEncontrada = filtro.map((filtro) => filtro.titulo);

                alert(`La película ${peliEncontrada} se encuentra en la lista`);

            }

            break;
        }


        case 3: {

            let copiaArray = peliculas.slice();

            let opcion = parseInt(prompt('Ingrese \n 1) Fecha creciente \n 2) Fecha decreciente'));

            if (opcion == 1) {
                let fechaCreciente = copiaArray.sort((a, b) => a.anio - b.anio);
                alert((fechaCreciente.map((fechaCreciente) => fechaCreciente.titulo + ' : ' + fechaCreciente.anio)).join('\n'));

            } else if (opcion == 2) {
                let fechaDecreciente = copiaArray.sort((a, b) => b.anio - a.anio);
                alert((fechaDecreciente.map((fechaDecreciente) => fechaDecreciente.titulo + ' : ' + fechaDecreciente.anio)).join('\n'));

            } else {
                alert('Usted a ingresado una opcion no valida');
            }

            break;

        }


        case 4: {
            let copiaArray = peliculas.slice();
            let ordenarPorTitulo = parseInt(prompt('Ingrese \n 1 Si quiere ordenar de A a Z \n 2 Si quiere ordenar de Z a A'));


            if (ordenarPorTitulo == 1) {
                let ordenadoDeAaZ = copiaArray.sort((a, b) => a.titulo.localeCompare(b.titulo));

                alert((ordenadoDeAaZ.map((ordenadoDeAaZ) => ordenadoDeAaZ.titulo)).join('\n'));

            } else if (ordenarPorTitulo == 2) {
                let ordenadoDeZaA = copiaArray.sort((a, b) => b.titulo.localeCompare(a.titulo));
                alert((ordenadoDeZaA.map((ordenadoDeZaA) => ordenadoDeZaA.titulo)).join('\n'));


            } else {
                alert('Usted a ingresado una opcion no valida')
            }


            break;

        }


        case 5: {
            let directorBuscado = prompt('Ingrese el nombre del director');

            let filtro = peliculas.filter((pelicula) => pelicula.director.toUpperCase().includes(directorBuscado.toUpperCase()));

            console.log(filtro);

            if (filtro.length == 0) {
                alert('Este director no se encuentra disponible');
            } else{
                
                let peliculaEncontrada = filtro.map((peliculaEncontrada) => peliculaEncontrada.titulo )

                alert(`Estas son las películas encontradas :\n${peliculaEncontrada.join('\n')}`);

            }
            break;
        }
    }

}