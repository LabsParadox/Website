  const scriptURL = 'https://script.google.com/macros/s/AKfycbznd9Rz_WyWv8kXnwPNkVGGOga36JL2lLs-weWLGRZM5iJEA_O7/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })