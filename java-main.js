// Two back slashes are a single line comment.

/*
this is a multi
line comment 
*/

//to print in jave you have to use console.log()
// funcitons are called in the same manner: function_name(inputs)



//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(name){
    if (dog_names.includes(name)){
        return "Matched dog!";
    }  else {
        return "No matches!"
    }
}
console.log(findWords("Max"))




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
*/

Givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
for (var i = Givenarr.length - 1; i >= 0; i--) {
    if (i % 2 == 0)
      Givenarr.splice(i, 1, "even indexes");
  }

console.log(Givenarr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]