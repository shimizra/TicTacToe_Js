 var switch_=0
 var countMove=0
 var ArrayBox=[];
 
 function init() 
 {
	 CreatBoxes();
	 ResetArray();
 }
 
 function ResetArray()
 {
	//
    for(var i=0;i<9;i++)
	 {
	    ArrayBox.push(0);
	 }
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
				//
				ArrayBox[Id]="Corona";
			}
			else
			{
				BoxImg.src="Pictures/Vaccine.jpg";
				switch_=0;
				//
				ArrayBox[Id]="Vaccine";
			}
			
			IsClicked=true;
			countMove++
			//
			
			GameLogic();
		 }
	 }
 }
 
 function GameLogic()
 {
	 if((ArrayBox[0]==ArrayBox[1])&&(ArrayBox[1]==ArrayBox[2])&&(!(ArrayBox[0]==0)))
	 {
		 printVicrory(ArrayBox[0]);
	 }
	 else if((ArrayBox[3]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[5])&&(!(ArrayBox[3]==0)))
	 {
		 printVicrory(ArrayBox[3]);
	 }
	 else if((ArrayBox[6]==ArrayBox[7])&&(ArrayBox[7]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[0]==ArrayBox[3])&&(ArrayBox[3]==ArrayBox[6])&&(!(ArrayBox[6]==0)))
	 {
		 printVicrory(ArrayBox[6]);
	 }
	 else if((ArrayBox[1]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[7])&&(!(ArrayBox[7]==0)))
	 {
		 printVicrory(ArrayBox[7]);
	 }
	 else if((ArrayBox[2]==ArrayBox[5])&&(ArrayBox[5]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[0]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[8])&&(!(ArrayBox[8]==0)))
	 {
		 printVicrory(ArrayBox[8]);
	 }
	 else if((ArrayBox[6]==ArrayBox[4])&&(ArrayBox[4]==ArrayBox[2])&&(!(ArrayBox[6]==0)))
	 {
		 printVicrory(ArrayBox[6]);
	 }
	 else if(countMove==9)
	 {
	     alert("Game Over!");
		 location.reload();
	 }
 }
 
 function printVicrory(Winner)
 {
	 alert("The Winner is: " + Winner);
	 location.reload();
 }
 
 function ResetEvent()
 {
	 location.reload();
 }