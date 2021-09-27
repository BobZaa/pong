const myPictures = ["reklam.png", "PEHOAGPS_BEST_AD_EUNE.png", "BETTER_AD.jpg"];
                                                 
window.onload = a => {
    let randomNum = Math.floor(Math.random() * myPictures.length);
    const malware = document.querySelector(".malware");    
    malware.src = myPictures[randomNum];
                                                                  
    randomNum = Math.floor(Math.random() * myPictures.length);
    const wadbot = document.querySelector(".wadbot");    
    wadbot.src = myPictures[randomNum];
}