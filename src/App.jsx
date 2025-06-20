import { useState } from 'react'
import './App.css'
import explorer from './data/folderdata'
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [count, setCount] = useState(0)
  const [explorerData, setExplorerData] = useState(explorer);

  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder) =>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)

    setExplorerData(finalTree)
  }

  return (
    <div className='App'>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  )
}

export default App
