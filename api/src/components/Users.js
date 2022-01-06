import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");

    console.log("users state", users);
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        try {
            setloading(true)
            const res = await JSONHTTP.get("users")
            setloading(false);
            // console.log('res', res);
            //to store data 
            const data = res.data
            setusers(data);
        } catch (err) {
            console.log(err);
            setloading(false);
            seterror(err);

        }
    };

    if (!loading) {
        if (error) {
            return <div style={{ color: "red" }}>{error.message}</div>;
        } else {
            return (
                <div>
                    {users.map((user) => {
                        return <p key={user.id}>{user.name}</p>;
                    })}
                </div>
            );
        }
    } else {
        return <h2 style={{ color: 'blue' }}>loading...</h2>
}
}

    export default Users
