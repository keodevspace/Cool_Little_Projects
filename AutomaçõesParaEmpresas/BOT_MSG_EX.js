var SLACK_TOKEN = 'MY_SLACK_TOKEN';

function sendToSlack(channel, message) {
  var url = 'https://slack.com/api/chat.postMessage';
  var payload = {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + SLACK_TOKEN,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({
      channel: channel,
      text: message
    })
  };
  
  var response = UrlFetchApp.fetch(url, payload);
  Logger.log(response.getContentText());
}

function sendMessageFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // nome da planilha
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) { 
    var channel = '@username'; // nome do canal
    var message = "Mensagem: " + data[i][0] + "\nHora do Envio: " + data[i][1] + "\nDia do Envio: " + data[i][2] + "\n" + data[i][3];
    sendToSlack(channel, message);
  }
}