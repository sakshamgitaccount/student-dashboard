import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { AuthContext } from '../contexts/AuthContext';

export default function LoginForm() {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (user) {
        return (
            <button onClick={() => signOut(auth)} className="m-4 px-4 py-2 bg-red-500 text-white rounded">
                Logout
            </button>
        );
    }

    const handleLogin = () => {
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .catch(e => setError(e.message));
    };

    return (
        <div className="max-w-sm mx-auto p-4 border rounded shadow my-4">
            {error && <p className="text-red-600 mb-2">Firebase: {error}</p>}
            <input
                type="email" placeholder="Email"
                value={email} onChange={e => setEmail(e.target.value)}
                className="block w-full p-2 mb-2 border rounded"
            />
            <input
                type="password" placeholder="Password"
                value={password} onChange={e => setPassword(e.target.value)}
                className="block w-full p-2 mb-4 border rounded"
            />
            <button onClick={handleLogin} className="w-full p-2 bg-green-500 text-white rounded">
                Login
            </button>
        </div>
    );
}
