import { delUser, addUser, asyncEditUser, searchUser } from "./api.js"

let tbody = document.querySelector(".tbody")

let newUser = document.querySelector(".newUser")
newUser.onclick = () => {
    dialogAdd.showModal()
}
let dialogAdd = document.querySelector(".dialogAdd")
let formAdd = document.querySelector(".formAdd")

let dialogEdit = document.querySelector(".dialogEdit")
let formEdit = document.querySelector(".formEdit")
let inpSearch = document.querySelector(".inpSearch")


///search
inpSearch.oninput = () => {
    searchUser(inpSearch.value);
};

// formAdd
formAdd.onsubmit = (event) => {
    event.preventDefault();

    let newUser = {
        id: Date.now(),
        name: formAdd["name"].value,
        age: formAdd["age"].value
    }
    addUser(newUser)
}


function get(newData) {

tbody.innerHTML=""

    newData.forEach(element => {

        let tr = document.createElement("tr")

        let forName = document.createElement("td")
        forName.innerHTML = element.name

        let forAge = document.createElement("td")
        forAge.innerHTML = element.age

        // del
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.onclick = () => {
            delUser(element.id)
        }

        // edit

        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.onclick = () => {
            editUser(element)
        }

        tr.append(forName, forAge, btnDel, btnEdit)
        tbody.append(tr)


    });
}

function editUser(user) {
    dialogEdit.showModal()
    formEdit["EditName"].value = user.name
    formEdit["EditAge"].value = user.age
    formEdit.onsubmit = (event) => {
        event.preventDefault()
        let newEditUser = {
            name: formEdit["EditName"].value,
            age: formEdit["EditAge"].value
        }
        asyncEditUser(user.id, newEditUser)
        dialogEdit.close()
    }
}


export { get }
