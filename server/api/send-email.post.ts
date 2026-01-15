import { readBody } from 'h3'
import { useRuntimeConfig } from '#imports'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  console.log('API route /api/send-email POST handler hit'); // Added for debugging
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: Number(config.emailPort),
    secure: Number(config.emailPort) === 465,
    auth: {
      user: config.emailUser,
      pass: config.emailPass
    }
  })

  const html = `
  <html>
    <body style="font-family:Arial;background:#f5f7fa;padding:40px">
      <div style="max-width:600px;margin:auto;background:#fff;padding:24px;border-radius:12px">
        <img src="https://github.com/muhammadAlie86/rupalakar-design/blob/master/app/assets/images/ic_logo.png" " width="120" />
        <p><b>Nama:</b> ${body.from_name}</p>
        <p><b>Email:</b> ${body.reply_to}</p>
        <p><b>Perusahaan:</b> ${body.company}</p>
        <p><b>Jabatan:</b> ${body.job_title}</p>
        <hr />
        <p>${body.message}</p>
      </div>
    </body>
  </html>
  `

  await transporter.sendMail({
    from: config.emailUser,
    to: config.emailUserTo,
    replyTo: body.reply_to,
    subject: 'Konsultasi dari Website',
    html
  })

  return { success: true }
})

