import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = {
  likes: number
  addLike: () => void
}

const LikesContext = createContext<LikesContextValue | undefined>(undefined)

type LikesProviderProps = {
  children: ReactNode
}

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes((current) => current + 1)
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes() {
  const context = useContext(LikesContext)

  if (!context) {
    throw new Error('useLikes must be used inside LikesProvider')
  }

  return context
}