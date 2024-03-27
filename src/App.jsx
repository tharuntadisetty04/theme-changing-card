import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [thememode, setThememode] = useState("light")

  const lightmode = () => {
    setThememode("light")
  }

  const darkmode = () => {
    setThememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <ThemeProvider value={{ thememode, lightmode, darkmode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
