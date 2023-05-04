





import React, { useState } from 'react'

function Orderdetails() {

    const [stores, setStores] = useState([]);

    const datas = [
        {
            name: "6",
            sections: [
                "a", "b", "c", "d", "e"
            ]
        },
        {
            name: "7",
            sections: [
                "a", "b", "c", "d", "e"
            ]
        },
        {
            name: "8",
            sections: [
                "a", "b", "c", "d", "e"
            ]
        }
    ]

    const [selectMonths, setCheckBoxsMonth] = useState([]);

    const [section6, setSection6] = useState("");
    const [section7, setSection7] = useState("");
    const [section8, setSection8] = useState("");
    const [section9, setSection9] = useState("");
    const [section10, setSection10] = useState("");
    const [section1, setSection1] = useState("");
    const [section2, setSection2] = useState("");



    const [store1,setStore1]=useState([]);
    const [store2,setStore2]=useState([]);
    const [store3,setStore3]=useState([]);
    const [store4,setStore4]=useState([]);
    const [store5,setStore5]=useState([]);
    const [store6,setStore6]=useState([]);
    const [store7,setStore7]=useState([]);




    const handleChangesections = (e,a) => {


        if (a == "6") {
            if(e?.target?.checked===true)
            {
                setSection6("6")   
            }
            else
            {
                setSection6("")
            }
       
        }
        else if (a == "7") {
            setSection7("7")
        }
        else if (a == "8") {
            setSection8("8")

        }
        else if (a == "9") {
            setSection9("9")

        }
        else if (a == "10") {
            setSection10("10")

        }
        else if(a=="11")
        {
            setSection1("11")

        }
        else if(a=="12")
        {
            setSection2("12")

        }
    }









    const handleCheckBox6 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {

          
            setStore1([...store1, value]);
          } else {
            setStore1(store1.filter((e) => e != value));
          }


    }
    const handleCheckBox7 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore2([...store2, value]);
          } else {
            setStore2(store2.filter((e) => e != value));
          }


    }
    const handleCheckBox8 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore3([...store3, value]);
          } else {
            setStore3(store3.filter((e) => e != value));
          }


    }
    const handleCheckBox9 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore4([...store4, value]);
          } else {
            setStore4(store4.filter((e) => e != value));
          }


    }
      const handleCheckBox10 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore5([...store5, value]);
          } else {
            setStore5(store5.filter((e) => e != value));
          }


    }
    const handleCheckBox11 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore6([...store6, value]);
          } else {
            setStore6(store6.filter((e) => e != value));
          }


    }
     const handleCheckBox12 = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setStore7([...store7, value]);
          } else {
            setStore7(store7.filter((e) => e != value));
          }


    }


    const SubmitData=()=>{
const forms=[
    {
        sectionname:section6,
        sections:store1
    },
    {
        sectionname:section7,
        sections:store2
    },
    {
        sectionname:section8,
        sections:store3
    },
]


const valuesfilters=[];


forms.map((item,index)=>{
    if(item?.sectionname=="" || item?.sections?.length===0)
    {
return null
    }
    else

    {
        valuesfilters.push(item)
    }
})


console.log(valuesfilters,"forms")

    }

 
    return (
        <div>

            {datas[0]?.name}

            {section6=="6" && (
                <div>
{datas[0]?.sections.map((item,index)=>{
    return(
        <div>


                           
                                <div>
                                    {item}
                                    <input type="checkbox" name={item}
                                        value={item} onChange={(e) => handleCheckBox6(e)} />
                                </div>
                            
                         

        </div>
    )
})}

                </div>
            )}
            {datas?.map((item, index) => {
                return (
                    <div>
                        {item?.name}
                     
                        <input type="checkbox" onChange={(e) => handleChangesections(e,item?.name)} />

{item?.name=="6" && <>

{item?.sections?.map((items, index) => {
                            return (
                                <div>
                                    {items}
                                    <input type="checkbox" name={items}
                                        value={items} onChange={(e) => handleCheckBox6(e)} />
                                </div>
                            )
                        })}

</>}


{item?.name=="7" && <>

{item?.sections?.map((items, index) => {
                            return (
                                <div>
                                    {items}
                                    <input type="checkbox" name={items}
                                        value={items} onChange={(e) => handleCheckBox7(e)} />
                                </div>
                            )
                        })}

</>}


{item?.name=="8" && <>

{item?.sections?.map((items, index) => {
                            return (
                                <div>
                                    {items}
                                    <input type="checkbox" name={items}
                                        value={items} onChange={(e) => handleCheckBox8(e)} />
                                </div>
                            )
                        })}

</>}
                        
                    </div>
                )
            })}

            <div>

<button onClick={SubmitData}>SubmitData</button>

            </div>
        </div>
    )
}

export default Orderdetails



