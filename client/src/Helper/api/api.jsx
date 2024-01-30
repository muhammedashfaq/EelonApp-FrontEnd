export const logintouserhome = async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN}/login` ,
        formData
      );
  
      if (response.data.success) {
        return response;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };