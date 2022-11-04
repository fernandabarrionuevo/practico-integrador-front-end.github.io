const valorTicket = 200;
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#validationDefault04");

const btnBorrar = document.querySelector("#btnBorrar");
const btnResumen = document.querySelector("#btnResumen");
const p = document.querySelector("#parrafo");

function totalPagar(){
    let totalValor = valorTicket * cantidad.value;
    if(categoria.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    } else if(categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    } else if(categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    };

    p.innerHTML = `Total a pagar: $${totalValor}`;
}


//BORRAR
btnBorrar.addEventListener("click", ()=>{
    formulario.reset();
    p.textContent = "Total a pagar: $";

});

//PREVENT DEFAULT

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else{
            event.preventDefault();
            totalPagar();
            
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()