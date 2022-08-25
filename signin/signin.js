// alert("This is Just to Check to Functionality of The web Page no Data Breach is Intended !")

const check = () => {
  const firstName = document.getElementById("first").value
  const lastName = document.getElementById("last").value
  const emailAddress = document.getElementById("gmail").value
  const passWord = document.getElementById("pass").value
  const phoneNumber = document.getElementById("phone").value
  
  document.getElementById("info").innerHTML = `Your Name is  ${firstName} ${lastName} and your email address is ${emailAddress}  whose password is ${passWord} and you phone number is ${phoneNumber}`
  
  console.log('Your Name is', firstName, lastName, 'and your email address is', emailAddress, 'whose password is', passWord, 'and your phone number is', phoneNumber)
  
  
}


