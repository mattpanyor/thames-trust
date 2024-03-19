import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/components/elements';
import { Input, Label } from 'src/components/form';
import { useAuthentication } from 'src/hooks';
import { sleep } from 'src/utils';

export function LoginForm() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });
  const { authentication } = useAuthentication();
  const [isDisabled, setDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [validationStyle, setValidationStyle] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    setDisabled(loginFormData.email === '' || loginFormData.password === '');
  };

  const handleFormSubmit = async () => {
    setIsPending(true);
    try {
      await sleep(1000);
      const isCredentialsCorrect = authentication.isCredentialsCorrect(
        loginFormData.email,
        loginFormData.password
      );

      if (!isCredentialsCorrect) {
        throw new Error('Incorrect credentials');
      }

      authentication.authenticateUser(loginFormData.email, loginFormData.password);
      setValidationStyle('success');

      await sleep(1000);
      navigate('/users');
    } catch (error) {
      console.error('Error while logging in:', error);
      setIsPending(false);
      setDisabled(true);
      setValidationStyle('error');
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <Label htmlFor={'email'} labelTxt={'Your email'} />
          <Input
            validation={validationStyle}
            onChange={handleOnChange}
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <Label htmlFor={'password'} labelTxt={'Your password'} />
          <Input
            validation={validationStyle}
            onChange={handleOnChange}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
          />
        </div>
        <p
          id="invalid-feedback"
          className={`${validationStyle !== 'error' && `hidden`} mt-2 text-sm text-red-600 dark:text-red-500`}>
          Username or password is incorrect
        </p>
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
          </div>
          <div className="ml-3 text-sm">
            <Label htmlFor={'remember'} labelTxt={'Remember me'} />
          </div>
          <Link
            to={'/login/reset-password'}
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </Link>
        </div>
        <Button
          onClick={handleFormSubmit}
          isPending={isPending}
          isDisabled={isDisabled}
          btnTxt={isPending ? 'Logging in...' : 'Login to your account'}
        />
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered?
          <Link to={'/sign-up'} className="ml-1 text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </Link>
        </div>
      </form>
    </>
  );
}
