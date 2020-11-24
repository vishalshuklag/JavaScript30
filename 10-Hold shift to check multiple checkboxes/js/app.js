const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck (e){
    let inBetween = false;
    //Check if the user has shiftKey down,
    //AND also check if the user is checking the checkbox

    //  check if the user has already check one checkbox and then goes for shift+click
    // Check if user checks two different checkboxes

    if (e.shiftKey && this.checked && lastChecked && (lastChecked !== this)){
        //go ahead and perform task
        // loop over every checkbox
        checkboxes.forEach( checkbox => {
            if ( (checkbox === this || checkbox === lastChecked) ){
                inBetween = !inBetween;
            }
            // check every checkbox inbetween
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck));

// (function () { // encapsulating variables with IIFE
//     var lastcheck = null // no checkboxes clicked yet
  
//     // get desired checkboxes
//     var checkboxes = document.querySelectorAll('div.itemslist input[type=checkbox]')
  
//     // loop over checkboxes to add event listener
//     Array.prototype.forEach.call(checkboxes, function (cbx, idx) {
//       cbx.addEventListener('click', function (evt) {
  
//         // test for shift key, not first checkbox, and not same checkbox
//         if ( evt.shiftKey && null !== lastcheck && idx !== lastcheck ) {
  
//           // get range of checks between last-checkbox and shift-checkbox
//           // Math.min/max does our sorting for us
//           Array.prototype.slice.call(checkboxes, Math.min(lastcheck, idx), Math.max(lastcheck, idx))
//             // and loop over each
//             .forEach(function (ccbx) {
//               ccbx.checked = true
//           })
//         }
//         lastcheck = idx // set this checkbox as last-checked for later
//       })
//     })
//   }())