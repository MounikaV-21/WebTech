function validateForm(){
    var value = true;
    
     var nameTyped = document.formName.nameName.value;
     console.log('nameTyped>>>', nameTyped);
     var contactTyped = document.formName.contactName.value;
     console.log('contactTyped>>>', contactTyped);
    
     if(contactTyped.length == 10){
         alert('Success')
     }else{
        value = false;
        setError('spanContactId', 'Please enter 10 digit number');
       
     }
     var password1 = document.formName.Pass1name.value;
     var password2 = document.formName.Pass2name.value;
      if (password1 == password2 ) {
          alert('Password matches')
         
      } else {
          value = false;
          setError('confirmPasswordSpanId', 'Please enter same password');
      }
     return value;
}
//function validate(){
  //  const h1Text = document.getElementById('h1Id').innerHTML;
    //alert(h1Text);
//}

function setError(id, message){
    alert(id)
    element = document.getElementById(id).innerHTML = message;
}
