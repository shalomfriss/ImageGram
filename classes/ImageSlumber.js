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
				"	img-slumber img {  position: absolute; -webkit-filter: saturate(0.66) brightness(1.05); filter: saturate(0.66) brightness(1.05); }"+
				"	img-slumber div { mix-blend-mode: soft-light; background: rgba(125, 105, 24, 0.5);  width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-slumber", ImageSlumber);
