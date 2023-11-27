import { get } from "./dom.js";

const API = "http://localhost:3000/data"


// get
async function getData() {
    try {
        let { data } = await axios.get(API)
        get(data)
    } catch (error) {
        console.error(error);
    }
}



// delete
async function delUser(id) {
    try {
        let { data } = await axios.delete(`${API}/${id}`)
    } catch (error) {
        console.error(error);
    }
}


// add
async function addUser(newUser) {
    try {
        let { data } = await axios.post(API, newUser);
        getData();
    } catch (error) {
        console.log(error);
    }
}


// edit
async function asyncEditUser(id, editUser) {
    try {
        let { data } = await axios.put(`${API}/${id}`, editUser)
    } catch (error) {
        console.error(error);
    }
}

///search
async function searchUser(searValue) {
    try {
        let { data } = await axios.get(`${API}?q=${searValue}`)
        get(data)
    } catch (error) {
        console.log(error);
    }
}

export { getData, delUser, addUser, asyncEditUser, searchUser }