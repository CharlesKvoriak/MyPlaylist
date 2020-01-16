let songs = [
              ["Rhythm Section Want Ad", "They Might Be Giants", "https://youtu.be/GgDB2Q_R-Tk"],
              ["Electioneering", "Radiohead", "https://youtu.be/3DtgWrFTtQk"],
              ["Colin Zeal", "Blur", "https://youtu.be/J1RS4JElStk"]
            ];

function fillDiv(){
  console.log("test");
  $("#songs").empty;

  songs.forEach(function(song) {
    $("#songs").append(`<div class="song">
                    <div class="songArtist">
                      <h3>`+song[0]+`</h3>
                      <p>`+song[1]+`</p>
                    </div>
                    <a href="`+song[2]+`" target="_blank" rel="noopener noreferrer">link</a>
                  </div>`);
  });
}