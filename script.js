


function mincost(arr) { 
	 let cost = 0;       
    
        arr.sort(function(a, b){return a - b});
    
		while(arr.length > 1) {
        let sum = arr[0] + arr[1];
        cost += sum;   
        arr = arr.slice(2);
        arr.push(sum);       
        arr.sort(function(a, b){return a - b});
          return cost;
		
        }
 return cost;
}
mincost([4,3,2,6]);
module.exports=mincost;
