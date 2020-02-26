
function apiCall () {
   $.ajax({
    url: 'https://randomuser.me/api/?inc=name,email,phone,id,picture&results=10',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  }); 
}

module.exports = apiCall;