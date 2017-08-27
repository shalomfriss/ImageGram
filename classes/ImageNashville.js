// Write JavaScript here 
"use strict";
class ImageNashville extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-nashville img {  position: absolute; -webkit-filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2); filter: sepia(0.2) contrast(1.2) brightness(1.05) saturate(1.2); }"+
				"	img-nashville div { mix-blend-mode: lighten; background: rgba(0, 70, 150, 0.4); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-nashville", ImageNashville);
