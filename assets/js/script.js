
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
	}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

setInterval (function(){
	plusSlides(1);
	
},3000);


var botaomalte = document.getElementById('botaomalte');
var carrossel = document.getElementById('carrossel');
var maltes = document.getElementById('maltes');

botaomalte.addEventListener ('click', function() {
	carrossel.classList.add("desligado"); 
	maltes.classList.remove("desligado"); 
	/* toggle add ou remove a classe */
})



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







