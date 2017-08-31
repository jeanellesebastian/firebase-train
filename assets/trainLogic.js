
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC97Q2mth6kpFTgG552rVGJgeAK9AcuggM",
  authDomain: "trainschedule-44a64.firebaseapp.com",
  databaseURL: "https://trainschedule-44a64.firebaseio.com",
  projectId: "trainschedule-44a64",
  storageBucket: "trainschedule-44a64.appspot.com",
  messagingSenderId: "366912154478"
};
firebase.initializeApp(config);

var database = firebase.database();

// Button for adding train
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var tName = $("#train-name-input").val().trim();
  var tDestination = $("#destination-input").val().trim();
  var tTime = moment($("#time-input").val().trim(), "HH:MM").format("X");
  var tFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: tName,
    destination: tDestination,
    time: tTime,
    rate: tFrequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.rate);

  // Alert
  alert("CHUGGA CHUGGA CHOO CHOO");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var tName = childSnapshot.val().name;
  var tDestination = childSnapshot.val().destination;
  var tTime = childSnapshot.val().time;
  var tFrequency = childSnapshot.val().rate;

  // Train Info
  console.log(tName);
  console.log(tDestination);
  console.log(tTime);
  console.log(tFrequency);


  // var tTimeConverted = moment(tTime, "hh:mm").subtract(1, "years");
  // console.log("Time Converted: " moment(tTimeConverted).format("LT"));


        // cannot figure this out to save my life
        // // Assumptions
        // var tFrequency = 3;
        // // Time is 3:30 AM
        // var firstTime = "03:30";
        // // First Time (pushed back 1 year to make sure it comes before current time)
        // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
        // console.log(firstTimeConverted);
        // // Current Time
        // var currentTime = moment();
        // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        // // Difference between the times
        // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        // console.log("DIFFERENCE IN TIME: " + diffTime);
        // // Time apart (remainder)
        // var tRemainder = diffTime % tFrequency;
        // console.log(tRemainder);
        // // Minute Until Train
        // var tMinutesTillTrain = tFrequency - tRemainder;
        // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
        // // Next Train
        // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
        // var trainTimeConverted = moment(trainTime, "hh:mm").subtract(1, "years");
        // console.log("TRAIN TIME CONVERTED: " + moment(trainTimeConverted).format("LT"));





  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
  + tFrequency + "</td><td>" + tTime + "</td><td>" + tTime + "</td></tr>");
});
