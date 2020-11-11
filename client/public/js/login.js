$(document).ready(function(){
$("#loginButton").click(function(){
  const username = $("#username").val()
  const password = $("#password").val()

  fetch("/login-check", {
  method: "post",
  headers: {
    'Content-Type': 'application/json'
  },
  //make sure to serialize your JSON body
  body: JSON.stringify({
    "username": `${username}`,
    "password": `${password}`
  })
  })
  .then( (response) => {
  return response.json()
   //do something awesome that makes the world a better place
  }).then(response => {
  if(response === "200"){
    //set a token
    //validate toke on all subsequent screens
    window.location.href='/report'
  }
  else {
    //bad login attemp
  }
  });
})

})