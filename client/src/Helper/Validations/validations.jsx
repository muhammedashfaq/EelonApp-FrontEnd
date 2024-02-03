export const loginValidate = (email, password) => {
    const error = {};
  
    error.email = !email ? "Email is required" : !/\S+@\S+\.\S+/.test(email) ? "Invalid email format" : "";
  
    // error.password = !password ? "Password is required" : password.length < 8 ? "Password must be at least 8 characters long" : "";
  
    return error;
  };