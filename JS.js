 
 function init() 
 {
	 alert("Hello! I am an alert box!!");
	 CreatBoxes();
 }
 
 function CreatBoxes()
 {
	 for(var i=0;i<9;i++)
	 {
	    var NewBox=MakeBox();
	    NewBox.addToHtml();
	 }
 }
 
 function MakeBox()
 {
	 return
	 {
		 //CoronaImage:'Picture/CoronaVirus',
		 //VaccineImage:'Picture/Vaccine',
		 addToHtml:function()
		 {
			 var BoxDiv=document.createElement("div");
			 BoxDiv.className="Box";
			 IdBoxes.appendChild(BoxDiv);
		 }
		 
	 }
	 
 }