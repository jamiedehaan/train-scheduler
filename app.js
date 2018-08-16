// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2bGnihV3BTy0cJoOyY_CGmQ2EqSI8Wss",
    authDomain: "train-scheduler-3.firebaseapp.com",
    databaseURL: "https://train-scheduler-3.firebaseio.com",
    projectId: "train-scheduler-3",
    storageBucket: "train-scheduler-3.appspot.com",
    messagingSenderId: "500605162212"
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function (childSnap) {
    console.log(childSnap.val().monthlyRate)
    $("#table-data").append("<tr><td>" + childSnap.val().trainName + "</td><td>" + childSnap.val().destination + "</td><td>" + childSnap.val().frequency);

});

$(document).ready(function () {
    $("#add-train-record").on("click", function () {

        event.preventDefault();

        var dateFormat = "MM/DD/YYYY";

        var trainName = $("#trainName-input").val().trim();
        var destination = $("#destination-input").val().trim();
        var firstTrain = $("#firstTrain-input").val().trim();
        var frequency = $("#frequency-input").val().trim();

        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });

    });

});
