let eliminar = document.querySelector('.eliminar');
let volver = document.querySelector('.volver');

eliminar.addEventListener('click', (e) => {
	e.preventDefault();

    let id = document.getElementById('idNoticia').value;

  	fetch(`/noticia/${id}`, {
  		method: 'DELETE'
  	})
  	.then((response) => {
  		if(response.ok) {
  			window.location = "/noticias/noticias.html";
  		}
  	});
});

volver.addEventListener('click', (e) => {
	window.location = "/noticias/noticias.html";
});