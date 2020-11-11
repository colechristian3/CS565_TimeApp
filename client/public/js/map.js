$(document).ready(function () {
  var timeInterval
  var time = $("#time")
  timeInterval = setInterval(function () {
    var currentTime = date.format(new Date(), 'hh:mm:ss A')
    time.text(currentTime)
    console.log(timer)
  }, 1000)

  $(document).blur(function () {
    clearInterval(timeInterval)
  })

})