// Write JavaScript here 
"use strict";
class Image1977 extends HTMLElement {

   constructor() {
       super();
   }
   
   createdCallback(){
	   var w = this.attributes.width.value;
	   var h = this.attributes.height.value;
	   
        this.innerHTML = ""+
	   			"<style>"+
				"	img-1977 img { position:absolute; top: 0px; left: 0px; -webkit-filter: contrast(1.1) brightness(1.1) saturate(1.3); filter: contrast(1.1) brightness(1.1) saturate(1.3); }"+
	   			"	img-1977 div { position:absolute; top: 0px; left: 0px; background: rgba(243, 106, 188, 0.3); mix-blend-mode: screen;  width: " + w + "; height: " + h + "; z-index:2;}"+
				"</style>"+
	   			"<div></div>"+
                 "     <img/>"+
                 "";
				 
	    var div = this.children[1];
		var img = this.children[2];
		
		for(var i = 0; i < this.attributes.length; i++)
		{
			var att = this.attributes[i];
			img.setAttribute(att.name, att.value);
		}
   }
   
}

document.registerElement("img-1977", Image1977);
