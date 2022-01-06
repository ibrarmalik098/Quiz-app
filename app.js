var showQuestion = document.getElementById('showQuestion')
var totalNumber = document.getElementById('totalNumber')
var currentNumber = document.getElementById('currentNumber')
var btnQuestions = document.getElementById('btnQuestions')
var resultPage = document.getElementById('resultPage')
var showpercent = document.getElementById('percentage')
var indexval =0;
var marks = 0;
var questions = [
    {
        question: 'HTML stand for _______________________',
        options: ['hypertext markup language', 'hyperyech markup language', 'hypertext markep language', 'hypertext markup languge'],
        correctAns : "hypertext markup language",
    },
    {
        question: 'CSS stand for _______________________',
        options: ['Cascading Style Sheet', 'Cascadeng Style Shet', 'Cascading Styles Sheets', 'Cascadings Styls Sheet'],
        correctAns: "Cascading Style Sheet",
    },
    {
        question: 'JS stand for _______________________',
        options: ['Javascript', 'Javacript', 'Javascripts', 'Javascriptes'],
        correctAns : "Javascript",
    },
    {
        question: 'CPU stand for _______________________',
        options: ['Centrals Processing Units', 'Central Procesing Unit', 'Central Processing Unit', 'Cantral Processing Units'],
        correctAns: "Central Processing Unit",
    },
    {
        question: 'SSD stand for _______________________',
        options: ['Solids state drivis', 'Solids stete drives', 'Solid states drive', 'Solid state drives'],
        correctAns: "Solid states drive",
    },
    {
        question: 'ROM stand for _______________________',
        options: ['read-only memory', 'reads-only memoory', 'read-onley memory', 'reads-only mamory'],
        correctAns: "read-only memory",
    }
]


function renderScreen(){
  showQuestion.innerHTML = questions[indexval].question;
  for(i=0; i<questions[indexval].options.length;i++){
      var optval = questions[indexval].options[i];
      var corVal = questions[indexval].correctAns[i];
      btnQuestions.innerHTML += `<div class="col-md-6 p-2"><button onclick="chkAns('${ questions[indexval].options[i]}','${questions[indexval].correctAns}')" class="btn btn-light w-100 shadow p-3 px-5 rounded-pill ">${optval}</button></div>`
  }
  totalNumber.innerHTML = questions.length;
  currentNumber.innerHTML = indexval + 1;
}

renderScreen()

function nextQues(){
    btnQuestions.innerHTML = "";
    if(indexval + 1 == questions.length){
        resultPage.style.display = 'block';
        showpercent.innerHTML = (marks/6) * 100;
        showpercent.tofixed(2)
    }else{
        indexval++;
        renderScreen();
    }
}

function chkAns(optionvalue , correctvalue){
    if(optionvalue == correctvalue){
        marks++;
        console.log(marks)
        
    }
    nextQues();

}

