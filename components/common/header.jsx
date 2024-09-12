

import { ThemeSwitcher } from "../theme-switcher"
import { Tablets } from "lucide-react"

export const Header = () => {
  
  return (
    <header className="flex justify-between border-b border-b-gray-200 dark:border-b-gray-700">
      <div className="flex p-2">
        <Tablets size={38} /> 
        <h1 className="text-4xl mx-1">NextShad</h1>
      </div>
      
      <nav className="p-2">
        <ThemeSwitcher />
      </nav>
    </header>
  )
}