let question_1 = "Who is the governor of Central Bank of Nigeria?"

var question1 = {
    number: 1,
    question: "Who is the governor of Central Bank of Nigeria?",
    option_a: "Godwin Emefiele",
    option_a: "Ngozi Okonjo-Iweala",
    option_a: "Charles Soludo",
    answer: "a",
    image_url: "../assets/honey_lines.png"
}

var question2 = {
    number: 2,
    question: "Whic team won the Premier League in 2001?",
    option_a: "I don't know",
    option_a: "Chelsea",
    option_a: "Arsenal",
    answer: "c",
    image_url: "../assets/football.png"
}

let user_answers = []


function submitResponse(event) {
    event.preventDefault()

    var val = "";

    radios = document.getElementsByClassName("option_select")
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }

    console.log (val)
    storeResponse(val)
    changeQuestion()
    return
}


function storeResponse(val){
    user_answers.push(val)
}

