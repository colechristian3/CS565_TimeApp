$(document).ready(function () {
  $('#excelExport').click(function () {
    $('.reportTable').tableExport({ type: 'excel' });
  })
})