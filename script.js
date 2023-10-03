let NotasInput=document.getElementById("notas");
let BotonEnviar=document.getElementById("btn");
let ContainerLista=document.getElementById("textoContainer");
let ApiURL='https://picsum.photos/100';

BotonEnviar.addEventListener("click", (e)=>{
    e.preventDefault();

    let MostrarNotas=NotasInput.value
    
    let CrearEspacioNota=document.createElement("div") //Crear div que contenga las notas, imagen y botones

    let Imagen=document.createElement("img")
    Imagen.src=ApiURL //Al elemento "img" se le asigna una imagen de la API

    let NotaParrafo=document.createElement("p") 
    NotaParrafo.textContent = `Nota: ${MostrarNotas}`;//El texto redactado en el campo de texto

    //Botones de eliminar y completar 
    let BotonCompletar=document.createElement("button");
    BotonCompletar.textContent = "Completar";
    let BotonEliminar=document.createElement("button");
    BotonEliminar.textContent = "Eliminar";

    CrearEspacioNota.appendChild(NotaParrafo)
    CrearEspacioNota.appendChild(Imagen)
    CrearEspacioNota.appendChild(BotonCompletar)
    CrearEspacioNota.appendChild(BotonEliminar)

    ContainerLista.appendChild(CrearEspacioNota)

    NotasInput.value='' //Se limpia el campo de texto luego de enviar lo escrito
});