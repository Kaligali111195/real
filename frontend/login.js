document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://your-backend-url/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
        localStorage.setItem("token", data.token); // Store JWT token
        window.location.href = "dashboard.html"; // Redirect to dashboard
    }
});
