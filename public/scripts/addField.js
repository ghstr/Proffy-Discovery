document.querySelector("#add-time") // Procurar o botao
.addEventListener('click', cloneField) //Quando clicar no botao
// Executar uma acao
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);// Duplicar os campos

    const fields = newFieldContainer.querySelectorAll('input');
    console.log(fields)
    fields.forEach(function(field) {
       field.value =""
    })


    document.querySelector('#schedule-items').appendChild(newFieldContainer); 
     // Colocar na pagina

    

}




  
