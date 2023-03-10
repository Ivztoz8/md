
M.AutoInit();

// Floating navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });

// Close button
window.onload = function(){
  document.getElementsByClassName('close').onclick = function(){
      this.parentNode.parentNode.remove();
      return false;
  };
};





