document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let flavor = document.getElementById("flavor").value;

    let whatsappURL = https://wa.me/085697445308?text=Halo,%20saya%20${name}%20ingin%20memesan%20Basreng%20rasa%20${flavor}.%20Nomor%20HP:%20${phone};

    window.open(whatsappURL, "_blank");
});