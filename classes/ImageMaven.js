// Write JavaScript here 
"use strict";
class ImageMaven extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-maven img {  position: absolute; -webkit-filter: sepia(0.25) brightness(0.95) contrast(0.95) saturate(1.5); filter: sepia(0.25) brightness(0.95) contrast(0.95) saturate(1.5);}"+
				"	img-maven div { mix-blend-mode: hue; background: rgba(3, 230, 26, 0.2); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-maven", ImageMaven);
