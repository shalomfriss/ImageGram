// Write JavaScript here 
"use strict";
class ImageValencia extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-valencia img {  position: absolute; -webkit-filter: contrast(1.08) brightness(1.08) sepia(0.08); filter: contrast(1.08) brightness(1.08) sepia(0.08);}"+
				"	img-valencia div { mix-blend-mode: exclusion; opacity: 0.5; background: #3a0339; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-valencia", ImageValencia);
