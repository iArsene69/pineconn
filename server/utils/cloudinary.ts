import { v2 as cloudinary } from "cloudinary";

const cloudinaryMedia = () => {
  const config = useRuntimeConfig();

  cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  });

  return cloudinary;
};

export const uploadToCloudinary = (file: string) => {
  return new Promise((resolve, reject) => {
    console.log(file);
    cloudinaryMedia().uploader.upload(file, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};
