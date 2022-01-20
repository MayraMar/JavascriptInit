const pelis = [
    {
      titulo: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      genero: "Aventura",
      anio: 2003,
      duracionEnMinutos: 401,
      ganoOscar: true,
      calificacionIMDB: 8.9,
    },
    {
      titulo: "Doctor Strange",
      director: "Scott Derrickson",
      genero: "Accion",
      anio: 2016,
      duracionEnMinutos: 115,
      ganoOscar: true,
      calificacionIMDB: 7.5,
    },
    {
      titulo: "The Last Lovecraft: Relic of Cthulhu",
      director: "Henry Saine",
      genero: "Horror",
      anio: 2009,
      duracionEnMinutos: 78,
      ganoOscar: false,
      calificacionIMDB: 5.6,
    },
    {
      titulo: "The Avengers: Age of Ultron",
      director: "Joss Whedon",
      genero: "Accion",
      anio: 2015,
      duracionEnMinutos: 141,
      ganoOscar: false,
      calificacionIMDB: 7.3,
    },
  ];

  let sistemaDePeliculas = {
    peliculas: pelis,
    promedioDeDuracion: function(){
      let sumarDuracion=(i,nro)=>i+nro.duracionEnMinutos;
      duracionTotal=this.peliculas.reduce(sumarDuracion,0);
      return duracionTotal/this.peliculas.length;
    },

    filtrarPorRating: function (ratingMinimo) {
      let filtro=(i)=>i.calificacionIMDB>=ratingMinimo;
      let filtradas=this.peliculas.filter(filtro);
      return filtradas;
    },
    agregarGenero: function (generoBuscado,generoNuevo){
      let agregarGeneroAPeli=function(peli){
        if (peli.genero==generoBuscado){
          peli.genero = peli.genero+', '+generoNuevo
        }
      }
      this.peliculas.map(agregarGeneroAPeli);
      return this.peliculas;
    }
  }

console.log(
`EL promedio de duracion en minutos de las peliculas en sistema es de: ${sistemaDePeliculas.promedioDeDuracion()}`
);
console.log(sistemaDePeliculas.filtrarPorRating(8));
console.log(sistemaDePeliculas.agregarGenero("Accion", "Aventura"));
