// Write JavaScript here 
"use strict";
class ImageEarlybird extends ImageBase {

   constructor() {
       super();
   }
   
   createdCallback(){
	   
	   super.createdCallback();
	   
		var img = this.children[0];
		img.onload = function(){
			this.innerHTML += "<style>"+
				"	img-earlybird img {  position: absolute;  -webkit-filter: contrast(0.9) sepia(0.2); filter: contrast(0.9) sepia(0.2); }"+
			"	img-earlybird div { mix-blend-mode: overlay; background: -webkit-radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%); background: radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%); width: " + img.clientWidth + "; height: " + img.clientHeight + ";  z-index:2;}"+
			"</style>";
		}
		
   }
   
}
document.registerElement("img-earlybird", ImageEarlybird);
