// Handle survey form submission
document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent page reload

  // Get survey data from the form
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const interest = document.querySelector('input[name="interest"]:checked').value;
  const submittedAt = new Date().toISOString();  // Get current timestamp

  // Survey data object to send to Firebase
  const surveyData = {
    name: name,
    age: age,
    interest: interest,
    submittedAt: submittedAt
  };

  console.log("Survey data to be sent:", surveyData);  // Log survey data to ensure it's correct

  // Reference to the Firebase Realtime Database surveyResults node
  const surveyRef = ref(database, 'surveyResults');

  // Push the new survey data to Firebase
  push(surveyRef, surveyData)
    .then(() => {
      console.log("Survey data successfully uploaded to Firebase!");
      alert("Thank you for your submission!");

      // Optionally, clear the form after submission
      document.getElementById("surveyForm").reset();
      updateSurveyCount();  // Optionally, update the survey count if needed
    })
    .catch((error) => {
      console.error("Error uploading survey data:", error);
      alert("Failed to submit survey. Please try again.");
    });
});

//Function to update survey count on the page
function updateSurveyCount() {
  const surveyCount = document.getElementById("surveyCount");
  const countRef = ref(database, 'surveyCount');

  // Get current survey count and increment it
  countRef.get().then(snapshot => {
    let currentCount = snapshot.exists() ? snapshot.val() : 0;
    const newCount = currentCount + 1;

    // Update the survey count in the database
    set(countRef, newCount);

    // Update the survey count displayed on the webpage
    surveyCount.innerText = newCount;
  }).catch((error) => {
    console.error("Error getting survey count:", error);
  });
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnlnt4o9tREZ6O5uv4tP6iSaoYZZEbePM",
  authDomain: "my-awesome-project-7bcea.firebaseapp.com",
  databaseURL: "https://my-awesome-project-7bcea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-awesome-project-7bcea",
  storageBucket: "my-awesome-project-7bcea.firebasestorage.app",
  messagingSenderId: "1001948899518",
  appId: "1:1001948899518:web:1e058c0177a8b03411d6ef",
  measurementId: "G-WQBS9C0HG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}

function user_survey_function(event) {
  event.preventDefault()

  let user_name = document.getElementById("name")
  let user_age = document.getElementById("age")
  let user_gender = document.querySelector("input[name=gender]:checked").value;

  let user_yes_no_radio = document.querySelector("input[name=interest]:checked").value;


  alert(user_name.value)
  alert(user_age.value)
  alert(user_gender.value)


  alert(user_gender.value)
  // let user_mrs=document.getElementById("mrs.")
  // let user_ms=document.getElementById("ms.")
  alert(user_yes_no_radio.value)

  // let user_choice_yes=document.getElementById("yes")
  // let user_choice_no=document.getElementById("no")

  const firebaseRef = ref(database, '/survey');
  let survey_dic = { "Name": user_fname.value, "Age": user_age.value, "Gender": user_gender, 'Interest': user_yes_no_radio }
  push(firebaseRef, survey_dic)


}
