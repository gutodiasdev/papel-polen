'use client'

import React from "react";
import TagManager from 'react-gtm-module';
import { QueryClient, QueryClientProvider } from 'react-query';

type ProvidersProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export function Providers({children}: ProvidersProps) {
    if (typeof window !== "undefined") {
        TagManager.initialize({ gtmId: 'GTM-P5MBKH4W' })
    }

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
}