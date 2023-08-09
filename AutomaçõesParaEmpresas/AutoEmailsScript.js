function enviarEmailsPersonalizados() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dados = planilha.getRange("A2:C" + planilha.getLastRow()).getValues(); 

  // assunto e corpo do email
  var assunto = "teste4"; 
  var mensagem = "Olá {NOME},\n\n" +
                 "Gostaríamos de compartilhar um voucher especial para você:\n" +
                 "{LINK}\n\n" +
                 "Aproveite esta oferta exclusiva e tenha um ótimo dia!\n\n" +
                 "Atenciosamente,\n" +
                 "PeC";

  for (var i = 0; i < dados.length; i++) {
    var nome = dados[i][0];
    var email = dados[i][1];
    var link = dados[i][2];

    // detalhes do envio na coluna D da planilha
    planilha.getRange("D" + (i + 2)).setValue("Enviado");
    
    enviarEmail(email, assunto, mensagem, nome, link);
  }
}

function enviarEmail(destinatario, assunto, mensagem, nome, link) {
  var emailTexto = mensagem.replace("{NOME}", nome).replace("{LINK}", link);
  GmailApp.sendEmail(destinatario, assunto, emailTexto);
}

