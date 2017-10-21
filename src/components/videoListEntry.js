angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    eachvideo: '<',
    eventhandletwo: '<',
    index: '<'
  },
  // controller: function(){
  //   this.$onInit = function(){
  //     console.log(this)
  //   }
  // },


  templateUrl: "src/templates/videoListEntry.html"
});
