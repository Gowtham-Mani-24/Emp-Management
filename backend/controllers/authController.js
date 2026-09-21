import bcrpyt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req,res,next)=>{
    try {
        const {name,email,password} =req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:'User alrwady exists'
            });
        }

        const hashedPassword = await bcrpyt.hash(password,10);

        const user =  await User.create({
            name,
            email,
            password:hashedPassword
        })

        res.status(201).json({
            message:'User registered successfully',
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            }
        })
    } catch (error) {
        next(error)
    }
};


export const login = async (req,res,next)=>{
    try {
        
        const {email,password} =req.body;
        
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message:'Invalid email or password'
            });
        }

        const isPasswordValid = await bcrpyt.compare(
            password,
            user.password
        )

        if(!isPasswordValid){
            return res.status(401).json({
                message:'Invalid email or password'
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1h'
            }
        );

        res.status(200).json({
            message:"Login Successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })

    } catch (error) {
        next(error);
    }
}