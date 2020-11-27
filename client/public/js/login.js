$(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "manual" })
  })

  $('input').focus(function () {
    $(".tooltip").tooltip("hide")
  })

  $("#loginButton").click(function () {
    const username = $("#username").val()
    const password = $("#password").val()

    if (!username && !password) {
      $("#username").tooltip('show')
      $("#password").tooltip('show')
    }
    else if (!username) {
      $("#username").tooltip('show')
    }
    else if (!password) {
      $("#password").tooltip('show')
    }
    else {
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
        .then((response) => {
          return response.json()

        }).then(response => {
          if (response === "200") {
            //set a token
            //validate toke on all subsequent screens
            window.location.href = '/report'
          }
          else {
            $("#badAttempt").text("Invalid login credentials.")
            //bad login attemp
          }
        });
    }
  })


})