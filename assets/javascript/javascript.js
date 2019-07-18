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

//timer
function startTimer(){
    
    var downloadTimer = setInterval(function(){
      document.getElementById("timeLeft").innerHTML = "Time Left:"+timeleft + " seconds";
      timeleft--;
      console.log(timeleft)
      if(timeleft <= 0){
        clearInterval(downloadTimer);
    ;
      }
    }, 1000);
    

}

$(document).ready(function(){


    });   







//start button
function startEvent(){

    //What to do after start button pressed
    startTimer()
    console.log(timeleft)
    $("#startButton").remove()


    // bring in first question
    $(".list").append('<a class="list-group-item list-group-item-action active"><b>'+questions.question1+'</b></a>')
        
    for (var i=0;i<questions.question1Answers.length;i++){
      
        $(".list").append('<a class="list-group-item list-group-item-action button">'+questions.question1Answers[i]+'</a>')
    }


    //Detect answer choise
    $("a").on("click", function() {

       var answerChosen= $(this).text()
       console.log(answerChosen)

     if (answerChosen==questions.question1CorrectAnswer){
           alert("correct")
            
          ;
                  $.ajax({
                    url: "https://api.giphy.com/v1/gifs/search?q=cats&api_key=5oTOOswwnaWtuVaPO79PQjvdHbL8x5GX",
                    method: "GET"
                  }).then(function(response) {
                
                   
                   gifUrl=response.data[0].images.original.url
                   console.log(gifUrl)
                   console.log(response)
                
                  });

                  
                 var gifImageContainer=$("<img>")
                 var gifImage=gifImageContainer.attr("src",gifUrl)
                 gifImage.appendTo("#questionForm")





                 var newTimer=5
           
                 
                 var gifTimer=setInterval(function(){

                    newTimer--
      if(newTimer <= 0){
        
             clearInterval(gifTimer)
         }
           },1000)
        }

    })
    
   

}



console.log(timeleft)
//startbutton // start timer and bring in first question

//if question correct  // show giff and alert

//if question incorrect  // show giff and alert

//if timer runs out  // show giff and alert

//Next Question

//display score and restart button




