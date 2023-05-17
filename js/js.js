const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
       'que': 'Adding the style attributes in HTML elements, is known to be?',
       'a': 'Internal',
       'b': 'Inline',
       'c': 'Outline',
       'd': 'External',
       'correct': 'a'
    },
    {
       'que': 'The link to a bookmark is added in an attribute named?',
       'a': 'href',
       'b': 'link',
       'c': 'src',
       'd': 'id',
       'correct': 'a'
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById('quesBox')
const optionInputs = document.querySelectorAll('.options')
const loadQues = () => {
    if(index == total) return endQuiz()
    else reset()
    const data = questions[index];
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}

const submitQuiz = ()=>{
    const ans = getAnswer();
    const data = questions[index];
    if(ans===data.correct) right++
    else wrong++
    index++;
    loadQues()
    return
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            // if(input.checked) console.log('yes');
            // else console.log('no')
            if(input.checked) answer = input.value;
        }
    )
    return answer;
}
const reset = ()=>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )    
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML  = `
    <div style="text-align:center">
    <h3> Thank you for taking the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>`
}
loadQues()