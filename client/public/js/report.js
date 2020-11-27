$(document).ready(function () {
  //Login code will go here
  $('#excelExport').click(function () {

    $('.reportTable').tableExport({ type: 'excel' });
  })
})