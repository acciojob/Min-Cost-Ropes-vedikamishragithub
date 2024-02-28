function mincost(arr)
{ 
//write your code here
	arr.sort(function(a, b){return a - b});
	arr.forEach((item,i)=>{
		 let sum+=arr;
		if(i<0){
        let cost+=sum;
		}
	})
	
	
	

// return the min cost
	return mincost;
  
}

module.exports=mincost;
