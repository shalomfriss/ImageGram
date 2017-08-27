// Write JavaScript here 
"use strict";
class ImageInkwell extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-inkwell img {  position: absolute; -webkit-filter: sepia(0.3) contrast(1.1) brightness(1.1) grayscale(1); filter: sepia(0.3) contrast(1.1) brightness(1.1) grayscale(1); }"+
				"	img-inkwell div { width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-inkwell", ImageInkwell);
