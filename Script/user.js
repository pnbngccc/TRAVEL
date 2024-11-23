const registerForm = document.getElementById("registerForm");
const nameElement = document.getElementById("name");
const userElement = document.getElementById("user");
const passElement = document.getElementById("pass");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!nameElement.value) {
        alert("Chưa nhập tên");
    }
    if (!userElement.value) {
        alert("chưa nhập email")
    }
    if (!passElement.value) {
        alert("Chưa nhập mật khẩu")
    }

    if (nameElement.value && userElement.value && passElement.value) {
        const data = {
            id: nameElement.value,
            username: userElement.value,
            password: passElement.value
        };
        fetch('/api/users/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify content type
            },
            body: JSON.stringify(data)
        });
    }

});