"use client";

import { useDisplay } from "../context";

export default function LayoutContent({ children }) {
  const { display, setDisplay } = useDisplay();

  return (
    <div>
      <div style={{width:'100vw',position:'relative',backgroundColor:'black',display:'flex',justifyContent:'space-evenly',zIndex:1000,border:'1px solid white'}}>
        {[1, 2, 3, 4].map(n => <button onClick={()=>setDisplay(n)} style={{backgroundColor:'white',padding:'5px 20px',margin:'5px 20px'}}>{n}</button>)}
      </div>

      {children}
    </div>
  );
}