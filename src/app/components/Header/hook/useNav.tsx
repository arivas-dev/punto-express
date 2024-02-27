'use client'
import { useEffect, useState } from "react";

export function useNav() {
    const [path, setPath] = useState('/');
    
    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    return { path };
}