import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bottom,
  Button,
  Container,
  IMG,
  Info,
  InputForAvatar,
  Label,
  LabelForAvatar,
  Left,
  Right,
  Top,
  UserName,
  Wrapper,
} from "./UserProfile.styled";
import { HiPencilSquare } from "react-icons/hi2";
import { MdAddAPhoto } from "react-icons/md";
import { getUser, updateUser } from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const UserProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userInfo = useSelector((state) =>
    state.user.users.find((el) => el._id === currentUser._id)
  );
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const [loaded, setLoaded] = useState("Сохранить изменения");

  console.log(userInfo);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      ...inputs,
    };
    if (file === null) {
      updateUser(user, currentUser._id, dispatch);
      window.location.reload();
    } else {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage);
      const imageRef = ref(storageRef, `images/${fileName}`);

      const uploadTask = uploadBytesResumable(imageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoaded("Загруска выполнена на " + progress + "%");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const user = {
              ...inputs,
              avatar: downloadURL,
            };
            updateUser(user, currentUser._id, dispatch);
            window.location.reload();
          });
        }
      );
    }
  };

  return (
    <Container>
      <Top>
        <Left>
          <IMG
            src={
              userInfo?.avatar ||
              "https://trello.com/1/cards/63a6aaca19741d006ed81ecc/attachments/63a747d2d9708e01b9c4f1a5/download/Logo4.jpg"
            }
          />
          <LabelForAvatar htmlFor="file">
            <MdAddAPhoto />
          </LabelForAvatar>
          <InputForAvatar
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Wrapper>
            <UserName
              className="username"
              name="username"
              onChange={handleChange}
              type="text"
              placeholder={userInfo?.username}
            />
            <HiPencilSquare />
          </Wrapper>
        </Left>
        <Right>
          <Info>
            <Label>Email</Label>
            <Wrapper className="right">
              <UserName
                name="email"
                onChange={handleChange}
                type="text"
                placeholder={userInfo?.email}
              />
              <HiPencilSquare />
            </Wrapper>
          </Info>
          <Info>
            <Label>Дата рождение</Label>
            <Wrapper className="right">
              <UserName
                name="dateOfBirthday"
                onChange={handleChange}
                type="text"
                placeholder={userInfo?.dateOfBirthday}
              />
              <HiPencilSquare />
            </Wrapper>
          </Info>
          <Info>
            <Label>Телефон</Label>
            <Wrapper className="right">
              <UserName
                name="phoneNumber"
                onChange={handleChange}
                type="text"
                placeholder={userInfo?.phoneNumber}
              />
              <HiPencilSquare />
            </Wrapper>
          </Info>
          <Info style={{ justifyContent: "end" }}>
            <Button onClick={handleClick}>
              {loaded === "Сохранить" ? "Сохранить" : loaded}
            </Button>
          </Info>
        </Right>
      </Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default UserProfile;
