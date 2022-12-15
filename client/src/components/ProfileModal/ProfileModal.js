import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(other.profilePicture);
  const [coverImage, setCoverImage] = useState(other.profilePicture);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);  
  formData.profilePicture = profileImage;
  formData.coverPicture = coverImage;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });    
  };
  
  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const base64 = await convertBase64(img);
      console.log(base64);
      event.target.name === "profileImage"
        ? setProfileImage(base64)
        : setCoverImage(base64);
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();   
    let UserData = formData;    
    dispatch(updateUser(params.id, UserData));
    setModalOpened(false);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="80%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="LIves in"
            onChange={handleChange}
            value={formData.livesIn}
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>

        <button className="button infoButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
}
export default ProfileModal;
