import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import { JWT_SECRET } from "../../config";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}:AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            throw new Error("Email ou senha incorretos.")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email ou senha incorretos.")
        }
        
        //Td certo - gerar um token JWT e devolver os dados do user
        const token = sign(
            {
                name:user.name,
                email:user.email
            },
            JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id:user.id,
            name: user.name,
            email: user.email,
            token: token

        }
    }
}

export {AuthUserService};