// PRODUCTOS ARRAY

const productos = [
    // Deportivos
    {
        id:"auto-1",
    titulo:"auto 1",
    imagen:"https://phantom-marca.unidadeditorial.es/0fa9e4b2433f7eada8f97d2374e54f48/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/05/16517455111875.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-2",
    titulo:"auto 2",
    imagen:"https://media.ambito.com/p/327a47e593ac5e27d1339e532e48475d/adjuntos/239/imagenes/039/935/0039935508/730x0/smart/ferrarijpg.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-3",
    titulo:"auto 3",
    imagen:"https://statics.forbesargentina.com/2022/10/634226acc2b18.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-4",
    titulo:"auto 4",
    imagen:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/19609-maseratimc20cielo-dynamic-1653551091.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-5",
    titulo:"auto 5",
    imagen:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lamborghini-aventador-lp-780-4-ultimae-1-1625667550.jpg?crop=0.777xw:0.691xh;0.0856xw,0.171xh&resize=1200:*",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-6",
    titulo:"auto 6",
    imagen:"https://www.cocheglobal.com/uploads/s1/10/07/55/81/nuevo-lamborghini-sian-roadster-hibrido.jpeg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-7",
    titulo:"auto 7",
    imagen:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/one-off/veneno-roadster/slider/veneno-roadster.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

    {
        id:"auto-8",
    titulo:"auto 8",
    imagen:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg",
    categoria:{
        nombre: "deportivos",
        id: "deportivos"
    },
    precio:"300000"
    },

        // TODOTERRENOS
    {
        id:"auto-9",
    titulo:"auto 9",
    imagen:"https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20220929_0001/full-original.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-10",
    titulo:"auto 10",
    imagen:"https://extramotor.com/wp-content/uploads/2019/11/ferrari-suv.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-11",
    titulo:"auto 11",
    imagen:"https://www.elcarrocolombiano.com/wp-content/uploads/2022/09/20220913-FERRARI-PUROSANGUE-PORTADA-1.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-12",
    titulo:"auto 12",
    imagen:"https://www.elcarrocolombiano.com/wp-content/uploads/2019/09/20190918-FERRARI-PUROSANGUE-SUV-2022-PRIMEROS-DATOS-01AA.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-13",
    titulo:"auto 13",
    imagen:"https://media.revistagq.com/photos/5d358f25e887bb000828e8b4/master/pass/Ferrari-SUV-Purosangue.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-14",
    titulo:"auto 14",
    imagen:"https://cdn.drivek.com/configurator-imgs/cars/es/800/MASERATI/LEVANTE/40008_SUV-5-DOORS/maserati-levante-2021-side-front.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-15",
    titulo:"auto 15",
    imagen:"https://www.autobild.es/sites/autobild.es/public/dc/fotos/Lamborghini-Urus-2019-C01.jpg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    },

    {
        id:"auto-16",
    titulo:"auto 16",
    imagen:"https://www.autobild.es/sites/autobild.es/public/dc/fotos/Maserati_Levante_MY2103_0.jpeg",
    categoria:{
        nombre: "todoterrenos",
        id: "todoterrenos"
    },
    precio:"300000"
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos")

const botonesCategorias = document.querySelectorAll(".boton-categoria")

const tituloPrincipal = document.querySelector("#titulo-principal")

let botonesAgregar = document.querySelectorAll(".producto-agregar")

const numerito = document.querySelector("#numerito")


// CARGAR PRODUCTOS

function cargarProductos (productosElegidos) {
    
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">agregar</button>
            </div>
        `;
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);


// CAMBIAR ACTIVE CON CLICKS Y CARGAR PRODUCTOS DE CATEGORIAS

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach( boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todos-los-productos"){
            const productoCategoria = productos.find( producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter( producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText ="Todos los Autos"
            cargarProductos(productos);
        }
            
        
    })
});

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito();
} else{
    productosEnCarrito = [];
}


function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito
}
