// Write JavaScript here 
"use strict";
class ImageAmaro extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   super.createdCallback();
	   
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-brannan img {  position: absolute; -webkit-filter: hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5); filter: hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5); }"+
				"	img-brannan div { mix-blend-mode: screen; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
		
   }
   
}
document.registerElement("img-amaro", ImageAmaro);
