let cost=0;
 let sum=0;


function mincost(arr)
{ 
//write your code here
	arr.sort(function(a, b){return a - b});
	arr.forEach((item,i)=>{
		 sum+=item;
		if(i>0){
         cost+=sum;
		}
	})
	
	
	

// return the min cost
	return cost;
  
}
mincost();
module.exports=mincost;
