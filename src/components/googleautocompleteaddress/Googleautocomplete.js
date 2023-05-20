// import React, { useState, useEffect, useRef } from "react";
// import dynamic from 'next/dynamic';
// let autoComplete;

// import Autocomplete from "react-google-autocomplete";

// import { usePlacesWidget } from "react-google-autocomplete";

// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Googleautocomplete({setValue,setValueCountry,setValueState,setValueshortState 

// ,register,
// errors,
// setCodes,
// codevalues
// }) {
//   const [postalcodeset, setPostalCodes] = useState("");
//   const { ref } = usePlacesWidget({
//     apiKey: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
//     onPlaceSelected: (place) => {
//       for (const component of place.address_components) {
//         const componentType = component.types[0];
//         if (componentType === "locality") {
//       setValue("city",component.long_name)
//         }
//         if (componentType === "administrative_area_level_1") {
//             setValueState("state",component.long_name)
//             setValueshortState("stateShortCode",component.short_name)
//         }
//         if (componentType === "country") {
//             if (component.long_name === "Australia") {
//               setValueCountry("country","Australia")
//             }
//         }
//         if (componentType === "postal_code") {
//             setPostalCodes(component.long_name);
//             setCodes(component.long_name);
//         }
//     }
  
//     },
//     options: {
//       types: ["(regions)"],
//       componentRestrictions: { country: "Aus" },
//     },
//   });

//   useEffect(()=>{
// setCodes(codevalues);
//   },[codevalues])

//   return (
//     <div>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <Form.Label className="labelname">Post code</Form.Label>
//                       <Form.Control type="text" placeholder="Enter Pincode" className='form-control-profiles'
//                         maxLength={4}
//                         ref={ref}
//                         value={postalcodeset || postalcodeset}
//                         onChange={(e) => setPostalCodes(e?.target?.value)}
                      
//                       />
                    
//                     </Form.Group>
//     </div>
//   )
// }

// // export default Googleautocomplete;

// export default dynamic(() => Promise.resolve(Googleautocomplete), { ssr: false });

















// // let autoComplete;
// // const loadScript = (url, callback) => {
// //   let script = document.createElement("script");
// //   script.type = "text/javascript";

// //   if (script.readyState) {
// //     script.onreadystatechange = function() {
// //       if (script.readyState === "loaded" || script.readyState === "complete") {
// //         script.onreadystatechange = null;
// //         return callback();
// //       }
// //     };
// //   } else {
// //     script.onload = () =>{ return callback()};
// //   }

// //   script.src = url;
// //   document.getElementsByTagName("head")[0].appendChild(script);
// // };

// // async function handleScriptLoad(updateQuery, autoCompleteRef) {
// //     // autoComplete = new window.google.maps.places.Autocomplete(
// //     //   autoCompleteRef.current,
// //     //   { types: ["postal_code"], componentRestrictions: { country: "AUS" } }
// //     // );

// //     const autoComplete=await new window.google.maps.places.Autocomplete(
// //           autoCompleteRef.current,
// //           { types: ["postal_code"], componentRestrictions: { country: "AUS" } }
// //         )

// //         console.log(autoComplete,"forms")

// //      autoComplete.setFields(["address_components", "formatted_address"]);
// //      autoComplete.addListener("place_changed", () =>
// //       handlePlaceSelect(updateQuery)
// //     );
// //   }


// //   async function handlePlaceSelect(updateQuery) {
// //     const addressObject = await autoComplete.getPlace();
// //     const query = await addressObject.formatted_address;
// //     console.log(query,"query")
// //     updateQuery(query);
// //     console.log(addressObject);
// //   }



// //   const [query, setQuery] = useState("");
// //   const autoCompleteRef = useRef(null);

// //     useEffect(()=>{
// //         // setGooglePlaces("kalai");

// //         loadScript(
// //             `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
// //             () => handleScriptLoad(setQuery, autoCompleteRef)
// //           );
// //     },[])