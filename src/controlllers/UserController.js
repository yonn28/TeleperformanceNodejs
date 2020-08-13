const controller = {}

controller.list = (req,res) =>{
    req.getConnection((err, conn)=>{
         conn.query('SELECT * FROM  users',(err,users)=>{
            if(err){
                res.json(err);
            }
            res.render('users',{
                data: users
            }) 
         });
    })
    
}


controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        if(err){
            res.json(err);
        }
        conn.query('INSERT INTO users set ?',[data], (err, user)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/')
        });
    })
}

controller.edit= (req,res) =>{
    const data = req.params;
    req.getConnection((err, conn)=>{
        if(err){
            res.json(err);
        }
        conn.query('SELECT * FROM users WHERE  id = ?',[data.id], (err, user)=>{
            if(err){
                res.json(err);
            }

            console.log(user)
            res.render('userUpdate',{data: user[0]})
        });
    })
}

controller.update = (req,res) =>{
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn)=>{
        if(err){
            res.json(err);
        }
        conn.query('UPDATE users set ? WHERE id =  ?',[newCustomer,id], (err, user)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/');
        });
    })
}

controller.delete = (req,res) =>{
    const data = req.params;
    req.getConnection((err, conn)=>{
        if(err){
            res.json(err);
        }
        conn.query('DELETE FROM users WHERE  id = ?',[data.id], (err, user)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/')
        });
    })
}



module.exports = controller;