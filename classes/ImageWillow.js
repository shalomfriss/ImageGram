// Write JavaScript here 
"use strict";
class ImageWillow extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-willow img {  position: absolute; -webkit-filter: grayscale(0.5) contrast(0.95) brightness(0.9); filter: grayscale(0.5) contrast(0.95) brightness(0.9); }"+
				"	img-willow div { mix-blend-mode: color; background-color: #d1cecd; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-willow", ImageWillow);
