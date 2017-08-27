// Write JavaScript here 
"use strict";
class ImageGingham extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-gingham img {  position: absolute; -webkit-filter: brightness(1.05) hue-rotate(-10deg); filter: brightness(1.05) hue-rotate(-10deg); }"+
				"	img-gingham div { mix-blend-mode: soft-light; background: lavender; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-gingham", ImageGingham);
