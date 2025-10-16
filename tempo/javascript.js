document.getElementById("buscar").addEventListener("click", function () {
    const cidade = document.getElementById("cidade").value;
    if (!cidade) return alert("Digite uma cidade!");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://wttr.in/${cidade}?format=j1`);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const clima = data.current_condition[0];
            const temp = clima.temp_C;
            const desc = clima.weatherDesc[0].value;

            document.getElementById("info").innerHTML = `
        <h2>${cidade}</h2>
        <p>${desc}</p>
        <p>${temp}°C</p>
      `;

            // Mudança de fundo
            if (desc.includes("rain")) document.body.style.background = "#4a90e2";
            else if (desc.includes("cloud")) document.body.style.background = "#95a5a6";
            else document.body.style.background = "#f39c12";
        }
    };
    xhr.send();
});