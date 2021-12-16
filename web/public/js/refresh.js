
function refreshPage(isTrue) {
    
    if(isTrue == true) {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
    
}