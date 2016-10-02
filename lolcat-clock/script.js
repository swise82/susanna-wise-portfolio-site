var noon = 12;
var evening = 17;
var partyTime;
var napTime;
var lunchTime;
var wakeUpTime;

var updateClock = function()
{
  var time = new Date().getHours();
  var messageText;
  var image

  var lolcatJS = document.getElementById("lolcat");
  var timeEventJS = document.getElementById("timeEvent");

  if (time == partyTime)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
      messageText = "Party time! Woooooooo!";
    }
  else if (time == napTime)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "I'm sleepy... How about a nap?";
    }
  else if (time == lunchTime)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "I'm hungry! Lunch time!";
    }
  else if (time == wakeUpTime)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "It's a beautiful day! Time to get up!";
    }
  else if (time < noon)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good morning!";
     }
  else if (time > evening)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good evening!";
    }
  else
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText = "Good afternoon!";
    }
  lolcatJS.src = image;
  timeEventJS.innerText = messageText;

  var showCurrentTime = function()
  {
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon)
      {
        meridian = "PM";
      }
    if (hours > noon)
      {
        hours = hours - 12;
      }

    if (minutes < 10)
      {
        minutes = "0" + minutes;
      }

    if (seconds < 10)
      {
        seconds = "0" + seconds;
      }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian +"!";

    clock.innerText = clockTime
  };
  showCurrentTime();

};


var oneSecond = 1000;
setInterval(updateClock, oneSecond);
updateClock();

var partyTimeButtonJS = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  if (partyTime < 0)
    {
      partyTime = new Date().getHours();
      partyTimeButtonJS.innerText = "Party Over!";
      partyTimeButtonJS.style.backgroundColor = "#0A8DAB";
    }
  else
    {
      partyTime=-1;
      partyTimeButtonJS.innerText = "Party Time!";
      partyTimeButtonJS.style.backgroundColor = "#222";
    }

};

partyTimeButtonJS.addEventListener("click", partyEvent);
partyEvent();

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
  wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
  lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function()
{
  napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);
