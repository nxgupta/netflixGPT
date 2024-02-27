export const validateData = ({
  name,
  email,
  password,
  confirmPassword,
  isLogin,
}) => {
  const validateUserName = /^.{3,}$/.test(name);
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const validateConfirmPassword = password === confirmPassword;
  if (!isLogin && name === "") return "Please provide a name";
  if (!isLogin && !validateUserName) return "Please provide a valid Full name";
  if (email === "") return "Please provide a email";
  if (!validateEmail) return "Please provide a valid email";
  if (password === "") return "Please provide a password";
  if (!validatePassword) return "Please provide a valid password";
  if (!isLogin && confirmPassword === "") return "Please confirm password";
  if (!isLogin && !validateConfirmPassword) return "Passwords do not match";
  return null;
};
