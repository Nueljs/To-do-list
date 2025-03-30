const tareas = [];

// Función para agregar tarea
function agregar() {
    let tareaInput = document.getElementById('nuevaTarea');
    let tarea = tareaInput.value.trim();
    
    if (tarea === "") {
        alert('Escribe una tarea');
        return;
    }
    
    tareas.push(tarea);
    mostrarTarea();
    tareaInput.value = "";
    console.log(tareas);
}

// Evento onclick para añadir la tarea
const boton = document.getElementById('crearTarea');
boton.addEventListener('click', function(event) {
    event.preventDefault();
    agregar();
});

// Función que muestra las tareas en pantalla
function mostrarTarea() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    
    const row = document.createElement("div");
    row.className = "container-fluid row gy-3";
    
    tareas.forEach((tarea, index) => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center";
        
        const card = document.createElement("div");
        card.className = "card p-3 shadow-sm w-100";
        
        card.innerHTML = `
            <div class="card-body d-flex align-items-center justify-content-between">
                <span class="checkbox me-2">
                    <svg class="unchecked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
                    </svg>
                    <svg class="checked hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
                <p class="flex-grow-1 mb-0 text-truncate" style="max-width: 200px;">${tarea}</p>
                <button class="btn btn-danger btn-sm eliminar-btn ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        `;

        // Alternar iconos de checkbox
        const checkbox = card.querySelector(".checkbox");
        checkbox.addEventListener("click", function() {
            checkbox.querySelector(".unchecked").classList.toggle("hidden");
            checkbox.querySelector(".checked").classList.toggle("hidden");
        });

        // Botón para eliminar la tarea
        card.querySelector(".eliminar-btn").onclick = function() {
            eliminarTarea(index);
            col.remove();
        };

        col.appendChild(card);
        row.appendChild(col);
    });

    taskList.appendChild(row);
}

// Función para eliminar una tarea del array y actualizar la lista
function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTarea();
}
