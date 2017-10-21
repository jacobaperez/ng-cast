angular.module('video-player')

.component('app', {

  controller: function() {
    this.videos = window.exampleVideoData;
    this.current = window.exampleVideoData[0];
    // console.log(this.current)

    this.runthisvideo = function(index){
      // console.log(this);
      console.log(this.videos[index]);
      this.current = this.videos[index];
      //console.log("this is hopefully new current vid", index)
    };
    this.runthisvideo = this.runthisvideo.bind(this);

  },


  templateUrl: "src/templates/app.html"

});
