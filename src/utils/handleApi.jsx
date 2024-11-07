import axios from 'axios'

const getAllRes = async(setRespostas, setContagem)=>{
    axios
    .get('https://parceiros-api-01.vercel.app/api/usuarios')
    .then(({data})=>{
        console.log('data -->', data)
        setRespostas(data)   
        contarVotos(data,setContagem);

    })

}

const addForm = async(formData, setFormData, setRespostas,setContagem)=>{
    try {
        const response = await axios.post('https://parceiros-api-01.vercel.app/api/usuarios', formData,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('Cadastro enviado com sucesso ', response.data);
        console.log(response.data.status)
        alert('Voto Registrado')
        setFormData({
            name:'',
            email:'',
            voto:''
        })
        getAllRes(setRespostas,setContagem);
    } catch (error) {
        console.error('Erro ao cadastrar voto', error.status);
        if(error.status === 400){
            alert('Email já cadastrado')
        }
    }        
}

const contarVotos = (respostas, setContagem)=>{
    const novaContagem = {
        SIM:0,
        NAO:0
    }
    respostas.forEach((item)=>{
        if(item.voto ==='SIM'){
            console.log(item.voto)
            novaContagem.SIM +=1;
        } else if (item.voto === 'NÃO'){
          novaContagem.NAO +=1;
        }
    })
    setContagem(novaContagem)
  }


export {getAllRes, addForm}


//Metodo GET
// axios
//         .get('https://parceiros-api-01.vercel.app')
//         .then(({data})=>{
//             console.log('data -->', data)
//             setRes(data)
//         })


//Modo FETCH
// const res = await fetch('/api/usuarios')
//       .then(res =>{
//         //console.log(res); podemos ver os estados da resposta
//         if(!res.ok){
//           throw Error('Problemas de conexão com o banco de dados')          
//         }
//         return res.json()                
//       })
//       .then(data =>{
//         console.log(data);        
//       })
//       .catch(err=>{
//         console.log(err)
//       })



// await fetch('/api/usuarios',{ 
//     method: 'POST',
//     body: JSON.stringify(usuario),
//     headers:{ "Content-Type":"application/json" },                        
// }).then(()=>{
//     console.log('Novo Usuário adicionado')
// })



// try {
//     const response = await axios.post('/api/usuarios', {formData})
//     console.log('Cadastro enviado com sucesso ', response.data);
//     alert('Voto Registrado')
// } catch (error) {
//     console.error('Erro ao cadastrar voto', error);
// }