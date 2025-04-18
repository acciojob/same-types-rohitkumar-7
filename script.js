function isSameType(value1, value2) {
  //your js code here
	let status = true;
		if(typeof value1 == typeof value2){
				status=true;
		}else{
			status= flase;
		}
		return status;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

