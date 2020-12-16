var question1 = {
    number: 1,
    question: "Who is the governor of Central Bank of Nigeria?",
    option_a: "Godwin Emefiele",
    option_b: "Ngozi Okonjo-Iweala",
    option_c: "Charles Soludo",
    answer: "a",
    image_url: "../assets/honey_lines.png"
}

var question2 = {
    number: 2,
    question: "To 'THWART' is to:",
    option_a: "Weaken",
    option_b: "Make fun of",
    option_c: "Threaten",
    answer: "a",
    image_url: "../assets/flowerpot.png"
}
var question3 = {
    number: 3,
    question: "Who is the coach of Manchester United Football Club?",
    option_a: "Alex Ferguson",
    option_b: "Ole Solskjaer",
    option_c: "Jose Mourinho",
    answer: "b",
    image_url: "../assets/football.png"
}
var question4 = {
    number: 4,
    question: "Obama is the ----- president?",
    option_a: "47th",
    option_b: "45th",
    option_c: "44th",
    answer: "c",
    image_url: "../assets/honey_lines.png"
}
var question5 = {
    number: 5,
    question: "The capital of Madagascar is?",
    option_a: "Monrovia",
    option_b: "Maputo",
    option_c: "Antananariva",
    answer: "c",
    image_url: "../assets/clothes_on_lines.png"
}

let user_answers = []
let qnumber = 1;
let score = 0;



function submitResponse(event) {
    event.preventDefault()

    var val = "";

    radios = document.getElementsByClassName("option_select")
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value;
            radios[i].checked = false
            break; 
        }
    }

    console.log (val)
    storeResponse(val)
    changeQuestion(qnumber+1)
    qnumber = qnumber + 1;
    console.log (qnumber)
    if (qnumber==6){
        computeResult()
        return
    }
    return
}


function storeResponse(val){
    user_answers.push(val)
    console.log (user_answers)
    return
}

function computeResult(){
    if (user_answers[0] == question1.answer){
        score += 1
    }
    if (user_answers[1] == question2.answer){
        score += 1
    }
    if (user_answers[2] == question3.answer){
        score += 1
    }
    if (user_answers[3] == question4.answer){
        score += 1
    }
    if (user_answers[4] == question5.answer){
        score += 1
    }
    console.log(score)
    let userName = sessionStorage.getItem("username")
    storeScoreDetails(score, userName)
    sessionStorage.setItem("score", score)
    outputScore()
    return
}

function outputScore(){
    window.location.href = "result_page.html"
    return
}

function changeScore(event){
    event.preventDefault()
    console.log(sessionStorage.getItem("score"))
    if (!sessionStorage.getItem("score")){
        scoreN = 0
    }
    else{
        scoreN = sessionStorage.getItem("score")
    }
    document.getElementById("result").innerHTML = scoreN+ "/5"
    return
}

function changeQuestion(number) {
    if (number==1){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question1.question
        document.getElementById("option_a_label").innerHTML = question1.option_a
        document.getElementById("option_b_label").innerHTML = question1.option_b
        document.getElementById("option_c_label").innerHTML = question1.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question1.image_url+")"
    }
    else if (number==2){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question2.question
        document.getElementById("option_a_label").innerHTML = question2.option_a
        document.getElementById("option_b_label").innerHTML = question2.option_b
        document.getElementById("option_c_label").innerHTML = question2.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question2.image_url+")"
    }
    else if (number==3){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question3.question
        document.getElementById("option_a_label").innerHTML = question3.option_a
        document.getElementById("option_b_label").innerHTML = question3.option_b
        document.getElementById("option_c_label").innerHTML = question3.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question3.image_url+")"
    }
    else if (number==4){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question4.question
        document.getElementById("option_a_label").innerHTML = question4.option_a
        document.getElementById("option_b_label").innerHTML = question4.option_b
        document.getElementById("option_c_label").innerHTML = question4.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question4.image_url+")"
    }
    else if (number==5){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question5.question
        document.getElementById("option_a_label").innerHTML = question5.option_a
        document.getElementById("option_b_label").innerHTML = question5.option_b
        document.getElementById("option_c_label").innerHTML = question5.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question5.image_url+")"
    }
    else{
        return
    }
    return
}

function storeScoreDetails(score, userName){
    let timeElapsed = Date.now()
    let today = new Date(timeElapsed)
    let date = today.toDateString()
    let points = (score/5)*100

    if (localStorage.getItem(userName)){
        let user_details = JSON.parse(localStorage.getItem(userName))
        user_details.push([date, score, points+"%"])
        localStorage.setItem(userName, JSON.stringify(user_details))
    }
    else {
        let userdetails = [[date, score, points+"%"]]
        localStorage.setItem(userName, JSON.stringify(userdetails))
    }

    return
}

function goToDashboard(event) {
    event.preventDefault()
    window.location.href = "quiz_home.html"

    if (!sessionStorage.getItem("username")){
        window.location.href = "landing_page.html"
        return;
    }
    return;
}

function fillTable(event){
    event.preventDefault()

    document.getElementById("welcome").innerHTML = sessionStorage.getItem("username") + ","
    let user_key = sessionStorage.getItem("username")
    let user_details = JSON.parse(localStorage.getItem(user_key))

    for(i=0; i<user_details.length; i++){
        var table = document.getElementById("scoreTable")
        var row = table.insertRow(i+1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        cell1.innerHTML = i+1
        cell2.innerHTML = user_details[i][0]
        cell3.innerHTML = user_details[i][1]
        cell4.innerHTML = user_details[i][2]
    }
    return
}

function goToQuestions(event){
    event.preventDefault()

    window.location.href = "question.html"
    return
}

function goToHome(event){
    event.preventDefault()

    sessionStorage.clear()
    window.location.href = "landing_page.html"
    return
}

function signUserOut(event){
    event.preventDefault()

    sessionStorage.clear()
    window.location.href = "landing_page.html"
    return
}

