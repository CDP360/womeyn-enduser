import React, { useState } from "react";
import styles from "./styles/Orderdetails.module.scss";
function Orderdetails() {
  const [topping, setTopping] = useState("");

  const index=0;
  const data = [
    {
      id: 1,
      name: "size",
      vaiations: ["m","c","l","o"]
    },
    {
      id: 2,
      name: "color",
      vaiations: ["2","3","4","5"]
    },
    
  ]

  console.log(data[0],"data")


  return (
    <div className="mainsection">

      
      {/* <div className="insidesection">
        <div>
          {topping}
        </div>
        {data[index]?.map((item, index) => {
          return (
            <div>

{item?.name}
           

{item?.vaiations?.map((item,index)=>{
  return(
    <div>
      
<div className={styles.checkbox}>
                <input type="radio" name={item} value={item} id={item} checked={topping==item}  onChange={onOptionChange}/>
                <label for={item}>
                  <i></i>
                  <span>{item}</span>
                </label>


              </div>
    </div>
  )
})}
              


            </div>
          )
        })}
      </div>





      <div>





       
      </div> */}
    </div>
  );
}

export default Orderdetails;
