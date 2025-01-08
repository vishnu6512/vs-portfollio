'use client'

import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('about.js')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex overflow-hidden">
            {isSidebarOpen && (
              <div className="w-12 flex-shrink-0">
                <Sidebar setActiveTab={setActiveTab} />
              </div>
            )}
            <Editor activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

