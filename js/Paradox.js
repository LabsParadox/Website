const scriptURL = 'https://script.google.com/macros/s/AKfycbznd9Rz_WyWv8kXnwPNkVGGOga36JL2lLs-weWLGRZM5iJEA_O7/exec'
const form = document.forms['s2gs']

document.getElementById("Newsletter").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
  };
};

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });

    function changeValue()
    {

        var luvMessage = ['You\'re awesome!','Now we\'re cooking with gas!','Rodger Dodger!','Hacking Complete!','Thanks for subscribing!','Now THIS is epic!'];

        // Changes the value of the button
        document.getElementById('testButt').value = luvMessage[Math.floor(Math.random() * luvMessage.length)];
        form.SubButton.disabled = true;
    }