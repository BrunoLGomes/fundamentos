export default function handler(req, res) {
    
    if(req.method === "GET") {
        handleget(req, res)
    } else {
        res.status(405).send()
    }
}

function handleget(req, res){
    res.status(200).json({
        id: 3,
        nome: 'blabla',
        email: 'blablabla@gmail.com.br'
    })
}