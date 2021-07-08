window.onload = function () {
    let user = document.getElementById("username");
    let pw = document.getElementById("password");
    let em = document.getElementById("email");
    document.getElementById("btn").onclick = async function (event) {

        event.preventDefault();
        console.log("click")
        let pass = {
            method: "POST",
            body: JSON.stringify({ username: user.value, password: pw.value, email: em.value }),
            headers: { "Content-Type": "application/json" }

        }
        const result = await fetch("http://localhost:3000/register", pass)
            .then(data => data.json())
        console.log(result);

    }

    document.getElementById("butn").onclick = async function (event) {

        event.preventDefault();
        let user1 = document.getElementById("user").value;
        let pw1 = document.getElementById("pass").value;
        console.log(user1,pw1);
        console.log("click")
        let pass1 = {
            method: "POST",
            body: JSON.stringify({ username: user1, password: pw1 }),
            headers: { "Content-Type": "application/json" }

        }
        const result = await fetch("http://localhost:3000/login", pass1)
            .then(data => data.json())
            console.log(result)
    
         if(result.accessToken){
           sessionStorage.setItem('token',result.accessToken)
         }
         else{
             document.getElementById("errormsg").innerText="wrong username and password";
         }

    }


}
