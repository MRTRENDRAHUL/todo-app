import React,{useState} from 'react';

export const Todo = () => {
    const[inputData,setInputData]= useState('');
    const[items,setItems] = useState([]);
    const addItems=()=>{
        if(!inputData){

        }else{
            setItems([...items, inputData]);
            setInputData('')
        }

    }
    const deleteItem=(id) =>{
        console.log(id);
        const updateditems = items.filter((elem,ind) =>
{
    return ind !== id;
})  
setItems(updateditems);
  }
  const removeAll = ()=>{
      setItems([]);
}
    return (
        <>
        <div className="main-div">
            <div className="child-div"></div>
            <figure>
                <img src={todo} alt="todologo"/>
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems"></div>
            <input type="text" placeholder ="Add Items"
            value={inputData}
            onChange ={(e)=> setInputData(e.target.value)}
            />
            <i className ="fa fa-plus add-btn" title="Add Item" onClick={addItems}></i>
            <div className="showItems">
                {
                    items.map((elem,ind) => {
                        return(
                            <div className="eachItems" key={ind}>
                    <h3>{elem}</h3>
                    <i className ="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(id)}></i>

                </div>

                        )
                    })
                }
                
            </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Checklist</span></button>
            </div>
            
        </div>
    
    </>
    )
}
