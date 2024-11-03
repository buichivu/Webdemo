import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const TestScreen = () => {
    const api = "https://jsonplaceholder.typicode.com";
    const [data, setDate] = useState<any>(null);
    const [temp, setTemp] = useState();
    const paramsObject = {
        param1: 'value1',
        param2: 'value2',
        param3: 'value3'
      };
    const params = new URLSearchParams(paramsObject);
    useEffect(() => {
        console.log('render')
        axios({
            url: `${api}/posts`,
            method: "get",
            data: paramsObject
            // params: params
        }).then(res => {
            setDate(res)
        }).catch(res => alert("error"))
    }, [])

  return (
    <>
    
    <input type="text" value={temp} onChange={(event: any) => (setTemp(event.target.value)) }  />
    {/* <div>{JSON.stringify(data)}</div> */}
    </>
  )
}
