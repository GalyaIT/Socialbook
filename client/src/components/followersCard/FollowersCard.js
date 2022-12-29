import React, { useState, useEffect } from "react";
import "./FollowersCard.css";
import User from '../User/User.js'
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/UserRequests";

const FollowersCard = () => {
  const [persons, setPersons]=useState([]);
  const {user}=useSelector((state)=>state.authReducer.authData);
    
    useEffect(()=>{
      const fetchPersons=async()=>{
        let {data} = await getAllUsers();        
        setPersons(data);
      };
      fetchPersons()
    }, []);

  return (
    <div className="FollowersCard">
        <h3>People you may know</h3>
        {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}    
    </div>    
  );
};

export default FollowersCard;
