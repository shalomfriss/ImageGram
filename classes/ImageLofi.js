// Write JavaScript here 
"use strict";
class ImageLofi extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-lofi img {  position: absolute; -webkit-filter: saturate(1.1) contrast(1.5); filter: saturate(1.1) contrast(1.5);}"+
				"	img-lofi div { mix-blend-mode: multiply; background: -webkit-radial-gradient(circle, transparent 70%, #222222 150%); background: radial-gradient(circle, transparent 70%, #222222 150%); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-lofi", ImageLofi);
