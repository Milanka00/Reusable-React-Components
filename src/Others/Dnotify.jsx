import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const DNotify = () => {
    const notify = () => toast("Find the joy in giving donations");
    return ( 
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer toastStyle={{ backgroundColor: "#ff9900" ,color:"white"}}
            position="bottom-right"
            autoClose={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="colored"
/>
      </div>
     );
}
 
export default DNotify;