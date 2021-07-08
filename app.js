const URL_BASE = 'https://petstore.swagger.io/v2'

function crearUsuario(){
  axios.post(URL_BASE+'/user', 
    {
      username: 'danyparc',
      firstName: 'Daniel',
      lastName: 'GM',
      email: 'danyparc@gmail.co',
      password: '12345',
      phone: '5555555555'
    }
  ).then(response=>{
    console.log(response.status, response.data)
  }).catch(error=>{
    console.error(error);
  })
}
crearUsuario()