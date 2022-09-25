import React from 'react';
import '../profileSide/ProfileSide';
import LogoSearch from '../logoSearch/LogoSearch';
import FollowersCard from '../followersCard/FollowersCard';
import InfoCard from '../infoCard/InfoCard';


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft;
