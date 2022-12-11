import React, { useState, useRef } from "react";

import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const imageRef = useRef();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  // const [image, setImage] = useState(null);
  const [image, setImage] = useState("");

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      // setImage(img);
      const base64 = await convertBase64(img);
      setImage(base64);
      console.log(base64)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: desc.current.value,
      image:image
    };

    // if (image) {
      // const data = new FormData();
      // const fileName = Date.now() + image.name;
      // data.append("name", fileName);
      // data.append("file", image);   

      // newPost.image = fileName;
    
      // console.log(newPost);
      // try {
      //   dispatch(uploadImage(data));
      // } catch (error) {
      //   console.log(error);
      // }
    // }
    dispatch(uploadPost(newPost));
    console.log(newPost)
    reset();
  };
  const reset = () => {
    // setImage(null);
    setImage("");
    desc.current.value = "";
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="PostShare">
      <div className="postShare-title">
        <img src={ProfileImage} alt="profileImage" />
        <input
          ref={desc}
          required
          type="text"
          placeholder="What's happening?"
        />
      </div>

      <div>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}            
          >
            
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>

          <div style={{ display: "none" }}>
         
            <input
              type="file"
              name="myImage"
              ref={imageRef}              
              onChange={onImageChange}
            />
            
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />           
            <img src={image} alt="preview" />           
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
