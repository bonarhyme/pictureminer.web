import React from 'react';
import { DocumentUpload } from 'iconsax-react';
import { images } from '../../Constants';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useUploadImage from '../../Hooks/useUploadImage';
// import Button from '../../components/ui/Button';
const ImageUpload = () => {
  const { mutate, response } = useUploadImage();

  //   const [file, setFile] = useState([]);
  const [imagesUpload, setImagesUpload] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1 || images.length > 3) return;
    const newImageUrls = [];
    imagesUpload.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [imagesUpload]);

  //   const handleChange = (e) => {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   };

  const onImageChange = (e) => {
    setImagesUpload([...e.target.files]);
  };
  const handleImageSubmit = () => {
    console.log('clicked');
    const formData = new FormData();
    imagesUpload.forEach((image) => formData.append('image', image));
    mutate(formData);
  };
  return (
    <div className="mx-auto">
      <div className="hero_upload">
        <img
          src={images.addToFolder}
          className="addToFolder"
          alt="Add to folder"
        />
        <p className="hero_upload_text">
          Drop or drag image here or click to upload
        </p>
        <div className="hero_upload_file">
          <div className="upload_icon flex flex-row justify-center items-center">
            <DocumentUpload size="32" color="#FF6c00" variant="Outline" />
            <p>Upload Image</p>
          </div>
          <input
            className="input_file"
            id="upload"
            type="file"
            multiple
            accept="image/*, .png, .svg, .jpg"
            onChange={onImageChange}
          />
        </div>
        <div className="flex flex-row">
          {imageURLs.map((imageSrc) => (
            <img key={imagesUpload.length} src={imageSrc} className="w-36" />
          ))}
        </div>
        <button onClick={handleImageSubmit}>upload</button>
        {response && <p>{response.data.text_content}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
