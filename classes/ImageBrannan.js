// Write JavaScript here 
"use strict";
class ImageBrannan extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   super.createdCallback();
	   
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-brannan img {  position: absolute; -webkit-filter: sepia(0.5) contrast(1.4); filter: sepia(0.5) contrast(1.4); }"+
				"	img-brannan div { mix-blend-mode: lighten;background-color: rgba(161, 44, 199, 0.31); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
   }
   
}
document.registerElement("img-brannan", ImageBrannan);
