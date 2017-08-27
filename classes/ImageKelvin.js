// Write JavaScript here 
"use strict";
class ImageKelvin extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-kelvin img {  position: absolute; -webkit-filter: contrast(1.1) brightness(1.2); filter: contrast(1.1) brightness(1.2);}"+
				"	img-kelvin div { mix-blend-mode: overlay; background: #b77d21; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-kelvin", ImageKelvin);
