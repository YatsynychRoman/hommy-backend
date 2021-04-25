const mailer = require('nodemailer')

module.exports = async (subject, body, mail) => {
  const transport = mailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.EMAIL_PASS}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
  await transport.sendMail({
    from: `${process.env.EMAIL}`,
    to: mail,
    subject,
    html: `${body}`,
  })
}
