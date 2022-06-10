const fs = require('fs');

const {join} = require('path');
const { send } = require('process');

const filepath = join(__dirname, 'users.json');

const getUser = ()=> {

    const data = fs.existsSync(filepath)
    ? fs.readFileSync(filepath)
    : []

    try {
        return JSON.parse(data)    
    } catch (error) {
        return []
    }
    
}

const saveUSer = (users)=>  fs.writeFileSync(filepath, JSON.stringify(users, null, '\t'));


const routesUser = (app)=>{

    app.route('/user/:id?')
        .get((req, res)=>{
            const data = getUser();

           return res.send({data});
        })
        .post((req, res)=> {
            const users = getUser();

            users.push(req.body);
            saveUSer(users);
            
           return res.status(200).send('OK!');
        })
        .put((req, res)=> {
            const user = getUser();

            saveUSer(user.map(user=> {
                if (user.id === req.params.id){
                    return {
                        ...user,
                        ...req.body
                    }
                }

                return user
            }));

            return res.status(200).send('OK!');
        })
        .delete((req, res)=>{
            const users = getUser();

            saveUSer(users.filter(user=> user.id !== req.params.id))
            
            res.status(200).send('Deletado!')

        })

}

module.exports = routesUser