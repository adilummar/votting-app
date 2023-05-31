// assignation
const candidates = document.querySelectorAll(".candidante-box");

// variables
const candidate = [
  {
    name: "safwan kunichira",
    vote : 0, 
    setVote : function(){
        this.vote = this.vote + 1 
    }
  },
  {
    name: "murshid munderi",
    vote : 0, 
    setVote : function(){
        this.vote = this.vote + 1 
    }
  },
  {
    name: "midlaj koyath",
    vote : 0, 
    setVote : function(){
        this.vote = this.vote + 1 
    }
  },
  {
    name: "basil kuranmukke",
    vote : 0, 
    setVote : function(){
        this.vote = this.vote + 1 
    }
  },
];

// event
candidates.forEach((item) => {
  item.addEventListener("click", () => {
    const nameDiv = item.querySelector(".candi-name").textContent;
    for(let i = 0; i < 4 ; i++){
        if(candidate[i].name === nameDiv){
            candidate[i].setVote()
            console.log(candidate[i].vote, candidate[i].name)
        }
         
    }
  });
});
