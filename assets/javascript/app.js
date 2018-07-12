function toggleMute() {

    var video=document.getElementById("videoId");
  
    if(video.muted){
      video.muted = false;
    } else {
      debugger;
      video.muted = true;
      video.play()
    }
  
  }


// $("#overlay").on('mouseenter', function(){
//     $(this).animate({ margin: -10, width: "+=20", height: "+=20" });
// })
// $("#overlay").on('mouseleave', function(){
//     $(this).animate({ margin: 0, width: "-=20", height: "-=20" });
// })​

