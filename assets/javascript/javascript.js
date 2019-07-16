var questions={
    
    question1:"What is the slowest animal in the world?",
    question1Answers:["Three-toed Sloth","Turtle","snail","snake"],
    question1CorrectAnswer:"Three-toed Sloth",

    question2:"A group of lions is known as?",
    question2Answers:["Pack","Pride","Farm","Cohort"],
    question2CorrectAnswer:"Pride",

    question3:"What is the fastest animal in the world?",
    question3Answers:["Cheetah","Wolf","Horse","Zebra"],
    question3CorrectAnswer:"Cheetah",

    question4:"A group of hedgehogs is known as?",
    question4Answers:["Pickles"],
    question4CorrectAnswer:"Pickles",
}



var timeleft = 25



function startTimer(){
    
    var downloadTimer = setInterval(function(){
      document.getElementById("timeLeft").innerHTML = timeleft + " seconds left";
      timeleft--;
      console.log(timeleft)
      if(timeleft <= 0){
        clearInterval(downloadTimer);
    ;
      }
    }, 1000);
    

}









function displayQuestion(){
  $(".list").append('<a class="list-group-item list-group-item-action active">'+questions.question1+'</a>')
    for (var i=0;i<questions.question1Answers.length;i++){
      
        $(".list").append('<a class="list-group-item list-group-item-action">'+questions.question1Answers[i]+'</a>')
        }







   
    startTimer()
    console.log(timeleft)
    $("#startButton").empty()


    var correctanswer=question.question1Answers[1];
    var chosenanswer= getElementById

    if (chosenanswer=correctanswer){
        $("#questionForm").html("<h1>Correct!</h1><br>"+"<p>"+questions.question1Answers+"<p>")
    }
    else if(co) {

    }
    else{

    }

    
}
console.log(timeleft)
//startbutton // start timer and bring in first question

//if question correct  // show giff and alert

//if question incorrect  // show giff and alert

//if timer runs out  // show giff and alert

//Next Question

//display score and restart button




