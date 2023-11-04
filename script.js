function decimalToBinary(num) {
	//Write you code here
	var dupnum=num;
		  var str="";
		  var newString = "";
		  var rem;
	      var extra;
	  while(dupnum>1){
		  rem=dupnum%2;//0,1,0
		  extra=dupnum-rem;//10,4,2
		  str=str.concat(rem);//0101
		  dupnum=extra/2;//5,2,1
	  }
	
	  if(dupnum==0){
		 str=str.concat(0); 
	}
	else if(dupnum==1){
		 str=str.concat(1);
	}
	 	
		for (var i = str.length - 1; i >= 0; i--) {
			newString += str[i];
		}
		return newString;	  
		
  }
  // let strNum=prompt("enter number");
  // let num=Number(strNum);
  // let ans=decimalToBinary(num);
  // console.log(ans);
  window.decimalToBinary = decimalToBinary;
  