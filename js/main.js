let nota1 = parseInt(prompt('Ingrese la primer nota del alumno 0 a 100'))
let nota2 = parseInt(prompt('Ingrese la segunda nota del alumno'))
let nota3 = parseInt(prompt('Ingrese la tercera nota'))
let nota4 = parseInt(prompt('Ingrese la ultima nota'))

let promedio = (nota1 + nota2 + nota3 + nota4) / 4; 

if (promedio >= 60){
    alert ("El alumno esta aprobo")
}else{
    alert ("EL alumno reprobo")
}


