'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteChangeListener() {
    const pathname = usePathname();

    useEffect(() => {
        // Small timeout to ensure DOM has updated
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                if (window.runInit) window.runInit();
                if (window.initWidgets) window.initWidgets();
                if (window.initFAQ) window.initFAQ();
                if (window.runInitialCalcs) window.runInitialCalcs();
            }
        }, 100);
    }, [pathname]);

    return null;
}
