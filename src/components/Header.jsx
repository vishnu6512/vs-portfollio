import React from 'react'
import { Menu, Search, Settings, Minus, Square, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

function Header({ toggleSidebar }) {
  const { theme, toggleTheme } = useTheme()
  const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help']

  return (
    <div className="h-8 flex items-center justify-between bg-[#323233] text-[#CCCCCC] text-xs">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="px-2 hover:bg-[#ffffff1a]">
          <Menu size={14} />
        </button>
        <div className="flex items-center">
          {menuItems.map(item => (
            <button key={item} className="px-3 py-1 hover:bg-[#ffffff1a]">
              {item}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center px-2">
        <div className="flex items-center bg-[#3c3c3c] rounded mx-2 px-2">
          <Search size={14} className="text-[#cccccc]" />
          <input 
            type="text" 
            placeholder="Portfolio"
            className="bg-transparent border-none outline-none w-48 px-2 py-1 text-sm"
          />
        </div>
        <button 
          onClick={toggleTheme} 
          className="hover:bg-[#ffffff1a] p-1.5"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <button className="hover:bg-[#ffffff1a] p-1.5">
          <Settings size={14} />
        </button>
        <button className="hover:bg-[#ffffff1a] p-1.5">
          <Minus size={14} />
        </button>
        <button className="hover:bg-[#ffffff1a] p-1.5">
          <Square size={14} />
        </button>
        <button className="hover:bg-[#ffffff1a] hover:text-white p-1.5">
          <X size={14} />
        </button>
      </div>
    </div>
  )
}

export default Header

