var splide = new Splide( '.splide', {
	type    : 'loop',
	perPage : 6,
	autoplay: true,
	pagination: false,
  } );
  
  splide.mount();
  
//   splide.mount();
//   new Splide( '.splide', {
// 	classes: {
// 		  pagination: 'splide__pagination your-class-pagination',
// 		  page      : 'splide__pagination__page your-class-page',
// 	},
//   } );


  // Agregamos listener para las imagenes
  const overlay = document.getElementById('overlay');
  document.querySelectorAll('.contenedor-flex .splide__track .splide__list .splide__slide img').forEach((elemento) => {
	
	const ruta = elemento.getAttribute('src');
	
		  elemento.addEventListener('click', () => {			
		  const ruta = elemento.getAttribute('src');		  
		  const descripcion = elemento.parentNode.dataset.descripcion;
		//   console.log(descripcion)
		  const titulo = elemento.parentNode.dataset.titulo;
		  const topografico = elemento.parentNode.dataset.topografico;
		  const video1 = elemento.parentNode.dataset.trailer;
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

	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});






