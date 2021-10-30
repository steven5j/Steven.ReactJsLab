import React from "react";
import { useState,useEffect,useRef } from "react";
import {API_GET_DATA, API_GET_GET} from '../../Global/constants'
import { ReactDOM } from "react";
import Edit from "./Components/Edit";
import List from "./Components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

async function fetchData(setDate){
  const res = await fetch(API_GET_DATA)
  const {data} = await res.json()
  //console.log(data);
  setDate(data)
}


async function fetchSetData(data){
  const res = await fetch(API_GET_DATA,{
    method:"PUT",
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({data})
  })
}

async function callAPI(){

}

const Home = () => {
  const [data, setDate] = useState([]);
  const submittingStatus =useRef(false);

  useEffect(()=>{
    if(!submittingStatus.current){
      return
    }
    fetchSetData(data)
    .then(data=>submittingStatus.current=false)
  },[data])



  useEffect(()=>{
    fetchData(setDate)
    return ()=>{
        //取消綁定
    }
  },[])
  



  return (
    <div className="app">
      <Edit add={setDate}  submittingStatus={submittingStatus}/>
      <hr />
      <List listData={data} deleteData={setDate} submittingStatus={submittingStatus}/>
    </div>
  );
};

export default Home;
