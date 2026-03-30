
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextUtils.js';
import { auth, db } from '../firebase/firebaseClient';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';



export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);
	const [authError, setAuthError] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
			setUser(firebaseUser);
			setLoading(false);
			if (firebaseUser) {
				try {
					const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
					if (userDoc.exists()) {
						setRole(userDoc.data().role || null);
					} else {
						setRole(null);
						setAuthError('Role tidak ditemukan di Firestore.');
					}
				} catch (err) {
					setRole(null);
					setAuthError('Gagal mendapatkan role: ' + err.message);
				}
			} else {
				setRole(null);
			}
		});
		return () => unsubscribe();
	}, []);

	const logout = async () => {
		await signOut(auth);
		setUser(null);
		setRole(null);
	};

	return (
		<AuthContext.Provider value={{ user, role, loading, logout, authError }}>
			{children}
		</AuthContext.Provider>
	);
}
