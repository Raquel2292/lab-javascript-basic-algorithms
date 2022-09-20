console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Paco"
console.log("The driver's name is " + hacker1);


let hacker2 = "Pedro";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, tiene" + hacker1.length + "caracteres")
}
else if(hacker1.length < hacker2.length){
    console.log ("the navigator has the longest name tiene " + hacker2.length + " caracteres" )
}
else {
    console.log ("Wow, you both have equally long names")
};

// Iteration 3: Loops
let capitalName = "";
 for (let i = 0; i < hacker1.length; i++){
    capitalName += hacker1[i].toUpperCase() + " ";
 }
 console.log(capitalName)

 let reverseOrder = "";
  for (let i = hacker2.length -1; i >= 0; i--){
    reverseOrder += hacker2[i];
  }
  console.log(reverseOrder)

  if (hacker1 < hacker2){
    console.log(hacker1 + " goes first")
    console.log(hacker2 + " goes first definitely")
  }
  else if(hacker2 < hacker1){
    console.log(hacker2 + " goes first")
    console.log(hacker1 + " goes first definitely")
  }
  else{
    console.log("What?! You both have the same name?")
  }

  //BONUS TIME! BONUS1
  let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum consequat metus a elementum. Ut eu molestie lacus. Duis erat justo, sagittis a molestie nec, hendrerit non orci. Pellentesque iaculis neque lectus, ut porttitor est feugiat non. Curabitur tempor arcu facilisis metus rhoncus accumsan. Cras rutrum libero vel venenatis volutpat. Aenean ut purus justo. In laoreet erat non diam laoreet, eu tempor massa condimentum. Integer vitae purus viverra, ultricies diam a, convallis arcu. Nam ex quam, mollis id tortor auctor, varius suscipit turpis. Proin libero orci, elementum non mauris id, blandit condimentum metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Integer finibus leo nec ex aliquam efficitur. Sed sollicitudin blandit dui, at convallis justo fringilla sit amet. Cras porttitor laoreet commodo. Maecenas iaculis mollis justo, id egestas dui laoreet in. Ut lobortis magna diam, sit amet ultrices ante sollicitudin in. Nunc pulvinar metus nisi, quis mattis turpis facilisis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse imperdiet auctor diam, id tincidunt est dictum non. Integer eget nunc vulputate, tempus nibh ut, euismod risus. Sed vestibulum dui lacus, sed suscipit lectus molestie eu. Mauris blandit ligula sed hendrerit posuere. Sed hendrerit volutpat nisi, vitae suscipit sem ornare vel. Maecenas aliquet, ipsum nec commodo tincidunt, metus ex lobortis leo, non viverra diam elit at est. Donec sed lectus iaculis purus tristique feugiat in eu nulla. Vestibulum pretium eros tincidunt mauris molestie tempus. Duis volutpat venenatis ante eu rhoncus. Nulla facilisi. Nam risus eros, ultricies ac tempor et, tristique at ipsum. Nulla porta lorem sed faucibus molestie. Sed convallis eleifend arcu ac suscipit. Aliquam iaculis ex tellus, quis efficitur sem bibendum vel. Vivamus iaculis finibus eros, in ultricies turpis commodo quis. Vivamus turpis lacus, porta id aliquet sit amet, suscipit vitae sem. Praesent finibus porta nunc non cursus. Nunc volutpat suscipit eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec suscipit luctus nunc. Quisque hendrerit odio id ligula placerat, et bibendum mauris varius.";

  let arr = loremIpsum.split(" ");
  console.log(arr.length)

  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "et"){
        count++;
    }
  }
  console.log(count)

  
  


