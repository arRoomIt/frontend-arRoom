import React,{useState,useEffect} from 'react';
import { Header, Card} from '../../sections';
import { getListWorkspace } from '../../../api/WorkspaceApi';

function ListLayout() {

    const [list, setList] = useState([]);
   
    useEffect(() => {

      getListWorkspace().then(data => {
        setList(data);
        console.log("ListLayout-->",data);
        })
    },[]
  );

    return (
        <>
           <Header/>
            <div>
              {list.map(element => {
                return(
                  <Card key={element._id} workspace={element} />
                )
              })}
            </div>
        </>
    )
}

export default ListLayout;
