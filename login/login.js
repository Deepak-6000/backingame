// alert("This is Just to Check to Functionality of The web Page no Data Breach is Intended !")

const check = () => {
  const emailAddress = document.getElementById("gmail").value
  const passWord = document.getElementById("pass").value
  
  document.getElementById("info").innerHTML = `Your email address is ${emailAddress}  whose password is ${passWord}`
  
  console.log('Your email address is', emailAddress, 'whose password is', passWord, )
  
  
}


