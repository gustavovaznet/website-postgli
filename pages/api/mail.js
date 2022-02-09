//MAIL SERVICE

//EXAMPLE = NAME
const mail = require('@example/mail');
mail.setApiKey(process.env.EXAMPLE_API_KEY);

//MAIL
export default async (req, res) => {
  try {
    //BODY
    const body = JSON.parse(req.body);
    //MESSAGE
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;
    //DATA
    const data = {
      to: 'contato@postgli.com.br',
      from: 'contato@postgli.com.br',
      subject: 'Nova Mensagem!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };
    //STATUS CHECK
    await mail.send(data);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  res.status(200).json({ status: 'Mensagem enviada com sucesso!!!' });
};
