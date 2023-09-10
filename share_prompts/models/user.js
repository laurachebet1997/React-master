import {Schema,models ,model} from 'mongoose'

const UserSchema = new Schema ({
    email: { type:String,
             required:[true, 'email is required'] ,
             unique:[true, 'email already exists']
            },
    username: {type:String,
                required:[true, 'username is required'] ,
                unique:[true, 'username already exists'],
                match:[/^[A-Za-z][A-Za-z0-9_]{8,20}$/, 
                'should start with an alphabet and be of length 8 to 20 ']
       },
    image: {type:String}   
})

  
const User = models.User || model('User', UserSchema)
module.exports = User;
