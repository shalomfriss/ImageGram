// Write JavaScript here 
"use strict";
class ImageBooklyn extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   	super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-brooklyn img {  position: absolute;  -webkit-filter: contrast(0.9) brightness(1.1); filter: contrast(0.9) brightness(1.1); }"+
				"	img-brooklyn div { mix-blend-mode: overlay; -webkit-radial-gradient(circle, rgba(168, 223, 193, 0.4) 70%, #c4b7c8); background: radial-gradient(circle, rgba(168, 223, 193, 0.4) 70%, #c4b7c8); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
		
   }
   
}
document.registerElement("img-brooklyn", ImageBooklyn);
