import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import PostModel from "../Models/postModel.js";
import jwt from 'jsonwebtoken'

//get a user

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a user

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, currentUserAdminStatus, password } = req.body;

  if (id === _id || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });     
      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({user, token});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json("Access Denied!");
  }
};

//delete user

// export const deleteUser = async (req, res) => {
//   const id = req.params.id;
//   const { currentUserId, currentUserAdminStatus } = req.body;

//   if (id === currentUserId || currentUserAdminStatus) {
//     try {    
//       await UserModel.findOneAndDelete(id);
//       res.status(200).json("User deleted successfully");
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   } else {
//     res.status(403).json("Access Denied!");
//   }
// };

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {       
      await UserModel.findOneAndDelete(id);
      await PostModel.deleteMany({userId:id});
     
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(403).json("Access Denied!");
  }
};


//Follow a user

export const followUser = async (req, res) => {
  const id = req.params.id;
  const {currentUserId} = req.body;
  if(currentUserId===id){
    res.status(403).json("Action forbidden!")
  }
  else{
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if(!followUser.followers.includes(currentUserId)){
        await followUser.updateOne({$push:{followers:currentUserId}})
        await followingUser.updateOne({$push:{following:id}})
        res.status(200).json("User followed!")
      }
      else{
        res.status(403).json("User is already followed by you!")
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


//unFollow User

export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const {currentUserId} = req.body;
  if(currentUserId===id){
    res.status(403).json("Action forbidden!")
  }
  else{
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if(followUser.followers.includes(currentUserId)){
        await followUser.updateOne({$pull:{followers:currentUserId}})
        await followingUser.updateOne({$pull:{following:id}})
        res.status(200).json("User unfollowed!")
      }
      else{
        res.status(403).json("User is not followed by you!")
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
