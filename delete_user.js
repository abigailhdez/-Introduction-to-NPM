const axios = require('axios').default;

async function makeDeleteRequest(userNum) {

    let res = await axios.delete('http://localhost:3000/users', 2);

    console.log(res.status);
}

makeDeleteRequest();
