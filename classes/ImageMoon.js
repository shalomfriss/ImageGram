// Write JavaScript here 
"use strict";
class ImageMoon extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
        super.createdCallback();
		
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-moon img {  position: absolute; -webkit-filter: grayscale(1) contrast(1.1) brightness(1.1); filter: grayscale(1) contrast(1.1) brightness(1.1); }"+
				"	img-moon div { mix-blend-mode: lighten; opacity: 0.8; background: #383838; width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
				"</style>";
		}
		
   }
   
}
document.registerElement("img-moon", ImageMoon);
