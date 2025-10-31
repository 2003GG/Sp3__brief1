let answer1 = document.getElementById("answer__1");
let answer2 = document.getElementById("answer__2");
let answer3 = document.getElementById("answer__3");
let answer4 = document.getElementById("answer__4");

let qes = document.getElementById("question");
let my_button = document.getElementById("suivant");
// let dark = document.getElementByClassName("dark__mood");

// for the dark mood
// dark.addEventListener("click",(event)=>{
//   event.target.Body.style.backgroundColor = "rgb(43, 43, 43)";
// });

const obj = [
  {
    Qestion: "who won the world cup 2006",
    answer: ["argentina", "france", "italy", "spain"]
   
  },
  {
    Qestion: "who won the chapions league in 2004",
    answer: ["Porto", "mancherster united", "FC barcalona", "liverpool"]
   },

  {
    Qestion: "the ballon d'or winner in 2003 is",
    answer: ["Messi", "Ronaldinho", "buffon", "Nedvěd"]
  },

  {
   Tr: ["italy", "porto", "Nedvěd"]
   }
];


    my_button.addEventListener("click",changeqe)
    function changeqe(){
        
          for (let i=0; i <obj.length; i++){
                 qes.textContent = obj[0].Qestion
            
                answer1.textContent = obj[0].answer[0]
                answer2.textContent = obj[0].answer[1]
                answer3.textContent = obj[0].answer[2]
                answer4.textContent = obj[0].answer[3]
            
               
              }
            }
            
            
            
            
            // resersh for the correct answer
            
            //   for (let i=0; i <obj.length; i++){
            //      qes.innerText = obj[0].Qestion
            //      for(let j=0;j<obj.length;j++){
            //     answer1.textContent = obj[i].answer[j]
            //     answer2.textContent = obj[i].answer[j]
            //     answer3.textContent = obj[i].answer[j]
            //     answer4.textContent = obj[i].answer[j]
            // }
            //     console.log(obj[i])
            //   }
            // }
            
            for (let i = 0; i < obj.length; i++){
                if (answer1 === obj[i].Tr){
    answer1.addEventListener('click', event => {
      answer1.style.backgroundColor = " rgb(75, 255, 96)";
      changeqe();
    });
  }

  if (answer1 !== obj[i].Tr) {
    answer1.addEventListener('click', event => {
      answer1.style.backgroundColor = "rgb(255, 92, 92)";
      changeqe();
    });
  }

  if (answer2 === obj[i].Tr) {
    answer2.addEventListener('click', event=> {
      answer2.style.backgroundColor = " rgb(75, 255, 96)";
      changeqe();
    });
  }

  if (answer2 !== obj[i].Tr) {
    answer2.addEventListener('click', event => {
      answer3.style.backgroundColor = "rgb(255, 92, 92)";
      changeqe();
    });
  }

  if (answer3 === obj[i].Tr) {
    answer3.addEventListener('click', event => {
      answer3.style.backgroundColor = " rgb(75, 255, 96)";
      changeqe();
    });
  }

  if (answer3 !== obj[i].Tr) {
    answer3.addEventListener('click' ,event => {
      answer3.style.backgroundColor = "rgb(255, 92, 92)";
       changeqe();
    });
  }

  if (answer4 === obj[i].Tr) {
    answer4.addEventListener('click', event => {
      answer4.style.backgroundColor = " rgb(75, 255, 96)";
       changeqe();
    });
  }

  if (answer4 !== obj[i].Tr) {
    answer4.addEventListener('click', event => {
      answer4.style.backgroundColor = "rgb(255, 92, 92)";
       changeqe();
    });
  }
}

// function changecolor(event){
//     event.target.style.backgroundcolor="red";
//     event.target.textcontent="false";
// }
// answer1.addEventLister("click",changecolor);

// if (
//   answer1.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "black";
//   })
// );
