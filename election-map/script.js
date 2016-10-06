var makePolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.tallyVotes = function()
  {
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };
  politician.announce = function()
  {
    console.log("Politician "+this.name+" is in the race!");
  };

  politician.announce();

  return politician;
};

var jane = makePolitician("Jane Doesitall", [132, 17, 11]);
jane.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

var betty = makePolitician("Betty Rocks", [245, 141, 136]);
betty.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];


jane.electionResults[9]=1;
jane.electionResults[4]=17;
jane.electionResults[43]=11;
betty.electionResults[9]=28;
betty.electionResults[4]=38;
betty.electionResults[43]=27;

var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (jane.electionResults[state] > betty.electionResults[state])
    {
      theStates[state].winner = jane;
    }
  else if (jane.electionResults[state] < betty.electionResults[state])
    {
      theStates[state].winner = betty;
    }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null)
    {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
  else
    {
      theStates[state].rgbColor = [11, 32, 57];
    }

  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;
  var stateAbbr = header.children[1];
  stateAbbr.innerText = theStates[state].nameAbbrev;

  var row1 = stateInfoTable.children[1].children[0];
  var name1 = row1.children[0];
  name1.innerText = jane.name;
  var results1 = row1.children[1];
  results1.innerText = jane.electionResults[state];

  var row2 = stateInfoTable.children[1].children[1];
  var name2 = row2.children[0];
  name2.innerText = betty.name;
  var results2 = row2.children[1];
  results2.innerText = betty.electionResults[state];

  var row3 = stateInfoTable.children[1].children[2];
  var stateResult = row3.children[1];
  if (stateWinner !== null)
  {
    stateResult.innerText = stateWinner.name;
  }
  else
    {
      stateResult.innerText = "DRAW";
    }
};

jane.tallyVotes();
betty.tallyVotes();
console.log(jane.totalVotes);
console.log(betty.totalVotes);

console.log(jane.partyColor);
console.log(betty.partyColor);

var winner = "?";
if (jane.totalVotes > betty.totalVotes)
  {
    winner = jane.name;
  }
else if (jane.totalVotes < betty.totalVotes)
  {
    winner = betty.name;
  }
else
  {
    winner = "DRAW";
  }

console.log("And the winner is "+winner+"!");

var countryResults = document.getElementById('countryResults');
countryResults.children[0].children[0].children[0].innerText = jane.name;
countryResults.children[0].children[0].children[1].innerText = jane.totalVotes;
countryResults.children[0].children[0].children[2].innerText = betty.name;
countryResults.children[0].children[0].children[3].innerText = betty.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;
