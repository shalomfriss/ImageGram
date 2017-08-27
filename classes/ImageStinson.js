// Write JavaScript here 
"use strict";
class ImageStinson extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-stinson img {  position: absolute; -webkit-filter: contrast(0.75) saturate(0.85) brightness(1.15); filter: contrast(0.75) saturate(0.85) brightness(1.15); }"+
				"	img-stinson div { mix-blend-mode: soft-light; background: rgba(240, 149, 128, 0.2);  width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-stinson", ImageStinson);
