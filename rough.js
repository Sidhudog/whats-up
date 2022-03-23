function getNFTdata() {
  var queryString = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss");
  // Nifty Data
  var cellFunctionDataNft =
    '=IMPORTHTML("https://www.moneycontrol.com/india/indexfutures/nifty/9/2022-03-17/OPTIDX/CE/15150.00/true' +
    queryString +
    '","table",6)';

  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Live_data")
    .getRange("A3")
    .setValue(cellFunctionDataNft);
}
