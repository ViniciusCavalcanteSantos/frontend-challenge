"use client";

import { ReactNode } from 'react'
import { FilterContextProvider } from '@/contexts/FilterContext'
import { Header } from './components/Header'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <FilterContextProvider>
      <Header />

      {children}
    </FilterContextProvider>
  )
}