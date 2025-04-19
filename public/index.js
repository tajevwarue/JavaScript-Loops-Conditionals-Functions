// 1. Students Jamb Grading Function
function studentReviews(studentScore = 0){
    if(studentScore >= 180){
        console.log("Studnet score:", studentScore, "- Passed")
    } else{
        console.log("Student score:", studentScore, "- Failed")
    }
}

// Testing studentReviews fucntion
studentReviews(200)
studentReviews(130)

// 2. Vote Eligibility Function
function voteEligibility(age = 0){
    if(age >= 18){
        console.log("You are eligible to vote!")
    } else {
        console.log("Not eligible to vote!")
    }
}

// Testing voteEligibility function
voteEligibility(26)
voteEligibility(12)

// 3. Students Exam Grading Fuction
function studentGrades(studentScore = 0){
    if(studentScore >= 90){
        console.log(`Student score: ${studentScore} - Excellent`)
    } else if (studentScore >= 75){
        console.log(`Student score: ${studentScore} - Good`)
    } else if (studentScore >= 50){
        console.log(`Student score: ${studentScore} - Average`)
    } else{
        console.log(`Student score: ${studentScore} - Fail`)
    }
}

// Testing studentGrades function
studentGrades(94)
studentGrades(80)
studentGrades(64)
studentGrades(45)

// 4. Access Granting Function
function grantAccess(hasID = false, isAbove18 = false){
    if(hasID == true && isAbove18 == true){
        console.log("Access granted!")
    } else {
        console.log("Access Denied!")
    }
}

// Testing grantAccess funtion
grantAccess(true, true)
grantAccess(true, false)

// 5. For loop for student exam grading
const studentScores = [10, 45, 89, 25, 60, 78, 92, 55, 33, 65, 89]

for(let score = 0; score < studentScores.length; score++) {
    if (studentScores[score] > 50){
        console.log("Score:", studentScores[score], "- Pass")
    } else{
        console.log("Score:", studentScores[score], "- Fail")
    }
}

// 6. Arrow Function to Check is passed Math and English
const PassedMathEnglish = (math = 0, english = 0)=>{
    if(math >= 50 && english >= 50){
        console.log("Yes!")
    } else{
        console.log("No!")
    }
}

// Testing PassedMathEnglish function
PassedMathEnglish(67, 89)
PassedMathEnglish(34, 64)

// 7. Checking availability of email or phone number
function verifyEmailPhone(email = undefined, phone = undefined){
    if(email != undefined || phone != undefined){
        console.log("Sign up successful!")
    } else {
        console.log("Please enter a valid email address or phone number to sign up!")
    }
}

// Testing verifyEmailPhone function
verifyEmailPhone()
verifyEmailPhone("tajevwarue@gmail.com")

// 8. Checking availability of username and password
function verifyUserPassword(userName = undefined, password = undefined){
    if(userName == undefined || password == undefined){
        console.log("Invalid Input!")
    } else {
        console.log("Sign up successful!")
    }
}

// Testing the verifyUserPassword function
verifyUserPassword()
verifyUserPassword("Tajevwarue96")
verifyUserPassword("Tajevwarue96", "ashsoe!")

// 9. Job type function
const jobType = (workHours = 0)=>{
    workHours >= 40 ? console.log(`Working Hours: ${workHours} ==> Full-time`) : console.log(`Working Hours: ${workHours} ==> Part-time`)
}

// Testing jobType function
jobType(30)
jobType(45)

// 10. Bigger number function
const largerNumber = (num1 = 0, num2 = 0)=>{
    if(num1 > num2){
        console.log(`Larger Number: ${num1}`)
    } else {
        console.log(`Larger Number: ${num2}`)
    }
}

// Testing largerNumber function
largerNumber(45, 32)
largerNumber(67, 90)