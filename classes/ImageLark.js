// Write JavaScript here 
"use strict";
class ImageLark extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-lark img {  position: absolute; -webkit-filter: contrast(0.9); filter: contrast(0.9); }"+
				"	img-lark div { mix-blend-mode: darken; background: rgba(242, 242, 242, 0.8); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-lark", ImageLark);
