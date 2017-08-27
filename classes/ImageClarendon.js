// Write JavaScript here 
"use strict";
class ImageClarendon extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   	super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-earlybird img {  position: absolute;  -webkit-filter: contrast(1.2) saturate(1.35); filter: contrast(1.2) saturate(1.35); }"+
				"	img-earlybird div { mix-blend-mode: overlay; background: rgba(127, 187, 227, 0.2); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
		
   }
   
}
document.registerElement("img-clarendon", ImageClarendon);
