let sports=["Cricket","Football"]
sports.push("socker",68)
document.write(sports + "<br>")
document.write(sports.length + "<br>")
//--------------------------------------------------------------------------------//

let books=["maths","physics","chemistry"];
books.pop()
document.write(books + "<br>")
//--------------------------------------------------------------------------------------//

let states=["delhi","Mumbai","Hyd"]
states.shift()
document.write(states)

//----------------------------------------------------------------------------------//

// let state=["delhi","mumbai","hyd"]
// let newstates=state.shift()
//  document.write(state + "<br>")
//-----------------------------------------------------------------------------------//
let scores=[22,56,89,105,"amar"]
scores.unshift("suresh",26)
document.write(scores + "<br>")
document.write(scores.length)
//

let score=[10,20,30,40,50,60]
let student=["suresh","murali","nagaraju","Harish"]
document.write(student)
student.forEach(function(item,index){
    document.write(index + 1 + "." +  item + "<br>")
})
//-------------------------------------------------------------------------//
let students=["anil","sunil","bunty"]
let marks=[
    [10,20,30],
    [40,50,60,70],
    [80,90],
    [100,110,120,130,140,150,160,170,180]
]  
    document.write("my expected result:",marks[3][6] + "<br>")


//-------------------------------------------------------------------------//
var sample="This is a string sample text"
document.write(sample.split(" "))
console.log(sample.split(" "))
//------------------------------------------------------------------------//
var stu=" ramesh "
document.write(stu.trim())
console.log(stu.trim())


var name="ramesh"
document.write(name.charAt(5))

//------------------------------------------------------------------------//

for(var a=0;a<=10;a++)
    document.write(a + ")" + "I Love India" + "<br>")

let x=0;
while(x<=10){
    document.write(x + ")" + "Hello Every one" + "<br>")
    x++;
}
//-----------------------------------------------------------------------//
let y=0;
do{
    document.write(y + "This is do-while output" + "<br>")
    console.log("some statement")
    y++;
}while(y<20)



















