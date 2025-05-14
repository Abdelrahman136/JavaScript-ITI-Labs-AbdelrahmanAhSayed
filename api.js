async function fetchData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }
        const users = await response.json();

        console.log(users);
        display(users)
        return users;
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

function display(users) {
    const table = document.querySelector("#users");
    console.log(table)
    const tr = document.createElement('tr');
    let apiKeys = Object.keys(users[0])
    for(let i = 0; i < apiKeys.length; i++) {
        // console.log(apiKeys[i])
        let cell = document.createElement('td');
        cell.innerText = apiKeys[i];
        tr.appendChild(cell);
    }
    table.appendChild(tr)

    for(let i = 0; i < users.length; i++) {
        const tr = document.createElement('tr');
        let values = Object.values(users[i])
        for(let val=0; val < values.length; val++) {
            let obj = ""
            console.log(typeof values[val])
            // console.log(values[val].)
            if(typeof values[val] == 'object'){
                console.log("HHHHHHHHHHHHHHHIIIIII")
                for(o in values[val]) {
                    obj+= o + " , ";
                }
                console.log(obj)
                let cell = document.createElement('td');
                cell.innerText = obj;
                tr.appendChild(cell);
            }
            else{
                console.log(values[val])
                let cell = document.createElement('td');
                cell.innerText = values[val];
                tr.appendChild(cell);
            }
        }
        table.appendChild(tr)
    }
}

let users = fetchData();
// display(users);