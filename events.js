//Modulo Events
/*const EventEmitter = require('events');

console.log(EventEmitter);*/

/**Evento compras*/
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra: $${total}.`);
    console.log(`Numero de productos: ${numProductos}.`);
});

emisorProductos.emit('compra', 600, 5);
