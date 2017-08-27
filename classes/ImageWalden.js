// Write JavaScript here 
"use strict";
class ImageWalden extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-walden img {  position: absolute; -webkit-filter: brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6);filter: brightness(1.1) hue-rotate(-10deg) sepia(0.3) saturate(1.6); }"+
				"	img-walden div { mix-blend-mode: screen; opacity: 0.3; background: #0044cc; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-walden", ImageWalden);
