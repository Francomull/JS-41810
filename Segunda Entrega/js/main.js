class HPpelis {
    constructor(titulo, anio, curso, director, id) {

        this.titulo = titulo;
        this.anio = parseInt(anio);
        this.curso = curso;
        this.director = director;
        this.id = id;
    }

    agregarId(array) {
        this.id = array.length;
    }

};



const videoJuegos = [

    new HPpelis('Harry Potter y la piedra filosofal ', 2001, '1 Curso', 'Chris Columbus', 1),
    new HPpelis('Harry Potter y la camara secreta', 2002, '2 Curso', 'Chris Columbus', 2),
    new HPpelis('Harry Potter y el prisionero de Azkaban', 2004, '3 Curso', 'Alfonso Cuaron', 3),
    new HPpelis('Harry Potter y el caliz de fuego', 2005, '4 Curso', 'Mike Newell', 4),
    new HPpelis('Harry Potter y la Orden del Fenix', 2007, '5 Curso', ' David Yates', 5),
    new HPpelis('Harry Potter y el misterio del principe', 2009, '6 Curso', 'David Yates', 6),
    new HPpelis('Harry Potter y las reliquias de la muerte - Parte 1', 2010, 'Ultimo Curso', 'David Yates', 7),
    new HPpelis('Harry Potter y las reliquias de la muerte - Parte 2', 2011, 'Ultimo Curso', 'David Yates', 8),

];


let continuar = true;

while (continuar) {


    let opcion = parseInt(prompt('Te gusta Harry Potter? Estas en el lugar indicado \n Ingresa: \n 1-Agregar una Pelicula \n 2-Buscarlas por titulos \n 3-Ordenarlas por año \n 4-Ordernarlas por titulo \n 5-Buscar por genero \n 9-Salir '));

    if (opcion == 9) {
        continuar = false;
        break

    }



    switch (opcion) {

 
        case 1: {
            let nuevoVideoJuego = prompt('Ingrese el titulo, año, genero, desarrollador separados por un # ')

            let info = nuevoVideoJuego.split('#');
            console.log(info);

            let juegoNuevo = new VideoJuego(info[0], info[1], info[2], info[3]);
            videoJuegos.push(juegoNuevo);
            juegoNuevo.agregarId(videoJuegos);

            break;


        }

        case 2: {

            let juegoBuscado = prompt('Ingrese el nombre del juego');

            let filtro = videoJuegos.filter((videoJuego) => videoJuego.titulo.toUpperCase().includes(juegoBuscado.toUpperCase()));

            if (filtro.length == 0) {
                alert('El juego no se encuentra disponible');
            } else {
                let juegoEncontrado = filtro.map((filtro) => filtro.titulo);

                alert(`El juego ${juegoEncontrado} se encuentra en la lista`);


            }

            break;
        }


        case 3: {

            let copiaArray = videoJuegos.slice();

            let opcion = parseInt(prompt('Ingrese \n 1 De mas nuevo a mas a viejo \n  2 De mas viejo a mas nuevo'));

            if (opcion == 1) {
                let deMasNuevoAMasViejo = copiaArray.sort((a, b) => a.anio - b.anio);
                alert((deMasNuevoAMasViejo.map((deMasNuevoAMasViejo) => deMasNuevoAMasViejo.titulo + ' : ' + deMasNuevoAMasViejo.anio)).join('\n'));

            } else if (opcion == 2) {
                let deMasViejoAMasNuevo = copiaArray.sort((a, b) => b.anio - a.anio);
                alert((deMasViejoAMasNuevo.map((deMasViejoAMasNuevo) => deMasViejoAMasNuevo.titulo + ' : ' + deMasViejoAMasNuevo.anio)).join('\n'));

            } else {
                alert('Usted a ingresado una opcion no valida');
            }

            break;

        }


        case 4: {
            let copiaArray = videoJuegos.slice();
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
            let cursoBuscado = prompt('Ingrese del genero');

            let filtro = videoJuegos.filter((videoJuego) => videoJuego.curso.toUpperCase().includes(cursoBuscado.toUpperCase()));

            console.log(filtro);

            if (filtro.length == 0) {
                alert('Ese genero no se encuentra disponible');
            } else{
                
                let cursoEncontrado = filtro.map((cursoEncontrado) => cursoEncontrado.titulo )

                alert(`Estos son los Juegos encontados :\n${cursoEncontrado.join('\n')}`);

            }
            break;
        }
    }

}