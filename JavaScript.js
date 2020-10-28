 var switch_=0
 
 function init() 
 {
	 CreatBoxes();
 }
 
 function CreatBoxes()
 {
	 for(var i=0;i<9;i++)
	 {
	    var box=new MakeBox(i);
	 }
 }
 
 
 function MakeBox(Id)
 {
	 this.id=Id;
	 var IsClicked=false;
	//var AllObj=this;
	 
	 var NewDiv=document.createElement("div");
	 NewDiv.className="Box";
	 IdBoxes.appendChild(NewDiv);
	 //NewDiv.innerHTML+=this.id;
	 
	 
	 var BoxImg=document.createElement("img");
	 BoxImg.src="";
	 
	 NewDiv.appendChild(BoxImg);
	 NewDiv.onclick=function()
	 {
		 if (IsClicked==false)
		 {
			if (switch_==0)
			{
				BoxImg.src="Pictures/CoronaVirus.jpg";
				switch_=1;
				IsClicked=true;
			}
			else
			{
				BoxImg.src="Pictures/Vaccine.jpg";
				switch_=0;
				IsClicked=true;
			}
			IsClicked=true;
		 }
		 
	 }
	
 }