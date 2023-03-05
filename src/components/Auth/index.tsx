import { useState } from "react";
import { LoginForm } from "../LoginForm";

export const AuthForm = () => {
  const [invalidAccount, setInvalidAccount] = useState(false);

  return (
    <div>
      {!invalidAccount ? (
        <LoginForm setAccountError={setInvalidAccount} />
      ) : null}
    </div>
  );
};
