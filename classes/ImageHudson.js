// Write JavaScript here 
"use strict";
class ImageHudson extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-hudson img {  position: absolute; -webkit-filter: brightness(1.2) contrast(0.9) saturate(1.1); filter: brightness(1.2) contrast(0.9) saturate(1.1); }"+
				"	img-hudson div { mix-blend-mode: multiply; opacity: 0.5; background: -webkit-radial-gradient(circle, #a6b1ff 50%, #342134); background: radial-gradient(circle, #a6b1ff 50%, #342134); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-hudson", ImageHudson);
