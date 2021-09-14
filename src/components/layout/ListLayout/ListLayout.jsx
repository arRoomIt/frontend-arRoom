import React,{useState,useEffect} from 'react';
import { Header, Card} from '../../sections';
import { getListWorkspace } from '../../../api/WorkspaceApi';

function ListLayout() {

   
    const [list, setList] = useState([]);
   
    useEffect(() => {
      getListWorkspace()
  
      const data= getListWorkspace();
      setList(data);
    },[]
  );
          
       
    return (
        <>
           <Header/>
           <div>
                {list.map(element =>{
                    return(
                       <div key={element.id}> 
                            <h1>{element.title}</h1>
                       </div>
                    )})}
           </div>
            <Card />
        </>
    )
}

export default ListLayout;
