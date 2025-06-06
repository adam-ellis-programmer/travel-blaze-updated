import { createContext, useState, useContext } from 'react'

const AppContext = createContext()

// used for the App wrap
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        pageId,
        setIsSidebarOpen,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// import into pages for state
export const useGlobalContext = () => {
  return useContext(AppContext)
}
