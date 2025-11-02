let answer1 = document.getElementById("answer__1");
let answer2 = document.getElementById("answer__2");
let answer3 = document.getElementById("answer__3");
let answer4 = document.getElementById("answer__4");

let qes = document.getElementById("question");
let my_button = document.getElementById("suivant");

const obj = [
  {
    Qestion: "who won the world cup 2006",
    answer: ["argentina", "france", "italy", "spain"],
    
   
  },
  {
    Qestion: "who won the chapions league in 2004",
    answer: ["Porto", "mancherster united", "FC barcalona", "liverpool"],
     
   },

  {
    Qestion: "the ballon d'or winner in 2003 is",
    answer: ["Messi", "Ronaldinho", "buffon", "Nedvěd"],
      
  },
  {
    Tr: ["Nedvěd","porto","italy"]
  }

 
];


    my_button.addEventListener("click",changeqe);
    function changeqe(){
        
          let i=0;
           
                 qes.textContent = obj[i].Qestion
            
                answer1.textContent = obj[i].answer[0]
                answer2.textContent = obj[i].answer[1]
                answer3.textContent = obj[i].answer[2]
                answer4.textContent = obj[i].answer[3]
               
                
              
            }
            
            
            
            for (let j = 0; j < obj.length; j++){
              
 answer1.addEventListener('click', event => {
                if (answer1 === Tr){
      
      answer1.style.backgroundColor = " rgb(75, 255, 96)";
      
    }
    else {
    
      answer1.style.backgroundColor = "rgb(255, 92, 92)";
     
    }
  changeqe();
  i++;

        });

 
  


answer2.addEventListener('click', event => {
  if (answer2 === Tr) {
    
      answer2.style.backgroundColor = " rgb(75, 255, 96)";
     
      }

 else {
    
      answer2.style.backgroundColor = "rgb(255, 92, 92)";
    
    }
      changeqe();
      i++;
  });


  answer3.addEventListener('click', event => {
  if (answer3 === Tr) {
   
      answer3.style.backgroundColor = " rgb(75, 255, 96)";
     
    }
  
  else {
   
      answer3.style.backgroundColor = "rgb(255, 92, 92)";
      
    }
     changeqe();
     i++;
  });


answer4.addEventListener('click', event => {
  if (answer4 === Tr) {
    
      answer4.style.backgroundColor = " rgb(75, 255, 96)";
     
    }
  
 else{
    
      answer4.style.backgroundColor = "rgb(255, 92, 92)";
   
    }
       changeqe();
       i++;
  });
}
