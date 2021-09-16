import React,{useState,useEffect} from 'react';
import { Card,Paginacion,Footer} from '../../sections';
import { getListWorkspace } from '../../../api/WorkspaceApi';
import { SimpleGrid,Divider } from "@chakra-ui/react"


function ListLayout() {

    const [list, setList] = useState([]);
    let intViewportWidth = window.innerWidth;
    console.log(intViewportWidth);
   
    useEffect(() => {

      getListWorkspace().then(data => {
        setList(data);
        console.log("ListLayout-->",data);
        })
    },[]
  );
  
  if(intViewportWidth <= 768){
      return(
        <>
        
         <div>
         <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
           {list.map(element => {
             return(
               <Card key={element._id} workspace={element} />
             )
           })}
           </SimpleGrid>
         </div>
         <Paginacion/>
         <Footer/>
     </>
      )
  }

    return (
        <>
           
           <Divider orientation="horizontal" />
            <div>
            <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
              {list.map(element => {
                return(
                  <Card key={element._id} workspace={element} />
                )
              })}
              </SimpleGrid>
            </div>
            <Paginacion/>
            <Footer/>
        </>
    )

}

export default ListLayout;
