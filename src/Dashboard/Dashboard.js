import React,{ useEffect, useState }  from "react";
import axios from "axios";
import "../App.css";





const Dashboard=()=>{
    const [dataFromApi,setApiData]=useState(null)
       
    const getCustomersData = async() => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setApiData(data)
    }

    useEffect(()=>{
        getCustomersData();
        },[]) // eslint-disable-line react-hooks/exhaustive-deps
        

    return(
        
        <div className="login-form">
        <h2>Dashboard</h2>
        <table id="customers">
      <tbody>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>phone</th>
        </tr>
        {dataFromApi && dataFromApi?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
        
    )

}

export default Dashboard