"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken } from '../../lib/auth';

export default function AdminRedirect() {
    const router = useRouter();

    useEffect(() => {
        const token = getAuthToken();
        if (token) {
            router.replace('/admin/dashboard');
        } else {
            router.replace('/admin/login');
        }
    }, [router]);

    return null;
}
