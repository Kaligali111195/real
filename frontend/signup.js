document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://your-backend-url/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
        window.location.href = "login.html"; // Redirect to login
    }
});
