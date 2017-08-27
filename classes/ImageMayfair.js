// Write JavaScript here 
"use strict";
class ImageMayfair extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-mayfair img {  position: absolute; -webkit-filter: contrast(1.1) saturate(1.1); filter: contrast(1.1) saturate(1.1); }"+
				"	img-mayfair div { mix-blend-mode: overlay; opacity: .4; background: -webkit-radial-gradient(40% 40%, circle, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%); background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-mayfair", ImageMayfair);
