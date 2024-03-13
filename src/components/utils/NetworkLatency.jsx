// function to simulate network latency 
import React, { useState, useEffect } from "react";

const networkLatencySim = () => {
    // This is defining a state variable 'loading' and a function 'setLoading' to update it
    const [loading, setLoading] = useState(true);
    // useEffect used to run side effects in function component
  useEffect(() => {
     // Setting a timeout to change the 'loading' state after 2 seconds
     let delay = setTimeout (() => {
      setLoading (false) // this is setting the loading to false after the delay
    }, 2000); // This should simulate a 2-second delay

     //this is cleaning up the timeout to prevent any memory leaks to ensure any resources allocated for the timeout operation are properly released when they are no longer needed.
     return () => clearTimeout(delay)  }, []); //useEffect Hook has an empty dependency array [] to run only once when the component mounts.
    

    // Return JSX to render content based on the 'loading' state
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Content loaded after network latency simulation.</p>}
    </div>
  );

};
  export default networkLatencySim;



