
const questionbank = [
  {
    question: "Who has scored the most runs in international cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["Australia", "West Indies", "India", "England"],
    answer: "West Indies"
  },
  {
    question: "Who holds the record for the fastest century in ODIs?",
    options: ["Virender Sehwag", "AB de Villiers", "Shahid Afridi", "Chris Gayle"],
    answer: "AB de Villiers"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who was the captain of India during the 2011 World Cup win?",
    options: ["Sourav Ganguly", "Virat Kohli", "Rahul Dravid", "MS Dhoni"],
    answer: "MS Dhoni"
  },
  {
    question: "Which team has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "Australia"
  },
  {
    question: "Where is the headquarters of the ICC located?",
    options: ["Mumbai", "London", "Dubai", "Melbourne"],
    answer: "Dubai"
  },
  {
    question: "Which Indian bowler has taken a hat-trick in a World Cup match?",
    options: ["Jasprit Bumrah", "Mohammed Shami", "Irfan Pathan", "Kuldeep Yadav"],
    answer: "Mohammed Shami"
  },
  {
    question: "Which player has hit the most sixes in international cricket?",
    options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"],
    answer: "Chris Gayle"
  },
  {
    question: "Who is known as the 'Rawalpindi Express'?",
    options: ["Wasim Akram", "Waqar Younis", "Shoaib Akhtar", "Imran Khan"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which country hosted the 2019 Cricket World Cup?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "Who scored a double century in a World Cup match?",
    options: ["Virat Kohli", "Rohit Sharma", "Martin Guptill", "Chris Gayle"],
    answer: "Martin Guptill"
  },
  {
    question: "Which Indian cricketer is nicknamed 'The Wall'?",
    options: ["Rahul Dravid", "Sourav Ganguly", "VVS Laxman", "MS Dhoni"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who was the first batsman to score 10,000 runs in Test cricket?",
    options: ["Sunil Gavaskar", "Allan Border", "Sachin Tendulkar", "Steve Waugh"],
    answer: "Sunil Gavaskar"
  },
  {
    question: "Which cricketer has taken 10 wickets in a single Test innings?",
    options: ["Anil Kumble", "Muttiah Muralitharan", "Jim Laker", "Shane Warne"],
    answer: "Anil Kumble"
  },
  {
    question: "Who is the first Indian to score a century in T20 Internationals?",
    options: ["Suresh Raina", "Virat Kohli", "KL Rahul", "Rohit Sharma"],
    answer: "Suresh Raina"
  },
  {
    question: "Which cricketer is known as 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Kane Williamson", "Eoin Morgan"],
    answer: "MS Dhoni"
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["Eden Gardens", "Lords", "MCG", "Wankhede"],
    answer: "Lords"
  },
  {
    question: "Which Indian has the highest individual score in ODIs?",
    options: ["Virender Sehwag", "Rohit Sharma", "Sachin Tendulkar", "Yuvraj Singh"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which spinner is known for his 'doosra' delivery?",
    options: ["Harbhajan Singh", "Muttiah Muralitharan", "Saqlain Mushtaq", "Ravichandran Ashwin"],
    answer: "Saqlain Mushtaq"
  }
];

function random(){
//  const data=new Set();
//  while(data.size!=5){
//     const index = Math.floor(Math.random()*20);
//     data.add(questionbank[index]);
//  }
//   return [...data];
//  questionbank.sort(()=> Math.random()-0.5);
//  return questionbank.slice(0,5);
    const arr=[];
    let length= questionbank.length;
    for(let i=0;i<5;i++)
    {
      const index= Math.floor(Math.random()*length);
      arr.push(questionbank[index]);
      [questionbank[index],questionbank[length-1]]=[questionbank[length-1],questionbank[index]];
      length--;
    }
    return arr;
}
const form=document.querySelector('form');


const problem= random();
const originalanswer={};
problem.forEach((obj,index)=>{
   const div_element=document.createElement('div');
   div_element.className='question';
   originalanswer[`q${index+1}`]=obj['answer'];

   const para=document.createElement('p');
   para.textContent=`${index+1}. ${obj['question']}`;
   div_element.appendChild(para);


   obj['options'].forEach((data)=>{
    const label= document.createElement('label');
    const input=document.createElement('input');
    input.type="radio";
    input.name=`q${index+1}`;
    input.value=data;
    
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
    })
    form.appendChild(div_element);
    
})
 
const button =document.createElement('button');
button.type='submit';
button.className="submit-btn";
button.textContent="Submit";
form.appendChild(button);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(form);

    let result=0;
    for(let [key,value] of data.entries())
    {
        if(value===originalanswer[key])
            result++;
    }
    const out=document.getElementById('out');
    out.innerText=`${result} out of 5 is correct`;
    form.reset();
})


 
  
   
