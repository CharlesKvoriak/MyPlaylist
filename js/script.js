let songs = [
              {song:"Rhythm Section Want Ad", artist:"They Might Be Giants", url:"https://youtu.be/GgDB2Q_R-Tk"},
              {song:"Electioneering", artist:"Radiohead", url:"https://youtu.be/3DtgWrFTtQk"},
              {song:"Colin Zeal", artist:"Blur", url:"https://youtu.be/J1RS4JElStk"}
            ];



function fillDiv(){
  $("#songs").empty;

  songs.forEach(function(song) {
    $("#songs").append(`<div class="song">
                    <div class="songArtist">
                      <h3>`+song.song+`</h3>
                      <p>`+song.artist+`</p>
                    </div>
                    <a href="`+song.url+`" target="_blank" rel="noopener noreferrer">link</a>
                  </div>`);
  });
}

fillDiv();

$(".submit").click(function(){
  console.log("test");
  // songs.push({song:$(".songname".val()), artist:$(".artist".val()), url:$(".link".val())});
  // fillDiv();
});