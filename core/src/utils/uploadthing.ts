import { generateUploadButton, generateUploadDropzone, generateUploader, generateReactHelpers } from "@uploadthing/react";
// Type placeholder - update with actual uploadthing core router
type OurFileRouter = any;

export const Uploader: ReturnType<typeof generateUploader> = generateUploader<OurFileRouter>();
export const UploadButton: ReturnType<typeof generateUploadButton> = generateUploadButton<OurFileRouter>();
export const UploadDropzone: ReturnType<typeof generateUploadDropzone> = generateUploadDropzone<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
