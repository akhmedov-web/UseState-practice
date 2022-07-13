import React,{useState} from 'react';
import Card from "./Card";
export default function App() {
const [show,setShow]=useState(false);
console.log(show);
  return (
    <div>
<button type="button" class="btn btn-primary showBtn" onClick={()=>setShow(!show)} >Open card</button>
{show ? <Card/> : null}
    </div>
  )
}
