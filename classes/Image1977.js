// Write JavaScript here 
"use strict";
class Image1977 extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   super.createdCallback();
	   
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-1977 img {  position: absolute; -webkit-filter: contrast(1.1) brightness(1.1) saturate(1.3); filter: contrast(1.1) brightness(1.1) saturate(1.3); }"+
				"	img-1977 div { mix-blend-mode: screen; background: rgba(243, 106, 188, 0.4); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-1977", Image1977);
