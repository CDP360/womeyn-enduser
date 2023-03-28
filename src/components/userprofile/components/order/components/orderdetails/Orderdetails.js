import React, { useState } from "react";
import styles from "./styles/Orderdetails.module.scss";
function Orderdetails() {
  const [topping, setTopping] = useState("");

  const index = 0;
  const data =   {
      id: 1,
      name: "size",
      vaiations: ["m", "c", "l", "o"]
    };
   

  
const onOptionChange=(e)=>{
  setTopping(e?.target.value)
}



  return (
    <div className="mainsection">


      <div className="insidesection">
        <div>
          {topping}
        </div>
        {/* {data[0]?.map((item, index) => {
          return (
            <div>

              {item?.name} */}


              {data?.vaiations?.map((item, index) => {
                return (
                  <div>

                    {/* <div className={styles.checkbox}>
                      <input type="radio" name={item} value={item} id={item} checked={topping == item} onChange={onOptionChange} />
                      <label for={item}>
                        <i></i>
                        <span>{item}</span>
                      </label>


                    </div> */}

{/* <div className={styles.buttons}>
  <input type="radio" name={item} value={item} id={item} checked={topping == item} onChange={onOptionChange}/>

  <label for={item?.id} className={styles.forms}></label>

</div> */}

{/* <input type="radio" className={styles.buttins} name={item} value={item} id={item} checked={topping == item} onChange={onOptionChange} />
<label className={styles.bht} for={item}>Checked success radio</label> */}



<div className={styles.questions}>
      <div className={styles.questions__question}>
        <input type="radio" name={item} value={item} id={item} checked={topping == item} onChange={onOptionChange}/>
        <label for={item}>{item}</label>
      </div>
      {/* <div className={styles.questions__question}>
        <input type="radio" name="answer" id="answer-2"/> 
        <label for="answer-2" >Kralj</label>
      </div>
      <div className={styles.questions__question}>
        <input type="radio" name="answer" id="answer-3"/>
        <label for="answer-3" >Faca</label>
      </div> */}
    </div>

                  </div>
                )
              })}








            {/* </div>
          )
        })} */}
      </div>





      <div>


  



      </div>



    </div>
  );
}

export default Orderdetails;
