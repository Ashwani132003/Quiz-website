const quizDB = [
    { question: "Place value of the digit ‘8’ in 809 is –",
        a: "8", 
        b: "80",
        c: "800",
        d: "0",
        ans: "ans3"},
    
    { question: "What is the value of 45+30 ?",
        a: "65",
        b: "75",
        c: "85",
        d: "55",
        ans: "ans2"},
    { question: "What is the value of 30*4 ?",
        
        a:"90",
        b:"150",
        c:"140",
        d:"120",
        ans: "ans4"},
    
    { question: "What is the value of 245+654 ?",
        
        a: "894",
        b: "898",
        c: "899",
        d: "895",
        ans: "ans3"

    },    
    
    {question: "What is the value of 17*6 ?",
    
        a:"102",
        b:"119",
        c: "85",
        d:"96",
        ans: "ans1"
    },
    {question: " What is the value of 564-322 ?",
        
        a: "212",
        b: "242",
        c: "342",
        d: "224",
        ans: "ans2"
 
    },
    
    {question: "What is the value of 19*7 ?",
    
        a: "126",
        b: "114",
        c: "133",
        d: "152",
        ans: "ans3"
 
    },    
       
    

]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option = document.querySelector(".option");
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('.score');

let questionCount = 0;
let score =0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();



const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;

}
const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer); 
 
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
     };

    questionCount++; 
    deselectAll();
     
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length}  </h3>
        <button class='btn' onclick="location.reload()" >Play again </button>
        `;
        showScore.classList.remove('scoreArea');

    }


});


