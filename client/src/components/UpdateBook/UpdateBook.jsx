import React from 'react';

const UpdateBook = () => {
  return <div>UpdateBook</div>;
};

export default UpdateBook;

// import React, { useEffect, useMemo, useState } from 'react';
// import {
//   Container,
//   ProductAddButton,
//   ProductTitle,
//   ProductTitleContainer,
//   ProductTop,
//   ProductInfoBottom,
//   ProductTopLeft,
//   ProductTopRight,
//   ProductInfoTop,
//   ProductInfoIMG,
//   ProductName,
//   ProductInfoItem,
//   ProductInfoKey,
//   ProductInfoValue,
//   ProductBottom,
//   ProductForm,
//   ProductFormLeft,
//   ProductBottomLabel,
//   ProductInput,
//   ProductLabel,
//   ProductSelect,
//   ProductOption,
//   ProductFormRight,
//   ProductUpload,
//   ProductUploadIMG,
//   ProductUploadLabel,
//   ProductUploadInput,
//   ProductButton,
//   ProductWrapper,
// } from './Product.styled';
// import { Link, useLocation } from 'react-router-dom';
// import Chart from '../../components/Chart/Chart';
// import { Publish } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux';
// import { userReq } from '../../requestMethods';
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from 'firebase/storage';
// import app from '../../firebase';
// import { updateProduct } from '../../redux/apiCalls';

// const Product = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const productID = location.pathname.split('/')[2];
//   const product = useSelector((state) =>
//     state.product.products.find((el) => el._id === productID)
//   );
//   const [productStats, setProductStats] = useState([]);
//   const [inputs, setInputs] = useState({});
//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };

//   const handleCategories = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value.split(',') };
//     });
//   };

//   const handleColor = (e) => {
//     setInputs((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value
//           .split(',')
//           .map((el) => el.toLowerCase()),
//       };
//     });
//   };

//   const handleSize = (e) => {
//     setInputs((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value
//           .split(',')
//           .map((el) => el.toUpperCase()),
//       };
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     const input = {
//       ...inputs,
//     };
//     if (file === null) {
//       updateProduct(input, productID, dispatch);
//     } else {
//       const fileName = new Date().getTime() + file.name;
//       const storage = getStorage(app);
//       const storageRef = ref(storage);
//       const imageRef = ref(storageRef, `images/${fileName}`);

//       const uploadTask = uploadBytesResumable(imageRef, file);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log('Upload is ' + progress + '% done');
//           switch (snapshot.state) {
//             case 'paused':
//               console.log('Upload is paused');
//               break;
//             case 'running':
//               console.log('Upload is running');
//               break;
//             default:
//           }
//         },
//         (error) => {
//           // Handle unsuccessful uploads
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             const product = {
//               ...inputs,
//               img: downloadURL,
//             };
//             updateProduct(product, productID, dispatch);
//           });
//         }
//       );
//     }
//   };

//   const MONTHS = useMemo(
//     () => [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Agu',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ],
//     []
//   );

//   useEffect(() => {
//     const getProductStats = async () => {
//       try {
//         const res = await userReq.get('orders/income?pid=' + productID);
//         const list = res.data.sort((a, b) => {
//           return a._id - b._id;
//         });
//         list.map((item) =>
//           setProductStats((prev) => [
//             ...prev,
//             {
//               name: MONTHS[item._id - 1],
//               Sales: item.total,
//             },
//           ])
//         );
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getProductStats();
//   }, [productID, MONTHS]);

//   return (
//     <Container>
//       <ProductTitleContainer>
//         <ProductTitle>Edit Product</ProductTitle>
//         <Link to="/newProduct">
//           <ProductAddButton>Create</ProductAddButton>
//         </Link>
//       </ProductTitleContainer>
//       <ProductTop>
//         <ProductTopLeft>
//           <Chart
//             data={productStats}
//             dataKey="Sales"
//             title="Sales Performance"
//           />
//         </ProductTopLeft>

//         <ProductTopRight>
//           <ProductInfoTop>
//             <ProductInfoIMG src={product.img} alt={product.title} />
//             <ProductName>{product.title}</ProductName>
//           </ProductInfoTop>
//           <ProductInfoBottom>
//             <ProductInfoItem>
//               <ProductInfoKey>ID:</ProductInfoKey>
//               <ProductInfoValue>{product._id}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>Sales</ProductInfoKey>
//               <ProductInfoValue>3211</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>Price</ProductInfoKey>
//               <ProductInfoValue>${product.price}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>Categories</ProductInfoKey>
//               <ProductInfoValue>{product.categories}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>Size</ProductInfoKey>
//               <ProductInfoValue>{product.size}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>Color</ProductInfoKey>
//               <ProductInfoValue>{product.color}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey>In Stock</ProductInfoKey>
//               <ProductInfoValue>{product.inStock}</ProductInfoValue>
//             </ProductInfoItem>
//             <ProductInfoItem>
//               <ProductInfoKey style={{ marginRight: '10px' }}>
//                 Desc
//               </ProductInfoKey>
//               <ProductInfoValue>{product.desc}</ProductInfoValue>
//             </ProductInfoItem>
//           </ProductInfoBottom>
//         </ProductTopRight>
//       </ProductTop>

//       <ProductBottom>
//         <ProductForm>
//           <ProductFormLeft>
//             <ProductWrapper>
//               <ProductBottomLabel>Product Name</ProductBottomLabel>
//               <ProductInput
//                 type="text"
//                 placeholder={product.title}
//                 name="title"
//                 onChange={handleChange}
//               />
//             </ProductWrapper>

//             <ProductWrapper>
//               <ProductLabel>Price</ProductLabel>
//               <ProductInput
//                 type="number"
//                 placeholder={product.price}
//                 name="price"
//                 onChange={handleChange}
//               />
//             </ProductWrapper>

//             <ProductWrapper>
//               <ProductLabel>Categories</ProductLabel>
//               <ProductInput
//                 type="text"
//                 placeholder="Please write words separated by COMMAS!!!"
//                 name="categories"
//                 onChange={handleCategories}
//               />
//             </ProductWrapper>

//             <ProductWrapper>
//               <ProductLabel>Size</ProductLabel>
//               <ProductInput
//                 type="text"
//                 placeholder="Please write words separated by COMMAS!!!"
//                 name="size"
//                 onChange={handleSize}
//               />
//             </ProductWrapper>

//             <ProductWrapper>
//               <ProductLabel>Color</ProductLabel>
//               <ProductInput
//                 type="text"
//                 placeholder="Please write words separated by COMMAS!!!"
//                 name="color"
//                 onChange={handleColor}
//               />
//             </ProductWrapper>

//             <ProductWrapper>
//               <ProductLabel>In Stock</ProductLabel>
//               <ProductSelect
//                 name="inStock"
//                 id="idStock"
//                 onChange={handleChange}
//               >
//                 <ProductOption value="true">Yes</ProductOption>
//                 <ProductOption value="false">No</ProductOption>
//               </ProductSelect>
//             </ProductWrapper>

//             <ProductWrapper style={{ width: '75%' }}>
//               <ProductLabel>Desc</ProductLabel>
//               <ProductInput
//                 type="text"
//                 placeholder={product.desc}
//                 name="desc"
//                 onChange={handleChange}
//                 style={{ width: '100%', height: '100px' }}
//               />
//             </ProductWrapper>
//           </ProductFormLeft>
//           <ProductFormRight>
//             <ProductUpload>
//               <ProductUploadIMG src={product.img} alt={product.title} />
//               <ProductUploadLabel htmlFor="file">
//                 <Publish />
//               </ProductUploadLabel>
//               <ProductUploadInput
//                 type="file"
//                 id="file"
//                 style={{ display: 'none' }}
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </ProductUpload>
//             <ProductButton onClick={handleClick}>Update</ProductButton>
//           </ProductFormRight>
//         </ProductForm>
//       </ProductBottom>
//     </Container>
//   );
// };

// export default Product;
