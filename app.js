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






