import React, { useState } from 'react';
import fileService from '../FileService/FileService';
import { toast, Toaster } from 'react-hot-toast'

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const response = await fileService.uploadFile(file);
      toast.success("File Uploaded Successfully...")
      console.log(response);

    } catch (error) {
      console.error(error);
      toast.error("File Upload failed...")
    }
  };

  return (
    <div>
      <div><Toaster position="top-center" /></div>

      
      <div className='inputDivs'>
      <h2 className='text-center mt-2'>Upload a file</h2>
        <input type="file" className='mt-5 form-control' onChange={handleFileChange} />
        <button className='mt-4 btn btn-sm btn-outline-dark text-center' onClick={handleFileUpload}>Upload File</button>
      </div>
    </div>
  );
};

export default FileUpload;
