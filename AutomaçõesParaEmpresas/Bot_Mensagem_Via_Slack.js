var SLACK_TOKEN = 'YOU TOKEN';

function getUserIdByEmail(email) {
  var url = 'https://slack.com/api/users.lookupByEmail?email=' + encodeURIComponent(email);
  var response = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + SLACK_TOKEN
    }
  });
  var data = JSON.parse(response.getContentText());
  if (data && data.ok) {
    return data.user.id;
  } else {
    return null;
  }
}

function sendToSlack(channel, message) {
  var url = 'https://slack.com/api/chat.postMessage';
  var payload = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      channel: channel,
      text: message
    }),
    headers: {
      Authorization: 'Bearer ' + SLACK_TOKEN
    }
  };

  var response = UrlFetchApp.fetch(url, payload);
  
  Logger.log(response.getContentText());
}

function sendMessageFromSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AppGranlover'); 
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  for (var i = 1; i < data.length; i++) {
    var email = data[i][0];
    var subject = data[i][1];
    var messageContent = data[i][2];

    var userId = getUserIdByEmail(email); 

    if (userId) {
      var message = subject + "\n" + messageContent;
      sendToSlack(userId, message); 
      Utilities.sleep(1000);
    } else {
      Logger.log("Failed to send message to user: " + email);
    }
  }
}


