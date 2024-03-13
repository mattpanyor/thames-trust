// function to simulate network latency 
import React from "react";

const networkSimulator = () => {
    // This is defining a state variable 'loading' and a function 'setLoading' to update it
    const [loading, setLoading] = useState(true);
    // useEffect used to run side effects in function component
  useEffect(() => {
     // Setting a timeout to change the 'loading' state after 2 seconds
     const delay = setTimeout (() => {
      setLoading (true)
    }, 2000); // Simulating a 2-second delay
     } )

}