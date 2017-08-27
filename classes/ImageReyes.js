// Write JavaScript here 
"use strict";
class ImageReyes extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-reyes img {  position: absolute; -webkit-filter: sepia(0.22) brightness(1.1) contrast(0.85) saturate(0.75); filter: sepia(0.22) brightness(1.1) contrast(0.85) saturate(0.75); }"+
				"	img-reyes div { mix-blend-mode: soft-light; opacity: 0.5; background: #efcdad; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-reyes", ImageReyes);
