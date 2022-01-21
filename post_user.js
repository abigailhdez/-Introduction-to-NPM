const axios = require('axios').default;

async function makePostRequest() {

    params = {
        id: 7,
        first_name: 'Fred2',
        last_name: 'Blair2',
        email: 'freddyb342@gmail.com'
      }

      let res = await axios.post('http://localhost:3000/users', params);

    console.log(res.data);
}

makePostRequest();
