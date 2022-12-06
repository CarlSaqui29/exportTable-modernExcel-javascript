function exportTableToExcel(transactionsTable, filename = '') {
  var fileExtention = 'xlsx';
  var tableSelect = document.getElementById(transactionsTable);
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return XLSX.writeFile(wb, filename+"."+fileExtention || ('file.' + (fileExtention || 'xlsx')));
}