function decimalToBinary(num) {
  //Wr
	  var str="";
		  var ans;
	      var div;
	  if(num=0){
		  return str+=0; 
	  }
	  else if(num=1){
		  return str+=1;
	  }
	  while(num>1){
		  ans=num%2//0
		  div=num-ans//2
		  str+=ans;//0
		  num=num/2;
	  }
	  return str;
  
}

window.decimalToBinary = decimalToBinary;
