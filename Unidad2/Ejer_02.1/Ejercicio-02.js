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

const playlistMayor= playlist.filter(duracion>180)

const mensaje=playlistMayor.map(cancion=>
  
  console.log(`La canción ${cancion.titulo} de ${cancion.artista} dura ${cancion.duracion} segundos.`)

)