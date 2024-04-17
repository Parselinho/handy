import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { BadRequestError } from "./ErrorHandler";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET as string,
  },
});

const uploadFileToS3 = async (
  file: Buffer,
  fileName: string,
  fileType: string
) => {
  const fileBuffer = file;
  const ecodedFileName = encodeURIComponent(`images/${fileName}`);
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: `images/${fileName}`,
    Body: fileBuffer,
    ContentType: fileType,
  };

  const command = new PutObjectCommand(params);
  const srcForImage = `https://${process.env.AWS_BUCKET}.s3-${process.env.AWS_REGION}.amazonaws.com/${ecodedFileName}`;
  try {
    await s3Client.send(command);
    return srcForImage;
  } catch (error: any) {
    throw new BadRequestError(error);
  }
};

export default uploadFileToS3;
