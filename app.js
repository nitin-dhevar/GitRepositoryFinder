//init github
const gitRepo = new Github();
const ui = new UI();
//Search Repo

const searchRepo = document.querySelector('.searchGithub');

// add event listener
searchRepo.addEventListener('keyup',e=>{

    //get input text
    const userText = e.target.value;
    if(userText !== ''){
    //make an http call to github api
    gitRepo.getRepo(userText)
    .then(data=>{
        //display Results
        ui.showRepo(data);

    });


    }else{
        ui.clearProfile();
        
    }
})