function enviarEmailsPersonalizados() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dados = planilha.getRange("A2:C" + planilha.getLastRow()).getValues(); // ignora cabecalho

  var assunto = "Assunto do Email"; // assunto do email
  var mensagem = "Mensagem do Email"; // mensagem do email

  var agendamento = new Date("2023-08-09T12:00:00"); // data e hora para agendamento

  for (var i = 0; i < dados.length; i++) {
    var nome = dados[i][0];
    var email = dados[i][1];
    var link = dados[i][2];

    var emailTexto = mensagem.replace("{NOME}", nome).replace("{LINK}", link);

    // agendando o envio
    ScriptApp.newTrigger("enviarEmail")
      .timeBased()
      .at(agendamento)
      .withUserTimezone(Session.getScriptTimeZone())
      .create();

    // detalhes do envio
    planilha.getRange("D" + (i + 2)).setValue("Enviado");
  }
}

function enviarEmail() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var linha = planilha.getActiveCell().getRow();
  var nome = planilha.getRange("A" + linha).getValue();
  var email = planilha.getRange("B" + linha).getValue();
  var assunto = "Assunto do Email"; // assunto do email
  var mensagem = "Mensagem do Email"; // mensagem do email

  var emailTexto = mensagem.replace("{NOME}", nome);

  GmailApp.sendEmail(email, assunto, emailTexto);