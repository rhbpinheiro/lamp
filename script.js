const lamp = document.querySelector('#lamp');
const liga = document.querySelector('.liga');
const desliga = document.querySelector('.desliga');

ligarLamp= (evento) => {
    const elemento = evento.target;
    if(elemento === liga || lamp) {
        lamp.src = 'ligada.jpg';
    }
}
desligarLamp= (evento) => {
    const elemento = evento.target;
    if(elemento === desliga || lamp) {
        lamp.src="desligada.jpg";
    }
}
quebrar = (evento) => {
    const elemento = evento.target;
    lamp.src = 'quebrada.jpg';
}
liga.addEventListener('click', ligarLamp);
desliga.addEventListener('click', desligarLamp);
lamp.addEventListener('mouseover', ligarLamp);
lamp.addEventListener('mouseleave', desligarLamp);
lamp.addEventListener('dblclick', quebrar);
