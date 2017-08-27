// Write JavaScript here 
"use strict";
class ImageAden extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   super.createdCallback();
	   
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-aden img {  position: absolute; -webkit-filter: hue-rotate(-20deg) contrast(0.9) saturate(0.85) brightness(1.2); filter: hue-rotate(-20deg) contrast(0.9) saturate(0.85) brightness(1.2); }"+
				"	img-aden div { mix-blend-mode: darken; background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent); background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
	   
        
   }
   
}
document.registerElement("img-aden", ImageAden);
