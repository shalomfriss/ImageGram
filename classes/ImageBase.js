// Write JavaScript here 
"use strict";
class ImageBase extends HTMLElement {

   constructor() {
       super();
   }
   
   
   
   collect(){
    	var div = this.children[1];
		var img = this.children[0];
	
		for(var i = 0; i < this.attributes.length; i++)
		{
			var att = this.attributes[i];
			img.setAttribute(att.name, att.value);
		}
   }
   
   
   
   createdCallback(){
	   this.innerHTML = ""+
			"<img/><div></div>"+
        	"";
		 
		this.collect();
   }
   
}
