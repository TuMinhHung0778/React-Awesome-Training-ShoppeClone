const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log(this.readyState);
}
xhttp.open('GET', 'https://reqres.in/api/users?page=2', true)
xhttp.send()