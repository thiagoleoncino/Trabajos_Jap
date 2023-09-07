const boton = document.getElementById("form");

  boton.addEventListener("submit", (e)=> 
  {
    e.preventDefault();

    const url = "https://jsonplaceholder.typicode.com/users";
      
    let name = document.getElementById("name").value;
    let last = document.getElementById("lastName").value;
    let date = document.getElementById("date").value;

    fetch (url, {
      method: "POST",
      body: JSON.stringify({
        'Nombre': name,
        'Apellido': last,
        'Fecha': date
      }),
      headers: {'Content-Type': 'application/json; charset=UTF-8'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
  })
