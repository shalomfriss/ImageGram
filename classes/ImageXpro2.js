// Write JavaScript here 
"use strict";
class ImageXpro2 extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-xpro2 img {  position: absolute; -webkit-filter: sepia(0.3); filter: sepia(0.3); }"+
				"	img-xpro2 div { mix-blend-mode: color-burn; background: -webkit-radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%); background: radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-xpro2", ImageXpro2);
