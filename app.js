
let arrData=[];

// window.localStorage.clear();
if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
    render();
  }
 
let footer00=document.getElementById("myDIV");
let name;
let birth;
let userGender;
let phone;
let grade;
let userMajor;
let userImg;


let formSub=document.getElementById("myForm");

formSub.addEventListener("submit",(event)=>{
        event.preventDefault();
        FullName=event.target.name.value;
      DateOfBirth=event.target.birth.value;
       
        phoneNumber=event.target.phone.value;
      grade=event.target.grade.value;
    gender = event.target.gender.value;
    userMajor=event.target.usermajor.value;
    userImg=event.target.userimg.value;
    formSub.reset();
    let student = new Person(FullName,DateOfBirth ,phoneNumber,grade,gender,userMajor,userImg);

    arrData.push(student);
    localStorage.setItem('arrData',JSON.stringify(arrData) );
    render();
});



function Person(FullName,DateOfBirth ,phoneNumber,grade,gender,userMajor,userImg) {
   this.FullName=FullName;
   this.DateOfBirth=DateOfBirth;
   this.phoneNumber=phoneNumber;
   this.grade=grade;
   this.gender=gender;

    this.userMajor = userMajor;
    this.userImg = userImg;
    
  
  }
  function render(){
    for(let i=0;i<arrData.length;i++){
  
      let sdcard= document.getElementById("student_card");
      let divContainer = document.createElement('div');
      let img0 = document.createElement('img');
      img0.src=`${arrData[i].userImg}`;
      let ul = document.createElement("ul");
      let li1= document.createElement("li");
      li1.textContent=`Name: ${arrData[i].FullName}`;
      let li2= document.createElement("li");
      li2.textContent=`Gender: ${arrData[i].gender}`;
      let li3= document.createElement("li");
      li3.textContent=`Number: ${arrData[i].phoneNumber}`;
      let li4= document.createElement("li");
      li4.textContent=`Grade: ${arrData[i].grade}`;
      let li5= document.createElement("li");
      li5.textContent=`Major: ${arrData[i].userMajor}`;


      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);
  
      divContainer.appendChild(img0);
      divContainer.appendChild(ul);
      sdcard.appendChild(divContainer);
  


    }}




// tabel code

// const formSub=document.getElementById("myForm");
// // const userInput=document.getElementById("userInput");

// formSub.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let FullName=event.target.name.value;
//     let DateOfBirth=event.target.birth.value;
   
//     let phoneNumber=event.target.phone.value;
//     let grade=event.target.grade.value;
// let gender = event.target.gender.value;
    
// //    console.log(FullName ,DateOfBirth,phoneNumber,grade,gender);
//     // render(FullName,DateOfBirth,phoneNumber,grade,gender);

//     let table = document.getElementById("tab0");
//     let tr1 = document.createElement("tr");


//     let tdName=document.createElement("td");
//         let tdDateOfBirth=document.createElement("td");
    
      
//         let tdphoneNumber=document.createElement("td");
//         let tdgrade=document.createElement("td");
//         let tdgender=document.createElement("td");
       
    
    
//         tdName.textContent=FullName;
//         tdDateOfBirth.textContent=DateOfBirth;
       
//         tdphoneNumber.textContent=phoneNumber;
//         tdgrade.textContent=grade;
//     tdgender.textContent=gender;
    
//     tdName.classList.add("th0");
//     tdDateOfBirth.classList.add("th0");
//     tdphoneNumber.classList.add("th0");
//     tdgrade.classList.add("th0");
//     tdgender.classList.add("th0");

//     tr1.appendChild(tdName);
//     tr1.appendChild(tdDateOfBirth);
//     tr1.appendChild(tdphoneNumber);
//     tr1.appendChild(tdgrade);
//     tr1.appendChild(tdgender);
//     table.appendChild(tr1);

//     formSub.reset();



//  });



// end tabel code 

const formSub=document.getElementById("myForm");
// const userInput=document.getElementById("userInput");

formSub.addEventListener("submit",(event)=>{
    event.preventDefault();
    let FullName=event.target.name.value;
    let DateOfBirth=event.target.birth.value;
   
    let phoneNumber=event.target.phone.value;
    let grade=event.target.grade.value;
let gender = event.target.gender.value;
    
//    console.log(FullName ,DateOfBirth,phoneNumber,grade,gender);
    // render(FullName,DateOfBirth,phoneNumber,grade,gender);

    let table = document.getElementById("tab0");
    let tr1 = document.createElement("tr");


    let tdName=document.createElement("td");
        let tdDateOfBirth=document.createElement("td");
    
      
        let tdphoneNumber=document.createElement("td");
        let tdgrade=document.createElement("td");
        let tdgender=document.createElement("td");
       
    
    
        tdName.textContent=FullName;
        tdDateOfBirth.textContent=DateOfBirth;
       
        tdphoneNumber.textContent=phoneNumber;
        tdgrade.textContent=grade;
    tdgender.textContent=gender;
    
    tdName.classList.add("th0");
    tdDateOfBirth.classList.add("th0");
    tdphoneNumber.classList.add("th0");
    tdgrade.classList.add("th0");
    tdgender.classList.add("th0");

    tr1.appendChild(tdName);
    tr1.appendChild(tdDateOfBirth);
    tr1.appendChild(tdphoneNumber);
    tr1.appendChild(tdgrade);
    tr1.appendChild(tdgender);
    table.appendChild(tr1);

    formSub.reset();



 });









// function render(FullName,DateOfBirth,phoneNumber,grade,gender){


//     let tdName=document.createElement("td");
//     let tdDateOfBirth=document.createElement("td");

  
//     let tdphoneNumber=document.createElement("td");
//     let tdgrade=document.createElement("td");
//     let tdgender=document.createElement("td");
   


//     tdName.textContent=FullName;
//     tdDateOfBirth.textContent=DateOfBirth;
   
//     tdphoneNumber.textContent=phoneNumber;
//     tdgrade.textContent=grade;
// tdgender.textContent=gender;


//     userInput.appendChild(tdName);
//     userInput.appendChild(tdDateOfBirth);
   
//     userInput.appendChild(tdphoneNumber);
//     userInput.appendChild( tdgrade);
//     userInput.appendChild( tdgrade);
//     userInput.appendChild( tdgender);


//      }




