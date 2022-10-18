var hangyman = hangyman || {};

hangyman = {
    Hanged:class{
        constructor(wordArray){
            this.docWord = document.getElementById("word");     
            this.wordArray = wordArray;
            this.str=this.wordArray[Math.floor(Math.random() * 4)];
            this.thearr=[];
            this.solution=[];
            this.lives=10;
            checker=document.getElementById("checker");
            reset=document.getElementById("reset");
            lives=document.getElementById("lives");
            winlose=document.getElementById("winlose");
        }
        startGame(){
            this.thearr=this.str.split("");
            this.solution[0]=this.thearr[0];
            for (let index = 1; index < this.thearr.length; index++) {
                this.solution[index]="_";
            }
            this.docWord.innerHTML=this.solution;
            checker.onclick=()=>this.wordCheck();
            reset.onclick=()=>this.resetGame();
            lives.innerHTML=this.lives+" lives"
        }
        resetGame(){
            this.str=this.wordArray[Math.floor(Math.random() * 4)];
            this.lives=10;
            document.getElementById("winlose").innerHTML=" "
            this.solution.splice(0);
            this.startGame();
        }
        liveChecker(){
            if(this.lives<=0){
                winlose.innerHTML="YOU LOSE"
                document.getElementById("checker").onclick=null;
            }
        }
        winCheck(){
            if(!this.solution.includes("_")){
                winlose.innerHTML="YOU WIN"
                document.getElementById("checker").onclick=null;
            }
        }
        wordCheck(){
            if(this.thearr.includes(document.getElementById("typer").value)){
                for (let index = 0; index < this.thearr.length; index++) {
                    const element = this.thearr[index];
                    if(element==document.getElementById("typer").value){
                        this.solution[index]=document.getElementById("typer").value;
                        this.docWord.innerHTML=this.solution;
                    } 
                }
            }else {
                this.lives--;
                document.getElementById("lives").innerHTML=this.lives + " lives"
                this.liveChecker();
            }
            this.winCheck();
        }
    }
}