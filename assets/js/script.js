
/*
var tarefa = document.getElementById('tarefa');
var listaTarefa = document.getElementById('lista-tarefas');
var lista = []; /*array 

form.addEventListener('submit', function(event){
	event.preventDefault();
	var textoTarefa = tarefa.value;
	lista.push(textoTarefa);
	tarefa.value='';
	addLista(lista);
	verificarLista();
});

function addLista (lista) {
	var listaJSON = JSON.stringify (lista); 
	/* comando acima transforma a variavel em linguagem json, para poder colocar no local storage
	localStorage.setItem('lista', listaJSON);
	
};

function verificarLista (){
	var listaGuardada = localStorage.getItem('lista');
	console.log(listaGuardada);
	if (listaGuardada !=null) {
		listaTarefa.innerHTML='';
		lista=JSON.parse(listaGuardada);
		lista.forEach(function(item){
			var linha = document.createElement('li');
			linha.innerHTML = item;
			listaTarefa.appendChild(linha);
		})
	}
};

verificarLista();*/







