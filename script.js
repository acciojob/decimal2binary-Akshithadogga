function decimalToBinary(num) {
  //Write you code here
		let str="";
	if(num=0){
		
		return str+=0; 
	}
	else if(num=1){
		return str+=1;
	}
	let ans;
	let div;

	while(num>1){
		ans=num%2//1
		div=num-ans//6
		str+=ans;
		num=num/2;
	}
	return str;
  
}

window.decimalToBinary = decimalToBinary;
