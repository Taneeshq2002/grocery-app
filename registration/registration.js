function register(){
     const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();
    const formData={};
     for (const element of form.elements) {
    if (element.name) { // Ensure the element has a 'name' attribute
      formData[element.name] = element.value;
    }
  }

  console.log(formData)

  sessionStorage.setItem('formData', JSON.stringify(formData));
    console.log("Success");
})
     }