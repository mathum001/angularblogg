const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

/* app.use(cors()); /* Tillåter alla routes 
app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
); */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Skapa en transporter med nodemailer
  let transporter = nodemailer.createTransport({
    service: "gmail", // Anpassa för din e-postleverantör
    user: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "login",
      user: "mattiasblogg415@gmail.com", // Anpassa för din e-postadress
      pass: "cymuitqrefheepgt", // Anpassa för ditt e-postlösenord
    },
  });

  // Skapa e-postmeddelandet
  let mailOptions = {
    from: "mattiasblogg415@gmail.com",
    to: "mattias.hummer@hotmail.com", // Anpassa för mottagarens e-postadress
    subject: "Meddelande från kontaktformuläret",
    text: `Namn: ${name}\nE-post: ${email}\nMeddelande: ${message}`,
  };

  // Skicka e-postmeddelandet
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      console.log(info);
      res
        .status(500)
        .send("Något gick fel vid skickandet av e-postmeddelandet");
    } else {
      console.log("E-post skickad: " + info.response);
      res.status(200).send("E-postmeddelandet har skickats");
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hej, världen!");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Servern är igång på port ${port}`);
});
