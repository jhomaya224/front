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









//
let producto=JSON.parse(localStorage.getItem('Productos'))|| []

function guardarProducto(){
    localStorage.setItem('Productos', JSON.stringify(producto))
}

function agregarproducto(){
    const Lista = document.getElementById('listaProductos')
    Producto.forEach(producto,index => {
        const div=document.createElementById('div')
        div.className='card';
        div.innerHTML=`
        <span> Numero :${producto.cliente} - Destino : ${producto.solicitado} -:${producto.estado}

        <div class="actions">
                    <button onClick="editarVuelo(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onClick="eliminarVuelo(${index})"><i class="fa-solid fa-trash"></i></button>
                    <button onClick="cambiarEstado(${index})"><i class="fa-solid fa-retweet"></i></button>
                </div>
        `

        Lista.appendChild(div);
    });
}

