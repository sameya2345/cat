const userContainer = document.getElementById('user-container');

async function fetchUser() {
    let userArray = [];
    await fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((json) => userArray.push(json.users))

    userArray[0].forEach((value) => {
        userContainer.innerHTML += `
        <div class="single-user">
        <img src="${value.image}"class="profile-pic"/>
                    <h3>Name:${value.farstName} ${value.lastName}</h3>
                    <div class="age-gender">
                        <span> ${value.age}</span>
                        <span> ${value.gender}</span>
                    </div>
                    <p class="phone">pohne : ${value.phone}</p>
                    <p class="email">Email : ${value.email}</p>
                    <p class="pass">pass : ${value.password}</p>

                </div>
                `
    })
}

fetchUser()