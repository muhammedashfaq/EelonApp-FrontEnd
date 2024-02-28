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


  export const addStudentsValidation = (formData) => {
    const errors = {};
  
    // Validate dropdowns
    errors.gender = !formData.gender ? "Please select a gender" : "";
    errors.classSection = !formData.classSection ? "Please select a class section" : "";
    errors.bloodGp = !formData.bloodGp ? "Please select a blood group" : "";
    errors.motherTongue = !formData.motherTongue ? "Please select a mother tongue" : "";
    errors.religion = !formData.religion ? "Please select a religion" : "";
    errors.community = !formData.community ? "Please select a community" : "";
    errors.classOfJoin = !formData.classOfJoin ? "Please select a class of joining" : "";
    errors.mediumOfInstruction = !formData.mediumOfInstruction ? "Please select a medium of instruction" : "";
    errors.concessionStudent = formData.concessionStudent === undefined ? "Please select whether the student has a concession" : "";
    errors.academicYear = !formData.academicYear ? "Please select an academic year" : "";
    errors.studentCategory = !formData.studentCategory ? "Please select a student category" : "";
    errors.studentGp = !formData.studentGp ? "Please select a student group" : "";
    errors.board = !formData.board ? "Please select a board" : "";
  
    // Validate date field (DOB)
    errors.DOB = !formData.DOB ? "Date of Birth is required" : "";
  
    // Validate other input fields
    errors.admnNo = !formData.admnNo ? "Admission number is required" : "";
    errors.studentName = !formData.studentName ? "Student name is required" : "";
    errors.nameTamil = !formData.nameTamil ? "Name in Tamil is required" : "";
    errors.AadharNo = !formData.AadharNo ? "Aadhar number is required" : "";
    errors.ContactNo = !formData.ContactNo || formData.ContactNo.length !== 10 ? "10-digit Number is required " : "";
    errors.AltCnctNo = !formData.AltCnctNo ? "Alternate contact number is required" : "";
    errors.address = !formData.address ? "Address is required" : "";
    errors.weight = !formData.weight ? "Weight is required" : "";
    errors.height = !formData.height ? "Height is required" : "";
    errors.email = !formData.email ? "Email is required" : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "Invalid email format" : "";
    errors.password = !formData.password ? "Password is required" : "";
    errors.nationality = !formData.nationality ? "Nationality is required" : "";
    // Add validations for other fields...
  
    return errors;
  };
  