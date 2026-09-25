/*Crea un archivo `ejercicio-01.js`. Dentro de él, define un arreglo de objetos llamado `playlist`. Cada objeto representará una 
canción y debe tener las siguientes propiedades: `titulo` (string), `artista` (string) y `duracion` (número en segundos).
Agrega al menos 10 canciones a la `playlist`. Luego, utiliza un bucle `forEach` para imprimir en la consola el título y el 
artista de cada canción. */

const playlist = [
  {
    titulo: "Billie Jean",
    artista: "Michael Jackson",
    duracion: 294
  },
  {
    titulo: "Beat It",
    artista: "Michael Jackson",
    duracion: 258
  },
  {
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    duracion: 354
  },
  {
    titulo: "Don't Stop Me Now",
    artista: "Queen",
    duracion: 209
  },
  {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    duracion: 200
  },
  {
    titulo: "As It Was",
    artista: "Harry Styles",
    duracion: 167
  },
  {
    titulo: "Levitating",
    artista: "Dua Lipa",
    duracion: 203
  },
  {
    titulo: "Bad Guy",
    artista: "Billie Eilish",
    duracion: 194
  },
  {
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    duracion: 234
  },
  {
    titulo: "Uptown Funk",
    artista: "Mark Ronson ft. Bruno Mars",
    duracion: 270
  }
];


for (const cancion of playlist) {
    
    console.log(`Titulo: ${cancion.titulo}  |  Artista: ${cancion.artista}`)

}

