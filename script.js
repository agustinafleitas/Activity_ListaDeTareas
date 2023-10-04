let NotasInput=document.getElementById("notas");
let BotonEnviar=document.getElementById("btn");
let ContainerLista=document.getElementById("textoContainer");

BotonEnviar.addEventListener("click", async (e)=>{
    e.preventDefault();

    let MostrarNotas=NotasInput.value

    const randomNum = Math.floor(Math.random() * 1000); //Generar un número al azar
    let ApiURL=`https://picsum.photos/200?random=${randomNum}`; //El URL de la API se ajustó para que muestre imágenes de 250px y que muestre una imagen al azar segun la variable creada en la linea 10
    
    try {
        let response = await fetch(ApiURL);
        if (!response.ok) {
            throw new Error("Hubo un error al obtener la imagen.");
        }
        
        const imageBlob = await response.blob(); //"blob" convierte la respuesta de la solicitud fetc en un objeto blob, es decir, representa datos binarios en bruto. Es util para imágenes, audio y archivos.
        const imageUrl = URL.createObjectURL(imageBlob); 

    let CrearEspacioNota=document.createElement("div") //Crear div que contenga las notas, imagen y botones
    CrearEspacioNota.id="TareasRealizar"

    let Imagen=document.createElement("img")
    Imagen.src=imageUrl //Al elemento "img" se le asigna una imagen de la API

    let NotaParrafo=document.createElement("p") 
    NotaParrafo.textContent = `${MostrarNotas}`;//Mostrar el texto redactado en el campo de texto

    //Boton de completar
    let BotonCompletar=document.createElement("button");
    BotonCompletar.textContent = "Completar";
    BotonCompletar.addEventListener("click", (e)=>{
        NotaParrafo.classList.toggle("completado");
    });

    //Boton de eliminar
    let BotonEliminar=document.createElement("button");
    BotonEliminar.textContent = "Eliminar";
    BotonEliminar.addEventListener("click", (e)=>{
        ContainerLista.removeChild(CrearEspacioNota)
    });

    CrearEspacioNota.appendChild(NotaParrafo)
    CrearEspacioNota.appendChild(Imagen)
    CrearEspacioNota.appendChild(BotonCompletar)
    CrearEspacioNota.appendChild(BotonEliminar)

    ContainerLista.appendChild(CrearEspacioNota)

    NotasInput.value='' //Se limpia el campo de texto luego de enviar lo escrito
    }catch(error){
        console.error(error)
    }
});