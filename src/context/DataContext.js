
import React,{useState, useContext} from 'react'

const DataContext = React.createContext([]);
export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({children}) => {
    const [userData, setUserData] = useState("nashe")
  return (
    <DataContext.Provider>
        {children}
    </DataContext.Provider>
   
  )
}

export default DataContextProvider