let question_1 = "Who is the governor of Central Bank of Nigeria?"

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
    question: "Which team won the Premier League in 2001?",
    option_a: "I don't know",
    option_b: "Chelsea",
    option_c: "Arsenal",
    answer: "c",
    image_url: "../assets/football.png"
}

let user_answers = []
let qnumber = 1;
let score = 0;

function setValues(event){
    event.preventDefault()
    // qnumber
}


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
    return
}


function storeResponse(val){
    user_answers.push(val)
    console.log (user_answers)
    return
}

function computeResult(){
    if (user_answer[0] == question_1.answer){
        score += 1
    }
    if (user_answer[1] == question_2.answer){
        score += 1
    }
    if (user_answer[2] == question_3.answer){
        score += 1
    }
    if (user_answer[3] == question_4.answer){
        score += 1
    }
    if (user_answer[4] == question_5.answer){
        score += 1
    }
    console.log(score)
    outputScore(score)
    return
}

function outputScore(score){
    window.location.href = "result_page.html"
    document.getElementById("result").innerHTML = score + "/5"
}

function changeQuestion(number) {
    if (number==1){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question1.question
        document.getElementById("option_a_label").innerHTML = question1.option_a
        document.getElementById("option_b_label").innerHTML = question1.option_b
        document.getElementById("option_c_label").innerHTML = question1.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question1.image_url+")";
    }
    else if (number==2){
        document.getElementById("question_heading").innerHTML = "Question " + number
        document.getElementById("question_text").innerHTML = question2.question
        document.getElementById("option_a_label").innerHTML = question2.option_a
        document.getElementById("option_b_label").innerHTML = question2.option_b
        document.getElementById("option_c_label").innerHTML = question2.option_c
        document.getElementById("html_").style.backgroundImage = "url("+question2.image_url+")";
    }
    else if (number==3){}
    else if (number==4){}
    else if (number==5){
        computeResult()
    }
    return
}

