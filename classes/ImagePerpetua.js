// Write JavaScript here 
"use strict";
class ImagePerpetua extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-perpetua img {  position: absolute;  }"+
				"	img-perpetua div { mix-blend-mode: soft-light; opacity: 0.5; background: -webkit-linear-gradient(top, #005b9a, #e6c13d); background: linear-gradient(to bottom, #005b9a, #e6c13d);width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-perpetua", ImagePerpetua);
