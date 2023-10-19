import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        require: true,
        unique: true,
    },

    email:{
        type: 'string',
        require: true,
        unique: true,
    },

    passwords:{
        type: 'string',
        require: true,
    },
}, {timestamps: true});


const User = mongoose.model('User', userSchema);
export default User;