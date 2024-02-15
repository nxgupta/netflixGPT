export const validateData = (name, email, password, isSignUp) => {
  const isValidUserName = /^.{3,}$/.test(name);
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (isSignUp && name == "") return "Please provide a name";
  if (isSignUp && !isValidUserName) return "Please provide a valid Full name";
  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is not valid";
  return null;
};
