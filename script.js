


function mincost(arr) { 
    let cost = 0;
    
    arr.sort(function(a, b){return a - b});
    arr.forEach(()=>{
		while(arr.length > 1) {
        let sum = arr[0] + arr[1];
        cost += sum;
        
        // Remove the first two elements and add their sum
        arr = arr.slice(2);
        arr.push(sum);
        
        // Sort the array again
        arr.sort(function(a, b){return a - b});
	})
  
    }
    
    return cost;
}
mincost();
module.exports=mincost;
