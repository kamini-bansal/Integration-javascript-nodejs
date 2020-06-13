
function test () {

         var xhr = new window.XMLHttpRequest();
         xhr.onreadystatechange = function() {
             if (xhr.readyState === 4) {
               document.getElementById('abc').innerHTML = xhr.responseText;
             }
           };
         xhr.open('GET', 'http://localhost:3000/about', true)
         xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
         xhr.send()
       }

function test1(){
//
//
  $.ajax({
        url: 'http://localhost:3000/about/1991',
        type: 'GET',
        success: function (data) {

            console.log('Success: ')
            document.getElementById("abc").innerHTML=data;
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);

        },
    });
}

function test2(){
  var data = {};
					data.title = "title";
					data.message = "message";
  $.ajax({
        url: 'http://localhost:3000/about',
        type: 'POST',
        data: data,
				contentType: 'application/json',
        success: function (data) {

            console.log('Success: ')
            document.getElementById("abc").innerHTML=data;
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);

        },
    });
}

function test3(){
  $.ajax({
        url: 'http://localhost:3000/create',
        type: 'POST',
        data: JSON.stringify({
          user: {
            name: "John",
            email: "john@example.com"
          }
        }),
        complete: function (response)
              {

              }
    });
}
