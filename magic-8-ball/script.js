$(document).ready(function(){
  var ball = {};
  ball.answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  ball.askQuestion = function(question)
  {
    $("#answer").fadeIn(4000);
    ball.answer = ball.answers[Math.round(Math.random()*19)];
    $("#answer").text(ball.answer);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    var question = prompt("ASK A YES/NO QUESTION");
    $("#8ball").effect("shake");
    ball.askQuestion(question);
  };
  $("#questionButton").click(onClick);
});
