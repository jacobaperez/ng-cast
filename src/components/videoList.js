angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    eventhandle : '<'
    //index: '<'
  },

  templateUrl: "src/templates/videoList.html"
});
