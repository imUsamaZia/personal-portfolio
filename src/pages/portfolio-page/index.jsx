// pages/portfolio.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const index = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const route = useRouter()
    useEffect(() => {
        // axios.get('/api/me')
        //     .then(res => {
        //         console.log("finding user id", res.data)
        //         setUser(res.data.user)
        //     })
        //     .catch(() => route.push('/login-form'))
        const checkAuth = async () => {
            try {
                const res = await axios.get('/api/me')
                console.log("finding user id", res.data)
                setUser(res.data.user)
            }
            catch (error) {
                route.push('/login-form')
                console.error('showing error', error)
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])
    const handleLogout = async () => {
        await axios.post('/api/logout')
        route.push('/login-form')
    }
    if (!user) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-[#654796] rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">My Portfolio</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {user ? (<div className="border p-4 rounded">
                        <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>User ID:</strong> {user.userId}</p>
                    </div>) : (<p>Not logged in</p>)}
                    <div className="border p-4 rounded">
                        <h2 className="text-xl font-semibold mb-4">Sample Portfolio Items</h2>
                        <div className="space-y-4">
                            <div className="p-3 bg-blue-50 text-blue-400 rounded">Project 1</div>
                            <div className="p-3 bg-blue-50 text-blue-400 rounded">Project 2</div>
                            <div className="p-3 bg-blue-50 text-blue-400 rounded">Project 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;