import React, { useState } from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
    const [itemsToShow, setItemsToShow] = useState(3);

    const showmore = () => {
        setItemsToShow(Followers.length)
    }

    const showless = () => {
        setItemsToShow(3)
    }

  return (
    // <div className="FollowersCard">
    //   {Followers.map((follower, id) => {
    //     return (
    //         <div className="follower">
    //         <div>
    //             <img src={follower.img} alt="" className='followerImage' />
    //             <div className="name">
    //                 <span>{follower.name}</span>
    //                 <span>@{follower.username}</span>
    //             </div>
    //         </div>
    //         <button className='button fc-button'>
    //             Follow
    //         </button>
    //     </div>
    //     );
    //   })} 
    
    // </div>
    <div className="FollowersCard">
           <h3>Who is following you</h3>
      {Followers.slice(0, itemsToShow).map((follower, index) => 
     
            <div key={index} className="follower">
            <div>
                <img src={follower.img} alt="" className='followerImage' />
                <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                </div>
            </div>
            <button className='button fc-button'>
                Follow
            </button>            
        </div>     
 
      )} 
      
     {(itemsToShow === 3) ? <button className="button sh-button"onClick={showmore}>Show More</button>: <button className="button sh-button" onClick={showless}>Show Less</button>}
    </div>
  );
};

export default FollowersCard;
