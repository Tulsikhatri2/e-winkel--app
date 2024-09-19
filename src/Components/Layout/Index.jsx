import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Index = (props) => {
  return (
    <div>
        <Header/>
        <div>
            <Sidebar/>
            <div>
                {props.children}
            </div>
           
        </div>
       
    </div>
  )
}

export default Index


// const [loading, setLoading] = useState(false)
//     const [progress, setProgress] = useState(0);

//     const handleLoader = () => {
//         setLoading(true)
//     }

//     useEffect(()=>{
//         const timer = setInterval(() => {
//             setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//           }, 800);
      
//           return () => {
//             clearInterval(timer);
//           };

//     }
//     )
        
// {loading? <CircularProgress variant="determinate" value={progress} />:"No records"}
// <button onClick={handleLoader} onDoubleClick={()=> setLoading(false)}>loader</button>
 