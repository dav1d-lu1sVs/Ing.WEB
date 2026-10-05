/* =====================================================
   DATOS INICIALES DE LAS MASCOTAS
===================================================== */

let mascotas = [

    {
        id: 1,
        nombre: "Max",
        edad: 2,
        vacunas: "Completas",
        descripcion: "Un perro amigable buscando un hogar.",
        imagen: "https://www.radiopichincha.com/wp-content/uploads/2024/10/Lola.jpg"
    },

    {
        id: 2,
        nombre: "Luna",
        edad: 1,
        vacunas: "Completas",
        descripcion: "Cariñosa y juguetona.",
        imagen: "https://pae.ec/wp-content/uploads/2022/01/perro2.jpg"
    },

    {
        id: 3,
        nombre: "Rocky",
        edad: 3,
        vacunas: "Pendientes",
        descripcion: "Muy activo y lleno de energía.",
        imagen: "https://pae.ec/wp-content/uploads/2022/01/perro5.jpg"
    }
];

let mascotaEditando = null;
const paginaInicio =
    document.getElementById("pagina-inicio");
const paginaAdmin =
    document.getElementById("pagina-admin");
const modalLogin =
    document.getElementById("modal-login");
const contenedorMascotas =
    document.getElementById("contenedor-mascotas");
const listaAdmin =
    document.getElementById("lista-admin");


function mostrarMascotas() {
    contenedorMascotas.innerHTML = "";
    mascotas.forEach(mascota => {
        const card =
            document.createElement("article");
        card.classList.add("card-mascota");
        card.innerHTML = `
            <img  src="${mascota.imagen}"  alt="${mascota.nombre}" >
            <div class="contenido-card">
                <h2>  ${mascota.nombre}  </h2>
                <p>
                    ${mascota.descripcion}
                </p>
                <button
                    class="btn-informacion"
                    onclick="mostrarInformacion(${mascota.id})"  >
                    INFORMACIÓN
                </button>
            </div>
        `;
        contenedorMascotas.appendChild(card);
    });
}

function mostrarInformacion(id) {
    const mascota =
        mascotas.find(
            mascota => mascota.id === id
        );
   if (!mascota) {
        return;
    }
    console.log("Información de la mascota:");
    console.log("Nombre:", mascota.nombre);
    console.log("Edad:", mascota.edad);
    console.log("Vacunas:", mascota.vacunas);
    console.log("Descripción:", mascota.descripcion);
}

document
    .getElementById("btn-login")
    .addEventListener("click", () => {
        modalLogin.classList.remove("oculto");

    });


/* =====================================================
   CERRAR LOGIN
===================================================== */

document
    .getElementById("cerrar-login")
    .addEventListener("click", () => {

        modalLogin.classList.add("oculto");

    });


/* =====================================================
   LOGIN
===================================================== */

document
    .getElementById("btn-login-confirmar")
    .addEventListener("click", () => {

        const username =
            document
                .getElementById("username")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value
                .trim();


        /*
        Por ahora solamente comprobamos
        que los campos no estén vacíos.
        */

        if (
            username === "" ||
            password === ""
        ) {

            return;

        }


        /*
        Login simulado.

        Más adelante aquí podremos
        conectar el backend.
        */

        modalLogin.classList.add("oculto");

    });


/* =====================================================
   ABRIR ADMIN
===================================================== */

document
    .getElementById("btn-admin")
    .addEventListener("click", () => {

        /*
        Ocultamos inicio
        */

        paginaInicio.classList.add("oculto");


        /*
        Mostramos administrador
        */

        paginaAdmin.classList.remove("oculto");


        /*
        Actualizamos la lista
        */

        mostrarAdmin();


        /*
        Volvemos arriba
        */

        window.scrollTo(0, 0);

    });


/* =====================================================
   VOLVER A INICIO
===================================================== */

document
    .getElementById("admin-inicio")
    .addEventListener("click", () => {

        /*
        Ocultamos administrador
        */

        paginaAdmin.classList.add("oculto");


        /*
        Mostramos inicio
        */

        paginaInicio.classList.remove("oculto");


        /*
        Actualizamos las tarjetas
        */

        mostrarMascotas();


        /*
        Volvemos arriba
        */

        window.scrollTo(0, 0);

    });


/* =====================================================
   MOSTRAR LISTA DE ADMINISTRACIÓN
===================================================== */

function mostrarAdmin() {

    listaAdmin.innerHTML = "";


    mascotas.forEach(mascota => {

        const card =
            document.createElement("div");


        card.classList.add("admin-card");


        card.innerHTML = `

            <div class="admin-info">

                <h2>
                    ${mascota.nombre}
                </h2>

                <p>
                    Edad: ${mascota.edad}
                </p>

                <p>
                    Vacunas: ${mascota.vacunas}
                </p>

                <p>
                    ${mascota.descripcion}
                </p>

            </div>


            <div class="acciones-admin">

                <button
                    class="btn-editar"
                    onclick="editarMascota(${mascota.id})"
                >
                    EDITAR
                </button>


                <button
                    class="btn-eliminar"
                    onclick="eliminarMascota(${mascota.id})"
                >
                    ELIMINAR
                </button>

            </div>

        `;


        listaAdmin.appendChild(card);

    });

}


/* =====================================================
   AGREGAR / GUARDAR CAMBIOS
===================================================== */

document
    .getElementById("btn-agregar")
    .addEventListener("click", () => {


        /* ---------------------------------------------
           OBTENER DATOS DEL FORMULARIO
        --------------------------------------------- */

        const nombre =
            document
                .getElementById("nombre-mascota")
                .value
                .trim();


        const edad =
            document
                .getElementById("edad-mascota")
                .value
                .trim();


        const vacunas =
            document
                .getElementById("vacunas-mascota")
                .value
                .trim();


        const descripcion =
            document
                .getElementById("descripcion-mascota")
                .value
                .trim();


        /* ---------------------------------------------
           COMPROBAR CAMPOS
        --------------------------------------------- */

        if (
            nombre === "" ||
            edad === "" ||
            vacunas === "" ||
            descripcion === ""
        ) {

            /*
            No mostramos alert.

            Simplemente no hacemos nada
            hasta que estén llenos.
            */

            return;

        }


        /* =================================================
           MODO EDITAR
        ================================================= */

        if (mascotaEditando !== null) {


            /*
            Buscamos la mascota que estamos editando
            */

            const mascota =
                mascotas.find(
                    mascota =>
                        mascota.id === mascotaEditando
                );


            if (mascota) {

                /*
                Actualizamos sus datos
                */

                mascota.nombre =
                    nombre;


                mascota.edad =
                    edad;


                mascota.vacunas =
                    vacunas;


                mascota.descripcion =
                    descripcion;

            }


            /*
            Salimos del modo edición
            */

            mascotaEditando = null;


            /*
            Cambiamos el botón nuevamente
            */

            document
                .getElementById("btn-agregar")
                .textContent = "AGREGAR";


            /*
            Ocultamos cancelar
            */

            document
                .getElementById("btn-cancelar-edicion")
                .classList.add("oculto");


            /*
            Limpiamos formulario
            */

            limpiarFormulario();


            /*
            Actualizamos administrador
            */

            mostrarAdmin();


            /*
            Actualizamos página principal
            */

            mostrarMascotas();


            return;

        }


        /* =================================================
           MODO AGREGAR
        ================================================= */


        const nuevaMascota = {

            id: Date.now(),

            nombre: nombre,

            edad: edad,

            vacunas: vacunas,

            descripcion: descripcion,

            /*
            Imagen temporal.

            Después podemos agregar un campo
            para que el administrador suba
            su propia imagen.
            */

            imagen:
                "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"

        };


        /*
        Agregamos la mascota
        */

        mascotas.push(
            nuevaMascota
        );


        /*
        Limpiamos formulario
        */

        limpiarFormulario();


        /*
        Actualizamos administrador
        */

        mostrarAdmin();


        /*
        Actualizamos página principal
        */

        mostrarMascotas();

    });


/* =====================================================
   EDITAR MASCOTA
===================================================== */

function editarMascota(id) {


    /*
    Buscar mascota
    */

    const mascota =
        mascotas.find(
            mascota =>
                mascota.id === id
        );


    if (!mascota) {

        return;

    }


    /*
    Guardamos el ID
    */

    mascotaEditando = id;


    /* ---------------------------------------------
       COLOCAR DATOS EN EL FORMULARIO
    --------------------------------------------- */

    document
        .getElementById("nombre-mascota")
        .value =
        mascota.nombre;


    document
        .getElementById("edad-mascota")
        .value =
        mascota.edad;


    document
        .getElementById("vacunas-mascota")
        .value =
        mascota.vacunas;


    document
        .getElementById("descripcion-mascota")
        .value =
        mascota.descripcion;


    /* ---------------------------------------------
       CAMBIAR BOTÓN
    --------------------------------------------- */

    document
        .getElementById("btn-agregar")
        .textContent =
        "GUARDAR CAMBIOS";


    /* ---------------------------------------------
       MOSTRAR CANCELAR
    --------------------------------------------- */

    document
        .getElementById("btn-cancelar-edicion")
        .classList.remove("oculto");


    /* ---------------------------------------------
       IR AL FORMULARIO
    --------------------------------------------- */

    document
        .querySelector(".formulario-admin")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* =====================================================
   ELIMINAR MASCOTA
===================================================== */

function eliminarMascota(id) {


    /*
    Eliminamos directamente.

    Ya no usamos confirm().
    */

    mascotas =
        mascotas.filter(
            mascota =>
                mascota.id !== id
        );


    /*
    Actualizamos la lista
    */

    mostrarAdmin();


    /*
    Actualizamos inicio
    */

    mostrarMascotas();


    /*
    Si estábamos editando
    esa mascota, cancelamos edición.
    */

    if (mascotaEditando === id) {

        cancelarEdicion();

    }

}


/* =====================================================
   CANCELAR EDICIÓN
===================================================== */

document
    .getElementById("btn-cancelar-edicion")
    .addEventListener("click", () => {

        cancelarEdicion();

    });


function cancelarEdicion() {


    /*
    Dejamos de editar
    */

    mascotaEditando = null;


    /*
    Limpiamos formulario
    */

    limpiarFormulario();


    /*
    Cambiamos botón a AGREGAR
    */

    document
        .getElementById("btn-agregar")
        .textContent =
        "AGREGAR";


    /*
    Ocultamos CANCELAR
    */

    document
        .getElementById("btn-cancelar-edicion")
        .classList.add("oculto");

}


/* =====================================================
   LIMPIAR FORMULARIO
===================================================== */

function limpiarFormulario() {


    document
        .getElementById("nombre-mascota")
        .value = "";


    document
        .getElementById("edad-mascota")
        .value = "";


    document
        .getElementById("vacunas-mascota")
        .value = "";


    document
        .getElementById("descripcion-mascota")
        .value = "";

}


/* =====================================================
   BUSCADOR
===================================================== */

document
    .getElementById("form-busqueda")
    .addEventListener("submit", (event) => {

        /*
        Evitamos que el formulario
        recargue la página
        */

        event.preventDefault();


        /*
        Obtener texto
        */

        const texto =
            document
                .getElementById("buscador")
                .value
                .toLowerCase()
                .trim();


        /*
        Si está vacío,
        mostramos todas.
        */

        if (texto === "") {

            mostrarMascotas();

            return;

        }


        /*
        Filtrar por nombre
        */

        const resultados =
            mascotas.filter(
                mascota =>
                    mascota.nombre
                        .toLowerCase()
                        .includes(texto)
            );


        /*
        Limpiar resultados anteriores
        */

        contenedorMascotas.innerHTML = "";


        /*
        Si no hay resultados
        */

        if (resultados.length === 0) {

            const mensaje =
                document.createElement("p");


            mensaje.classList.add(
                "sin-resultados"
            );


            mensaje.textContent =
                "No se encontraron mascotas.";


            contenedorMascotas.appendChild(
                mensaje
            );


            return;

        }


        /*
        Mostrar resultados
        */

        resultados.forEach(mascota => {

            const card =
                document.createElement("article");


            card.classList.add(
                "card-mascota"
            );


            card.innerHTML = `

                <img
                    src="${mascota.imagen}"
                    alt="${mascota.nombre}"
                >

                <div class="contenido-card">

                    <h2>
                        ${mascota.nombre}
                    </h2>

                    <p>
                        ${mascota.descripcion}
                    </p>

                    <button
                        class="btn-informacion"
                        onclick="mostrarInformacion(${mascota.id})"
                    >
                        INFORMACIÓN
                    </button>

                </div>

            `;


            contenedorMascotas.appendChild(
                card
            );

        });

    });


/* =====================================================
   INICIALIZAR LA PÁGINA
===================================================== */

mostrarMascotas();

mostrarAdmin();