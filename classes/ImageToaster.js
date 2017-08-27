// Write JavaScript here 
"use strict";
class ImageToaster extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-toaster img {  position: absolute; -webkit-filter: contrast(1.5) brightness(0.9); filter: contrast(1.5) brightness(0.9); }"+
				"	img-toaster div { mix-blend-mode: screen; background: -webkit-radial-gradient(circle, #804e0f, #3b003b); background: radial-gradient(circle, #804e0f, #3b003b); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-toaster", ImageToaster);
