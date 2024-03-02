// chap 14-16

// chap 15 (Array 1)

// Q1
// array = [];

// Q2
// pet = ["cat"]

// Q3
// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// Q4
// alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"]
// Length = alphabet.length
// alert("The length of array is: " + Length)

// Q5
// pet = ["cat"]
// pet[1]= ["dog"]
// alert(pet[1])

// chap 16 (Array 2)

// Q1
// pet = ["cat"]
// pet.push("dog")
// alert(pet)

// Q2
// var Alphabet=["h","i","j","k"]
// Alphabet.pop()
// alert(Alphabet)

// Q3
// var Alphabet=["h","j","i","k"]
// Alphabet.push("l", 9 )
// alert(Alphabet)

// chap 16 (Array 3)

// Q1
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.shift()
// alert(sizes)

// Q2
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.unshift("L","XS","XS")
// alert(sizes)

// Q3
// pet = ["cat"]
// pet.unshift("dog")
// alert(pet)

// Q4
// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.splice(2,0,"L")
// alert(sizes)

// Q5
// var sizes = ["S","M","XL","XXL","XXXL"]
// var regSizes = ["S","M","XL"]
// alert(regSizes)

// Q6
// var pets = ["dog","cat","ox","duck","frog"]
// pets.splice(1,3,"horse","hen")
// alert(pets)

// Q7
// var pets = ["dog","cat","ox","duck","frog"];
// pets.splice(1,2)
// alert(pets)

// Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
// pets2 = pets.slice(3,5)
// alert(pets2)

// chap 14-16 Arrays

// Q1
// studentName = []

// Q2
// studentName = []

// Q3
// pets = ["cat"]
// alert(pets)

// Q4
// num = [1,2]
// alert(num)

// Q5
// boolean = [true]
// alert(boolean)

// Q6
// mixedArray = ["cat",1,2,true]
// alert(mixedArray)

// Q7
// education = ["1) SSC <br>", "2) HSC<br>", "3) BCS<br>", "4) BS<br>", "5) BCOM<br>", "6) MS<br>", "7) M. Phil.<br>", "8) PhD<br>"]
// document.write("<h2> Qualifications : </h2> "+education)

// Q8
// var student = ["Michael","John","Tony"]
// var score = [320,230,480]
// percentage0 = [score[0]/500*100]
// percentage1 = [score[1]/500*100]
// percentage2 = [score[2]/500*100]
// document.write("Score of Micheal is "+score[0]+ ". percentage : " +percentage0 + "% <br>")
// document.write("Score of John is "+score[1]+ ". percentage : " +percentage1 + "% <br>")
// document.write("Score of Tony is "+score[2]+ ". percentage : " +percentage2 + "% <br>")

// Q9
// a
// color = prompt("Enter color")
// array = [color, "red","green","blue"]
// document.write(array)
// b
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// document.write(array)
// c
// color = prompt("Enter color")
// color2 = prompt("Enter another color")
// array = ["red","green","blue",color,color2]
// document.write(array)
// d
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// array = array.splice(1)
// document.write(array)
// e
// color = prompt("Enter color")
// array = ["red","green","blue",color]
// array.splice(0,2)
// document.write(array)
// f
color = prompt("Enter color")
index = prompt("Enter index")
array = ["red","green","blue"]
if(index == 0){
    document.write(color," red ","green ","blue")
}else if(index == 1){
    document.write("red ",color," green ","blue")
}else if(index == 2){
    document.write(" red ","green ",color," blue")
}else if(index == 3){
    document.write("red ","green ","blue ",color)
}else{
    document.write("Invalid index")
}


// Q10
// score = [320,230,480,120]
// sortedScore = [120,230,320,120]
// document.write("Scores of students : "+ score + "<br>Ordered score of students : "+sortedScore)

// Q11
// cities = ["Islamabad","Karachi","Lahore","Peshawar","Quetta"]
// document.write("cities list : <br> "+cities)
// selectedCities = [cities[0],cities[4]]
// document.write("<br><br><br> Selected cities list :<br> "+selectedCities)

// // Q12
// array = ["This", "is", "my", "cat"]
// document.write("Array : <br>"+array)
// array2 = array.join(" ")
// document.write("<br><br>string : <br>"+array2)

// Q13
// devices = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br>"+devices) 
// document.write("<br><br>out : <br>" +devices[0])
// document.write("<br>out : <br>" +devices[1])
// document.write("<br>out : <br>" +devices[2])
// document.write("<br>out : <br>" +devices[3])

// Q14
// devices = ["keyboard","mouse","printer","monitor"]
// document.write("devices : <br>"+devices)
// document.write("<br><br>out : <br>" +devices[3])
// document.write("<br>out : <br>" +devices[2])
// document.write("<br>out : <br>" +devices[1])
// document.write("<br>out : <br>" +devices[0])

// Q15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>")
// document.write("<option>"+ phone[0] +"</option>")
// document.write("<option>"+ phone[1] +"</option>")
// document.write("<option>"+ phone[2] +"</option>")
// document.write("<option>"+ phone[3] +"</option>")
// document.write("<option>"+ phone[4] +"</option>")
// document.write("<option>"+ phone[5] +"</option>")
// document.write("</select>")


