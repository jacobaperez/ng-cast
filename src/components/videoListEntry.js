angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    eachvideo: '<', 
  },



  templateUrl: "src/templates/videoListEntry.html"
});
