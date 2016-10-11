/*script to initialize the item send form.
It modifies what fields of the form are visible acording to the item type combobox.
Controls that some items have value when the form is send
It also realizes validations of those fields.
And sets defaults values for some items.

Special Fields:
	Video URI: only visible if the type of item is video
	Lenguaje de programacion y SO: only visible if the type of item is software
Validations:
	Video URI: debe ser una url de un video en youtube.
	Nombre, docente responsable ... solo pueden ser nombres
Valores por defecto:
	fecha: fecha de hoy
	editor: Facultad de informatica
*/
function specialFields(){
    //maneja los campos especiales segun como va cambiando el tipo del item
    // sType is the TYPE combobox
    var sType =document.getElementById("aspect_submission_StepTransformer_field_dc_type");
    var selectedOption;
    if(sType.selectedIndex==-1){
       	selectedOption = "null";
	}
    else{
    	selectedOption = sType.options[sType.selectedIndex].value;
    }
    var videoListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_video_uri").parentNode.parentNode;
    var lenguajeListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje").parentNode.parentNode;
    var sistemaOperativoListItem =document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_sistemaOperativo").parentNode.parentNode;
    if(selectedOption == "Video"){
	//if the selected option is video I reset the options for the sofware fields and hide them
	videoListItem.style.display ="inherit";
	//videoListItem.getElementsByClassName("ds-form-content")[0];


	sistemaOperativoListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';
	sistemaOperativoListItem.style.display = "none";	

	lenguajeListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';		
	lenguajeListItem.style.display = "none";
    }
    else{
      if(selectedOption == "Software"){	
	//if the selected option is sotfware I reset the options for the video field and hide it
	videoListItem.getElementsByClassName("ds-form-content")[0].children[0].value='';
	videoListItem.style.display ="none";
	sistemaOperativoListItem.style.display = "inherit";
	lenguajeListItem.style.display = "inherit";
	}
      else{	
	//if the selected option is neither sotfware  nor video I reset all theirs options and hide them
	videoListItem.getElementsByClassName("ds-form-content")[0].children[0].value='';
	videoListItem.style.display ="none";
	sistemaOperativoListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';
	sistemaOperativoListItem.style.display = "none";	

	lenguajeListItem.getElementsByClassName("ds-form-content")[0].children[0].value= '';		
	lenguajeListItem.style.display = "none";
   	}	
    }
}
    	
function caseMes(mm){
	var mes=0
	switch (mm) {
	    case "01":
		mes = "1";
		break;
	    case "02":
		mes = "2";
		break;
	    case "03":
		mes = "3";
		break;
	    case "04":
		mes = "4";
		break;
	    case "05":
		mes = "5";
		break;
	    case 06:
		mes = "6";
		break;
	    case 07:
		mes = "7";
		break;
	    case "08":
		mes = "8";
		break;
	    case "09":
		mes = "9";
		break;
	    case "10":
		mes = "10";
		break;
	    case "11":
		mes = "11";
		break;
	    case "12":
		mes = "12";
		break;
	
	}

	  return mes;
} 
/*<span class="error"></span>*/
function initializeDefaults(){
	var editorInput = document.getElementById("aspect_submission_StepTransformer_field_dc_publisher");
	editorInput.value= 'Facultad de Informtica';
	
	var idiomaCombobox = document.getElementById("aspect_submission_StepTransformer_field_dc_language_iso");
	idiomaCombobox.selectedIndex = 3;//seteo el idioma por defecto en español
	


	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	}
	var fecha_dia = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_day");
	var fecha_mes = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_month");
	var fecha_anio = document.getElementById("aspect_submission_StepTransformer_field_dc_date_issued_year"); 
	fecha_dia.value= dd;
	fecha_mes.selectedIndex = caseMes(mm);
	fecha_anio.value= yyyy;
}
function validarForm(){
  //obtengo el tipo seleccionado del combobox
	/*var sType = document.getElementById("aspect_submission_StepTransformer_field_dc_type");
  var selectedOption;
	var resultado= true;
  if(sType.selectedIndex==-1){
       	selectedOption = "null";
	}
  else{
    selectedOption = sType.options[sType.selectedIndex].value;
	}
	if(selectedOption=="Video"){
 		//var videoListItem = 
		alert(document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_video_uri").parentNode.parentNode);
  	resultado = false;
	}
	if(selectedOption=="Software"){
		var lenguajeListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_lenguaje").parentNode.parentNode;
    var sistemaOperativoListItem = document.getElementById("aspect_submission_StepTransformer_field_unlp-informatica_sistemaOperativo").parentNode.parentNode;	
		resultado = false;
	}*/
//no puedo hacer que se cancele el envio del formulario, revisar
	resultado=false;
	//alert (resultado);
	return resultado;

}
function initialize(){
  initializeDefaults();
  specialFields();
  var tipoBox =document.getElementById("aspect_submission_StepTransformer_field_dc_type");
  tipoBox.addEventListener("change", specialFields);
  var buttonSendForm = document.getElementById("aspect_submission_StepTransformer_field_submit_next");
  buttonSendForm.addEventListener("click",validarForm);
}


window.addEventListener("load", initialize);
