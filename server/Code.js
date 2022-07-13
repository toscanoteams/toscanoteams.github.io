function doGet() {

  const response = [{status: "cool!"}];

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);

    // const ss = SpreadsheetApp.getActiveSpreadsheet();
    // const ws = ss.getActiveSpreadsheet();
}

function doPost(e) {

  // Example: {"name": "Joe"}

  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('userDB');
  ws.appendRow([bodyJSON.name]);

}