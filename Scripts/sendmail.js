function sendEmail(usermail) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "vineethsharma119@gmail.com",
        Password: "*******",
        To: usermail,
        From: "vineethsharma119@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!"
      }).then(
          alert("mail sent successfully")
        );
    }
