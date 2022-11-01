const grid = new Muuri('.grid', {
	dragEnabled: false,
	layout: {
		rounding: false,
		fillGaps: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
			const titulo = elemento.parentNode.parentNode.dataset.titulo;
			const topografico = elemento.parentNode.parentNode.dataset.topografico;
			const video1 = elemento.parentNode.parentNode.dataset.trailer;
			const video ="https://www.youtube.com/embed/"+video1+"?rel=0"
			console.log(video1)

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
			document.querySelector('#overlay .titulo').innerHTML = titulo;
			document.querySelector('#overlay .topografico').innerHTML = topografico;
			document.querySelector('#overlay iframe').src = video;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
		
		const video =""
		document.querySelector('#overlay iframe').src = video;
		
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});

$(function(){
    $("#IMG").change(function(event) {
        var x = URL.createObjectURL(event.target.files[0]);
        $("#upload-img").attr("src",x);
        console.log(event);
    });
})
    