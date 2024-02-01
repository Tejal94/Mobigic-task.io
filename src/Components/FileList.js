import React, { useState, useEffect } from 'react';
import fileService from '../FileService/FileService';
import { Link } from 'react-router-dom';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // added

  useEffect(() => {
    const checkAuthentication = () => {
      // Check if the user is authenticated (adjust as per your authentication logic)
      const isAuthenticated = localStorage.getItem('user') !== null;

      // Update the state accordingly
      setIsLoggedIn(isAuthenticated);

      if (isAuthenticated) {
        // Fetch files only if the user is authenticated
        fetchFiles();
      }
    };

    checkAuthentication();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fileService.getFileList();
      setFiles(response.files);
    } catch (error) {
      console.error(error);
    }
  };

  const deletehandler = async (filename) => {
    try {
      await fileService.deleteFile(filename);
      // After deleting the file, fetch the updated file list
      fetchFiles();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadClick = (file) => {
    const accessCode = window.prompt('Enter Access Code:');
    if (accessCode !== null) {
      handleDownload(file, accessCode);
    }else {
      alert('Invalid access code. Please try again.');
    }
  };

  const handleDownload = (file, accessCode) => {
    if(toString(file.accessCode) == toString(accessCode)){
    // const downloadLink = `http://localhost:5000/api/files/download/${file.filename}`;
    window.open(`http://localhost:5000/api/files/download/${file.filename}`, '_blank');
    }
  };

  return (
    <div className='inputDivs'>
    {isLoggedIn ? (
      <>
        <h2>File List</h2>
        <ul className='list-unstyled'>
          {files.map((file) => (
            <li key={file.filename}>
              {file.filename}
            
                <button className='btn btn-sm btn-outline-dark' onClick={() => handleDownloadClick(file)}>
                Download
                </button>
              {/* </a> */}
              <button className='btn btn-sm btn-outline-dark' onClick={() => deletehandler(file.filename)}>Delete</button>

            </li>
          ))}
        </ul>
      </>
    ) : (
      <div>
      <p>Please log in to access the file list.</p>
      <Link to={'/login'}>Login Page</Link>
      </div>
    )}
  </div>
  );
};

export default FileList;

