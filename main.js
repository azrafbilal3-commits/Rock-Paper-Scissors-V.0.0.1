
const score = document.querySelectorAll('.score');

// image 
const imageRobo = document.getElementById('imageRobo');
const imageUser = document.getElementById('imageUser');
// btn 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const  scissors = document.getElementById('scissors');

// phrase score
const phraseScore = document.getElementById('phraseScore');

let mpy;


// variable you ans bot in scrol
let scoreYou = 0;
let scoreBot = 0;
(function btnOnclick() {
    // rock inclick
    rock.onclick = function() {
        paper.disabled = true;
        scissors.disabled = true;
        
        rotareImage();
        
        setTimeout(function() {
            roboplay();
            imageUser.src = 'rock.jpg';
        }, 1500);
        
        
        setTimeout(function() {
            if (mpy === 1) {
                phraseScore.innerHTML = 'Score: Draw';
                stylephraseScore();
                totalscore();
            }
            else if (mpy === 2) {
                phraseScore.innerHTML = 'Score: Bot wins';
                stylephraseScore();
                scoreBot ++;
                totalscore();
            } 
            
            else {
                phraseScore.innerHTML = 'Score: You win';
                stylephraseScore();
                scoreYou ++;
                totalscore();

            }
        }, 2000);
        setTimeout(function() {
            deleteInnerHtml();
            fineCalcule();
            paper.disabled = false;
            scissors.disabled = false;
        },3000);
    }
    
    // p inclick
    paper.onclick = function() {
        
        rock.disabled = true;
        scissors.disabled = true;
        
        
        rotareImage();
        
        
        setTimeout(function() {
            roboplay();
            imageUser.src = 'paper.jpg';
        }, 1500);
        
        setTimeout(function() {
            if (mpy === 1) {
                phraseScore.innerHTML = 'Score: You win';
                stylephraseScore();
                scoreYou ++;
                totalscore();

            }
            else if (mpy === 2) {
                phraseScore.innerHTML = 'Score: Draw';
                stylephraseScore();
                totalscore();
            } 
            
            else {
                phraseScore.innerHTML = 'Score: Bot wins';
                stylephraseScore();
                scoreBot ++;
                totalscore();
            }
        }, 2000);
        setTimeout(function() {
            rock.disabled = false;
            scissors.disabled = false;
            deleteInnerHtml();
            
            fineCalcule();
        },3000);
    }

    // scissors inclick
    scissors.onclick = function() {
        
        rock.disabled = true;
        paper.disabled = true;

        rotareImage();
        
        
        setTimeout(function() {
            roboplay();
            imageUser.src = 'scissors.jpg';
        }, 1500);
        setTimeout(function() {
            if (mpy === 1) {
                phraseScore.innerHTML = 'Score: Bot wins';
                stylephraseScore();
                scoreBot ++;
                totalscore();
            }
            else if (mpy === 2) {
                phraseScore.innerHTML = 'Score: You win';
                stylephraseScore();
                scoreYou++;
                totalscore();
            } 
            
            else {
                phraseScore.innerHTML = 'Score: Draw';
                stylephraseScore();
                totalscore();
            }
        }, 2000);
        setTimeout(function() {
            rock.disabled = false;
            paper.disabled = false;
            deleteInnerHtml();
            fineCalcule();
        },3000);
        
        
    }
    
})();


// robo play
function roboplay() {
    let num = Math.ceil(Math.random() * 3);
    if (num === 1) {
        imageRobo.src = 'rock.jpg';
    }
    else if (num === 2) {
        imageRobo.src = 'paper.jpg';
    }
    else {
        imageRobo.src = 'scissors.jpg';
    }
    mpy = num;
}



// function rotor image
function rotareImage() {
    setTimeout(function() {
        imageRobo.src = 'rock.jpg';
        imageUser.src = 'scissors.jpg';
        
    }, 200);
    setTimeout(function() {
        imageRobo.src = 'paper.jpg';
        imageUser.src = 'rock.jpg';
    }, 400);
    setTimeout(function() {
        imageRobo.src = 'scissors.jpg';
        imageUser.src = 'scissors.jpg';
    }, 600);
    setTimeout(function() {
        imageRobo.src = 'paper.jpg';
        imageUser.src = 'rock.jpg';
    }, 800);
    setTimeout(function() {
        imageRobo.src = 'scissors.jpg';
        imageUser.src = 'paper.jpg';
    }, 1000);
    setTimeout(function() {
        imageRobo.src = 'rock.jpg';
        imageUser.src = 'scissors.jpg';
    }, 1200);
}



// 0  ||    1 ||   3

function totalscore() {
    score[0].innerHTML = scoreYou;
    score[1].innerHTML = scoreBot;
}

// delete innerHtml
function deleteInnerHtml() {
    phraseScore.innerHTML = '';
    phraseScore.style.display = 'none';
}


// style phraseScore
function stylephraseScore() {
    phraseScore.style.height = '40px';
    phraseScore.style.background = 'red';
    phraseScore.style.color = '#fff';
    phraseScore.style.display = 'flex';
    phraseScore.style.justifyContent = 'center';
    phraseScore.style.alignItems = 'center';
    
}

// fine play
function fineCalcule() {
    if (scoreBot === 3 || scoreYou === 3) {
        if (scoreBot === 3) {
            phraseScore.innerHTML = 'Result: Bot wins';
            stylephraseScore();
            
            setTimeout(function(){
                calculTime()
            },1)
        } else {
            phraseScore.innerHTML = 'Result: You win';
            stylephraseScore();
            
            setTimeout(function() {
                calculTime()
            }, 1)
        }
        scoreYou = 0;
        scoreBot = 0;
    }
}


// calcul time reload

function calculTime() {
    setTimeout(function(){
        phraseScore.innerHTML = '1';
            stylephraseScore();
    },1000)
    setTimeout(function(){
        phraseScore.innerHTML = '2';
            stylephraseScore();
    },2000)
    setTimeout(function(){
        phraseScore.innerHTML = '3';
        stylephraseScore();
    },3000)
    setTimeout(function(){
        window.location.reload()
    },3500)
    
}