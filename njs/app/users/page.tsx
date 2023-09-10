import Link from "next/link"
import getAllUsers from "@/lib/getAllUsers"

export default async function UsersPage() {
    const usersData : Promise<User[]> = getAllUsers()
    const users = await usersData
    console.log(users)

    {/*<Link href={`/users/${user.id}`}>{user.username}</Link>
                   <br/>
                  <h1 key={user.id}>
                    {user.name}
                  </h1>
                <br/> */}
    
    const content = (
        <section>
            <h2> <Link href="/">home</Link> </h2>            
            {users.map(user=>{
                <h1>{user.name}</h1>
            })}
        </section>
    )
    return content
}
