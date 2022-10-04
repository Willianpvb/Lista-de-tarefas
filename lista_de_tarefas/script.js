//FUNCAO QUE ADICIONA TAREFAS
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
    
    //criar template
    if(taskTitle){

        let tasktitle = document.querySelector("#task-title").value;

        //clonar template
        const template = document.querySelector(".template");

        //cloneNode cria uma copia de um elemento, por sinal é bem literal
        const newTask = template.cloneNode(true);
        
        //adicionar titulo no novo template
        newTask.querySelector(".task-title").textContent = tasktitle;

        //Removendo classes não usadas
        newTask.classList.remove("template");
        newTask.classList.remove("hide");   

        // Adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //Adicionar o removedor de TASKS
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        //Adicionar completador de tasks
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){

            completeTask(this);
        });
        


        //Limpando texto para nova mensagem
        const taskTitle = document.querySelector("#task-title").value = "";

    }
}


//EVENTO PARA ACIONAR O BUTAO QUANDO CLICADO
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(event){

    event.preventDefault();

    addTask();

});

//Completar Tasks
function completeTask(task){
    const taskparent = task.parentNode;

    //função que verifica se existe ou não
    /* nesse caso está sendo usado no CLASLIST para saber se uma 
    classe existe ou não, e se ela existe ele remove e se ele não 
    existe ele adiciona */ 
    taskparent.classList.toggle("done");
}


//Remover tasks
function removeTask(task){
    task.parentNode.remove(true);
}