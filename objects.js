var playlist = { Kaskade: "Last Chance",
               Illenium: "Beautiful Creatres",
               Gryffin: "Tie Me down"
};

function updatePlaylist(playlist, artist, song_title){
  playlist.artist = song_title;
  return playlist;
}

function removeFromPlaylist(playst, artist){
  delete playlist.Gryffin;
  return playlist;
}