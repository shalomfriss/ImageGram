// Write JavaScript here 
"use strict";
class ImageSlumber extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-slumber img {  position: absolute; -webkit-filter: brightness(1.05) sepia(0.2) contrast(0.9) saturate(0.9); filter: brightness(1.05) sepia(0.2) contrast(0.9) saturate(0.9); }"+
				"	img-slumber div { mix-blend-mode: overlay; opacity: 0.6;  width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-slumber", ImageSlumber);
