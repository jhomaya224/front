const fechahoy= new Date();
const opciones ={day:'2-digit',month:'2-digit',year:'numeric'}
document.getElementById('fecha').textContent=fechahoy.toLocaleDateString('es-Es',opciones)

let pedido=JSON.parse(localStorage.getItem('pedidos'))|| []

function guardarPedido(){
    localStorage.setItem('pedidos', JSON.stringify(pedido))
}

function mostrarpedido(){
    const Lista = document.getElementById('listaPedidos')
        Lista.innerHTML = '';
    pedido.forEach((pedidos,index) => {
        const div=document.createElement('div')
        div.className='card';
        div.innerHTML=`
        <span> Nombre :${pedidos.nombre} - Producto : ${pedidos.producto} - Estado:${pedidos.estado}

        <div class="actions">
                    <button onClick="EditarPedido(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick="EliminarPedido(${index})"><i class="fa-solid fa-trash"></i></button>
                    <button onClick="cambiarEstado(${index})"><i class="fa-solid fa-retweet"></i></button>
                </div>
        `

        Lista.appendChild(div);
    });
}

function agregarpedido(){
    const nombre=document.getElementById('Cliente').value
    const producto=document.getElementById('productosolicitado').value
    if (nombre && producto){
        pedido.push({nombre, producto, estado:'Pendiente'})
        guardarPedido();
        mostrarpedido();
        document.getElementById('Cliente').value=''
        document.getElementById('productosolicitado').value=''
    }

}

function EditarPedido(index){
    const pedidos=pedido[index]
    const Nuevocliente=prompt('Nuevo nombre del cliente',pedidos.nombre)
    const nuevopedido=prompt('Nuevo pedido', pedidos.producto)

    if (Nuevocliente && nuevopedido){
        pedido[index].nombre=Nuevocliente;
        pedido[index].producto=nuevopedido;
        guardarPedido()
        mostrarpedido()
    }

}

function EliminarPedido(index){
    if(confirm('Desea eliminar el pedido?')){
        pedido.splice(index,1)
        guardarPedido();
        mostrarpedido();
    }
}
function cambiarEstado(index) {
    const estados = ['Cocinando', 'empacando', 'En camino', 'llego a su destino'];
    let estadoActual = pedido[index].estado || pedido[index].Estado;
    let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
    pedido[index].estado = nuevoEstado;
    delete pedido[index].Estado;
    guardarPedido();
    mostrarpedido();
}

let Producto = JSON.parse(localStorage.getItem('Productos')) || [];

function guardarProducto() {
    localStorage.setItem('Productos', JSON.stringify(Producto));
}
function mostrarproducto() {
    const Lista = document.getElementById('listaProductos');
    Lista.innerHTML = '';

    Producto.forEach((prod, index) => {
        const div = document.createElement('div');
        div.className = 'card';

        div.innerHTML = `
            <span> Nombre: ${prod.nombre} - Precio: ${prod.precio} - Estado: ${prod.estado} </span>
            <div class="actions">
                <button onClick="EditarProducto(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick="EliminarProducto(${index})"><i class="fa-solid fa-trash"></i></button>
                <button onClick="cambiarEstadoProducto(${index})"><i class="fa-solid fa-retweet"></i></button>
            </div>
        `;

        Lista.appendChild(div);
    });
}

function agregarProducto() {
    const nombre = document.getElementById('nombreproducto').value;
    const precio = document.getElementById('precio').value;

    if (nombre && precio) {
        Producto.push({
            nombre,
            precio,
            estado: 'Disponible'
        });

        guardarProducto();
        mostrarproducto();

        document.getElementById('nombreproducto').value = '';
        document.getElementById('precio').value = '';
    }
}

function EditarProducto(index) {
    let nuevoNombre = prompt("Nuevo nombre:", Producto[index].nombre);
    let nuevoPrecio = prompt("Nuevo precio:", Producto[index].precio);

    if (nuevoNombre && nuevoPrecio) {
        Producto[index].nombre = nuevoNombre;
        Producto[index].precio = nuevoPrecio;
        guardarProducto();
        mostrarproducto();
    }
}

function EliminarProducto(index) {
    Producto.splice(index, 1);
    guardarProducto();
    mostrarproducto();
}
function cambiarEstadoProducto(index) {
    const estados = ['Disponible', 'No Disponible'];

    let actual = Producto[index].estado;
    let nuevoEstado =
        estados[(estados.indexOf(actual) + 1) % estados.length];

    Producto[index].estado = nuevoEstado;

    guardarProducto();
    mostrarproducto();
}


