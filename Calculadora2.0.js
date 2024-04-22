const btn=document.querySelectorAll('.btn');
const display=document.getElementById('display');
btn.forEach(boton => {
    boton.addEventListener('click', function(){
        //console.log(boton.textContent);
        const botonApretado=boton.textContent;
        //display.textContent es lo que esta en la pantalla
        //boton.textContent es esl valor del boton. Si apretamos el boton 5 boton.textContent sera 5 
        if(display.textContent.length===15){
            display.style.fontSize='46px';
            return;
        }

        if(boton.id==='IdCe'){
            display.textContent='0';
            return;
        };
        if(boton.id==='IdBorrar'){
                if(display.textContent.length===1){
                    display.textContent='0';
                    return;
                }else{
                    display.textContent=display.textContent.slice(0,-1);
                    return;};
        };//Cierre de llave de 'boton.id===idborrar'
        if(boton.id==='IdIgual'){
            display.textContent=eval(display.textContent);
            return;
        };

        if(display.textContent==='0'){
            display.textContent=botonApretado;
        }else{
            display.textContent+=botonApretado;
        };

    });
});//forEach

let body=document.getElementById('body');
let funciones=document.querySelector('.funciones');

let uno=document.getElementById('1');
let dos=document.getElementById('2');
let tres=document.getElementById('3');
let cuatro=document.getElementById('4');
let cinco=document.getElementById('5');
let seis=document.getElementById('6');
let siete=document.getElementById('7');
let ocho=document.getElementById('8');
let nueve=document.getElementById('9');
let cero=document.getElementById('0');
let sumaColor=document.getElementById('IdSumar');
let restaColor=document.getElementById('IdRestar');
let multiplicacionColor=document.getElementById('IdMultiplicar');
let divisionColor=document.getElementById('IdDividir');
let punto=document.getElementById('IdPunto');
let C=document.getElementById('IdBorrar');

let CE=document.getElementById('IdCe');
let igual=document.getElementById('IdIgual');


let registradorDeCambioDeColor=0;


let colorCondition=['',];
let changeColorRed=document.getElementById('changeColorRed').addEventListener('click', function(){
    registradorDeCambioDeColor=1;
    colorFunction();
})
let changeColorPurple=document.getElementById('changeColorPurple').addEventListener('click', function(){
    registradorDeCambioDeColor=2;
    colorFunction()

});


    function colorFunction(){
    if(registradorDeCambioDeColor===1){// Red
            colorCondition=['#84181f', '#D2232E', '#9f151e', '#e5232f']
    }else{// Purple
            colorCondition=['#F86AEF', '#ee47e4', '#A8349E', '#A51D97']
    }
    body.style.backgroundColor=colorCondition[0];
    //numeros
    uno.style.backgroundColor=colorCondition[1];
    dos.style.backgroundColor=colorCondition[1];
    tres.style.backgroundColor=colorCondition[1];
    cuatro.style.backgroundColor=colorCondition[1];
    cinco.style.backgroundColor=colorCondition[1];
    seis.style.backgroundColor=colorCondition[1];
    siete.style.backgroundColor=colorCondition[1];
    ocho.style.backgroundColor=colorCondition[1];
    nueve.style.backgroundColor=colorCondition[1];
    cero.style.backgroundColor=colorCondition[1];
    //funciones 
    sumaColor.style.backgroundColor=colorCondition[2];
    restaColor.style.backgroundColor=colorCondition[2];
    multiplicacionColor.style.backgroundColor=colorCondition[2];
    divisionColor.style.backgroundColor=colorCondition[2];
    punto.style.backgroundColor=colorCondition[2];
    C.style.backgroundColor=colorCondition[2];
    CE.style.backgroundColor=colorCondition[2];
    igual.style.backgroundColor=colorCondition[2];
    display.style.backgroundColor=colorCondition[3];
 }
