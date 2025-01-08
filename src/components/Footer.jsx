import React from 'react'
import { Coffee, GitBranch, Check, AlertCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text text-xs flex justify-between items-center h-6 px-3">
      <div className="flex items-center space-x-3">
        <span className="flex items-center">
          <GitBranch className="w-3 h-3 mr-1" /> main
        </span>
        <span className="flex items-center">
          <Check className="w-3 h-3 mr-1" /> 0 problems
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span className="flex items-center">
          Powered by React <Coffee className="w-3 h-3 ml-1" />
        </span>
      </div>
    </footer>
  )
}

