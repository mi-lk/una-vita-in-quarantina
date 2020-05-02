console.log("Happiness is what you make of it.");

function flip(x) {
    let calm = document.getElementById('calm-gallery');
    let care = document.getElementById('care-gallery');
    let cute = document.getElementById('cute-gallery');
    calm.style.display = 'none';
    care.style.display = 'none';
    cute.style.display = 'none';
    switch(x) {
        case 1:
            calm.style.display = 'flex';
            break;
        case 2:
            care.style.display = 'flex';
            break;
        case 3:
            cute.style.display = 'flex';
            break;
        default:
            //
    }
}