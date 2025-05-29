"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function User(){
    const [loading,setLoading]=useState(true);
    const [data,setdata]=useState();
    
    useEffect(()=>{
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
        .then(response=>{
          setdata(response.data);
          setLoading(false)  
        })
    },[]);

    if(loading){
        return <div>
            Loading ...
        </div>
    }

    return   <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
}
