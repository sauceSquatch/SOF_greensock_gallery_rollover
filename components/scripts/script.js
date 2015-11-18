
$(document).ready(function()
{

  TweenLite.to(hover_block, 0, {backgroundSize:"100% 100%"});

  // initBuild();
})

///// INIT
var hover_block = new HoverBlock($('.hover_block')),
totalItems = [];



///// INIT build
// initBuild = function() {
//   hover_block.on('mouseover', onOver);
//   hover_block.on('mouseout', onOut);
// }

function HoverBlock(obj) {

  console.log(totalItems, " totalItems")

  onOver = function(evt) {
    if( obj.is(".clicked" && $(this).is(".hover")) ) {
      // do nothing yet
    } else {
      obj.addClass("hover");
      var headlines = $(".headlines", this)
        subHead = $("h3", this)
        gradient_fade = $(".gradient_fade", this);
      TweenLite.to($('h2', headlines), 0.25, {top:"-29", ease:Quint.easeOut, opacity:1});
      TweenLite.to(this, 0.35, {backgroundSize:"155% 155%", ease:Quint.easeOut});
      TweenLite.to(gradient_fade, 0.35, {opacity:1});
      TweenLite.to(subHead, 0.15, {color:"#FFF"});
    }
  }

  onOut = function(evt) {
    if( obj.is(".clicked" && $(this).not(".hover")) ) {
      // do nothing yet
    } else {
      obj.removeClass("hover");
      var headlines = $(".headlines", this)
        subHead = $("h3", this)
        gradient_fade = $(".gradient_fade", this);
      TweenLite.to($('h2', headlines), 0.15, {top:"0", ease:Power2.easeOut, opacity:0.85});
      TweenLite.to(this, 0.35, {backgroundSize:"100% 100%", ease:Quint.easeOut});
      TweenLite.to(gradient_fade, 0.35, {opacity:0.5});
      TweenLite.to(subHead, 0.35, {color:"#333"});

    }
  }

  obj.on('mouseover', onOver);
  obj.on('mouseout', onOut);
};

