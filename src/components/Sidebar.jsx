import React from 'react'
import { Files, Search, GitBranch, Bug, Puzzle, Settings } from 'lucide-react'

function Sidebar({ setActiveTab }) {
  const sidebarIcons = [
    { icon: <Files size={24} />, active: true, label: "Files" },
    { icon: <Search size={24} />, label: "Search" },
    { icon: <GitBranch size={24} />, label: "Source Control" },
    { icon: <Bug size={24} />, label: "Debug" },
    { icon: <Puzzle size={24} />, label: "Extensions" }
  ]

  return (
    <div className="w-12 bg-[#333333] flex flex-col h-full">
      {sidebarIcons.map((item, index) => (
        <button
          key={index}
          aria-label={item.label}
          className={`p-3 border-l-2 ${
            item.active 
              ? 'border-white bg-[#252526] text-white' 
              : 'border-transparent text-[#858585] hover:text-white'
          }`}
        >
          {item.icon}
        </button>
      ))}
      <button className="mt-auto p-3 text-[#858585] hover:text-white">
        <Settings size={24} />
      </button>
    </div>
  )
}

export default Sidebar

