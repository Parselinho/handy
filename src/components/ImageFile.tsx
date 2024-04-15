"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImageFile = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImagePick = () => {
    if (imageInput && imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleImageExist = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setPickedImage(null);
      return;
    }
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="picker">
      <label htmlFor={name}>{label}</label>
      <div className="controls">
        <div className="preview">
          {!pickedImage && <p>No Image Picked Yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The Image You Selected" fill />
          )}
        </div>
        <input
          className="inputHidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageExist}
          required
        />
        <button className="btn" type="button" onClick={handleImagePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImageFile;
