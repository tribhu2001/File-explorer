import React, { useState } from 'react'

const Folder = ({handleInsertNode,explorer}) => {
  const [showChild, setShowChild] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  })
  
  const handleNew = (e,isFolder) =>{
    e.stopPropagation();
    setShowChild(true);
    setShowInput({
      visible: true,
      isFolder: isFolder
    })
  }

  const onAddFolder = (e) =>{
    if(e.keyCode == 13 && e.target.value){
      handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
      setShowInput({...showInput, visible: false})
    }
  }
  if(explorer.isFolder){
    return (
    <div className='Parent-Folder'>
      <div className='Folder' onClick={()=>{setShowChild(!showChild)}}>
        <span>📁{explorer.name}</span>

        <div>
          <button onClick={(e)=>handleNew(e,true)}>Folder +</button>
          <button onClick={(e)=>handleNew(e,false)}>File +</button>
        </div>
      </div>
      <div style={{paddingLeft: '25px'}}>
        {
          showInput.visible && (
            <div className='inputcontainer'>
              <span>{showInput.isFolder ? '📁' : '📃'}</span>
              <input 
              className='inputcontainer__input'
              autoFocus
              type='text'
              onKeyDown={(e)=>onAddFolder(e)}
              onBlur={()=>setShowInput({...showInput,visible: false})}
              />
            </div>
          )
        }
        {showChild && explorer.items.map((ex)=>{
          return(
            <Folder handleInsertNode={handleInsertNode} explorer={ex} key={ex.id}/>
          )
        })}
      </div>
    </div>
  )
  }
  else{
    return(
      <div>📃{explorer.name}</div>
    )
  }
  
}

export default Folder
