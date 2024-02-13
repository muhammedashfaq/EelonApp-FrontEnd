export const loginValidate = (email, password) => {
    const error = {};
  
    error.email = !email ? "Email is required" : !/\S+@\S+\.\S+/.test(email) ? "Invalid email format" : "";
  
    // error.password = !password ? "Password is required" : password.length < 8 ? "Password must be at least 8 characters long" : "";
  
    return error;
  };

  export const bookAddValidation = (data,genre) => {
    const errors = {};
  
    errors.bookName = !data.bookName ? "Book name is required" : "";
    errors.author = !data.author ? "Author name is required" : "";
    // errors.genre = !data.genre ? "Genre is required" : "";
    errors.bookId = !data.bookId ? "Book ID is required" : "";
    errors.refNo = !data.refNo ? "Reference number is required" : "";
    errors.IsbnNo = !data.IsbnNo ? "ISBN number is required" : "";
    errors.description = !data.description ? "Description is required" : "";
    errors.language = !data.language ? "Language is required" : "";
    errors.year = !data.year ? "Publishing year is required" : "";
    errors.barcode = !data.barcode ? "Barcode is required" : "";
    errors.refSubject = !data.refSubject ? "Reference subject is required" : "";
  
    return errors;
  };
  
  export const admiTionValidation =(formData)=>{
    const errors = {};

    errors.bookName = !formData.studentName ? "Book name is required" : "";
  }