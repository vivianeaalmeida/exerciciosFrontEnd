import React, { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return "";
    } else if (password.length > 10) {
      return "Password Forte";
    } else if (password.length > 6) {
      return "Password Média";
    } else {
      return "Password Fraca";
    }
  };

  const renderFeedback = () => {
    if (isFocused && getPasswordStrength() !== "") {
      return <p role="feedback">{getPasswordStrength()}</p>;
    }
    return null;
  };

  return (
    <div>
      <input
        type="password"
        role="input"
        value={password}
        onChange={handlePasswordChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {renderFeedback()}
    </div>
  );
};

export default PasswordInput;

