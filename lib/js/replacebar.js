/*Script to add text to the navigation bar in order to 
show correctly when the search options are general or specific to a collection/community */
function replacebar(){
	//mejora el texto de la barra de busqueda
	var x= document.getElementsByClassName("ds-sublist-head");
	var valor= x[1];
	//alert("dale que va"+valor.innerHTML);
	var TextToAdd= valor.innerHTML.substring(5);

	//obtengo elemento a remplazar
	var aux=document.getElementById("aspect_viewArtifacts_Navigation_list_browse").childNodes;
	var miArray = aux;
	var ReplaceTextChilds=miArray[1].childNodes[3].childNodes[3];
	//ReplaceTextChilds es el nodo que contiene los hijos donde se debe añadir el texto
	var hijos= ReplaceTextChilds.childNodes;
	var i=1;
	for(let h of hijos){
		//deberia remplazarse los que tienen indice impar
		//alert(h.innerHTML);
		if(i % 2 === 0){
			//alert(h);
			var enlace = h.childNodes[1];	
			enlace.innerHTML = enlace.innerHTML +" en la "+ TextToAdd;
		}		
		i= i +1;
	}
}
window.addEventListener("load", replacebar);
