var WEBHOOK_URL = 'YOUR_URL_HERE';

function sendToSlack(message) {
  var payload = {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    payload: 'payload=' + encodeURIComponent('{"text": "' + message + '"}')
  };

  var response = UrlFetchApp.fetch(WEBHOOK_URL, payload);
  Logger.log(response.getContentText());
}

function sendMessageFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AppGranlover'); 
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var subject = data[i][1];
    var messageContent = data[i][2];

    var message = subject + "\n" + messageContent;

    // Envia a mensagem para o Slack via Webhook
    sendToSlack(message);
  }
}
