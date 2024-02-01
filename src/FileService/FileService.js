import axios from 'axios';

const API_URL = 'http://localhost:5000/api/files/';

const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(API_URL + 'uploads', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getFileList = async () => {
    try {
      const response = await axios.get(API_URL + 'filelist');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  //deleting file
  const deleteFile = async (filename) => {
    try {
      const response = await axios.delete(API_URL + 'delete/' + filename);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

const fileService = {
  uploadFile,
  getFileList,
  deleteFile
};

export default fileService;
