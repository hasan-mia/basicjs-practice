var friendsAge = [11, 12, 35, 55, 34];
//=======length======// count number of data in array
friendsAge = friendsAge.length;
//=======indexOf()======// findout position of data in array
friendsAge = friendsAge.indexOf(55);
//=======push()======// Add data into array at the last position
friendsAge.push(33);
// ======pop()=======// remove data from array last position
friendsAge.pop();
// ======unshift()=======// Add data into array first position
friendsAge.unshift(99)
    // ======shift()=======// remove data from array first position
friendsAge.shift()
    // Put the remove data from array in a variable and show it
var removeAge = friendsAge.shift()
console.log(removeAge)