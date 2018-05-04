

///////////////////////////////////////////////////////////////////////
/////////////////// configure chaoticbot nodemailer////////////////////
//////////////////////////////////////////////////////////////////////
const nodemailer =        require('nodemailer');

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "chaoticbotshelp@gmail.com",
    pass: "chaoticbotsx1o"
  }
})

module.exports = transport;
