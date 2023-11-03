const sqlite3 = require("sqlite3");

// Open SQLite database
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

function getDataFromForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var blood = document.getElementById("blood").value;
  var qualification = document.getElementById("qualification").value;
  var occupation = document.getElementById("occupation").value;

  // Assuming 'canvas' is an HTML canvas element
  var canvas = document.getElementById("canvas");
  const base64Image = canvas.toDataURL("image/png");

  var name = firstName + " " + lastName;

  db.run(
    "INSERT INTO Members (name, email, occupation, qualification, blood_group, age, phone_number, address, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      email,
      occupation,
      qualification,
      blood,
      age,
      phone,
      address,
      base64Image,
    ],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Record inserted successfully.");
      }
    }
  );
}
