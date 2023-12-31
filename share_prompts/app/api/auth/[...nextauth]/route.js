import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

import {h} from '@utils/database';
import {User} from "@models/user"

console.log({clientId:process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,})

const handler = NextAuth({
    providers: [
        GoogleProvider ({
            clientId:process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async({session}) {
        const sessionUser = await User.findOne({email:session.user.email})
        session.user.id = sessionUser._id.toString()
        return session;
    },
    async({profile}) {
        try {
            await h();
            const userExists = User.findOne({email:profile.email})
            if(!userExists){
                await User.create({
                    email:profile.email,
                    usermame:profile.name.replace("","").toLowerCase(),
                    image:profile.picture
                })
            }
        } catch (error) {
            console.log(error)
            return false
        }
    },
});

export { handler as GET, handler as POST };