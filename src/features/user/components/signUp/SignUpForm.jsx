import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'src/components/elements';
import { Input, Label } from 'src/components/form';
import { PasswordGenerateIcon } from 'src/components/SVGs';
import Account from 'src/features/account/classes/Account.js';
import User from 'src/features/user/classes/User.js';
import { useAccountContext, useAuthentication, useLocalStorage, useUserContext } from 'src/hooks';
import { generatePassword, sleep } from 'src/utils';

export function SignUpForm() {
  const navigate = useNavigate();
  const { setAccounts } = useAccountContext();
  const { setUsers } = useUserContext();
  const { authentication } = useAuthentication();
  const { userRepository, accountRepository } = useLocalStorage();
  const [userRegistrationData, setUserRegistrationData] = useState(new User());

  const [isDisabled, setDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [validationStyle, setValidationStyle] = useState('');
  const [errors, setErrors] = useState({});

  if (authentication.getAuthenticationToken()) navigate('/dashboard');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserRegistrationData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    if (name === 'confirmPassword') setConfirmedPassword(value);
  };

  const handleGeneratePassword = () => {
    const randomGeneratedPassword = generatePassword();
    setUserRegistrationData({
      ...userRegistrationData,
      password: randomGeneratedPassword
    });
    setConfirmedPassword(randomGeneratedPassword);
  };

  function isFormValidated(userRegistrationData, confirmedPassword) {
    const errors = {};

    if (userRegistrationData.password !== confirmedPassword) {
      errors.password = 'Password does not match';
      errors.confirmedPassword = 'Password does not match';
    }

    return { isValid: Object.keys(errors).length === 0, errors };
  }

  useEffect(() => {
    setDisabled(Object.values(userRegistrationData).some((val) => val === ''));
  }, [userRegistrationData]);

  const handleFormSubmit = async () => {
    setIsPending(true);
    try {
      await sleep(1000);

      const { isValid, errors } = isFormValidated(userRegistrationData, confirmedPassword);

      if (isValid) {
        setIsPending(false);
        setValidationStyle('success');

        await sleep(1000);
        setErrors({});

        const { confirmPassword, ...userDataWithoutConfirmPassword } = userRegistrationData;

        await Promise.all([
          userRepository.create({
            ...userDataWithoutConfirmPassword
          }),
          accountRepository.create({
            ...new Account(),
            userId: userRepository.findUserByEmail(userRegistrationData.emailAddress).id,
            type: 'Current',
            balance: 1000
          })
        ]);

        setAccounts(accountRepository.findAll());
        setUsers(userRepository.findAll());

        authentication.authenticateUser(
          userRegistrationData.emailAddress,
          userRegistrationData.password
        );

        if (authentication.getAuthenticationToken()) navigate('/dashboard');
      } else {
        setErrors(errors);
        throw new Error('Incorrect credentials');
      }
    } catch (error) {
      console.error('Error while registration:', error);
      setIsPending(false);
      setDisabled(true);
    }
  };

  return (
    <form id="registration-form" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor={'firstName'} labelTxt={'First name'} />
          <Input
            validation={(errors.firstName && 'error') || validationStyle}
            onChange={handleOnChange}
            type="firstName"
            name="firstName"
            id="firstName"
          />
          <p
            id="firstname-is-invalid-feedback"
            className={`mt-2 ${!errors.firstName && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            First name is empty
          </p>
        </div>
        <div>
          <Label htmlFor={'lastName'} labelTxt={'Last name'} />
          <Input
            validation={(errors.lastName && 'error') || validationStyle}
            onChange={handleOnChange}
            type="lastName"
            name="lastName"
            id="lastName"
          />
          <p
            id="lastname-is-invalid-feedback"
            className={`mt-2 ${!errors.lastName && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            Last name is empty
          </p>
        </div>
        <div>
          <Label htmlFor={'emailAddress'} labelTxt={'Your email'} />
          <Input
            validation={(errors.emailAddress && 'error') || validationStyle}
            onChange={handleOnChange}
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="name@company.com"
          />
          <p
            id="email-is-taken-feedback"
            className={`mt-2 ${!errors.emailAddress && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            Email address is not available
          </p>
        </div>
        <div>
          <Label htmlFor={'username'} labelTxt={'Your username'} />
          <Input
            validation={(errors.username && 'error') || validationStyle}
            onChange={handleOnChange}
            type="username"
            name="username"
            id="username"
            disabled
            value={userRegistrationData.emailAddress}
          />
          <p
            id="username-is-taken-feedback"
            className={`mt-2 ${!errors.username && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            Username is not available
          </p>
        </div>
        <div className="relative w-full">
          <Label htmlFor={'password'} labelTxt={'Password'} />
          <Input
            validation={(errors.password && 'error') || validationStyle}
            onChange={handleOnChange}
            type="text"
            value={userRegistrationData.password}
            name="password"
            id="password"
          />
          <button
            onClick={handleGeneratePassword}
            style={{ top: 29 }}
            id="generate-password"
            className="absolute end-0 rounded-e-lg bg-transparent p-2.5 text-sm font-medium text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white ">
            <PasswordGenerateIcon />
            <span className="sr-only">Generate password</span>
          </button>
          <p
            id="password-not-valid"
            className={`mt-2 ${!errors.password && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            Password does not match
          </p>
        </div>
        <div>
          <Label htmlFor={'confirmPassword'} labelTxt={'Confirm Password'} />
          <Input
            onChange={handleOnChange}
            validation={(errors.confirmedPassword && 'error') || validationStyle}
            value={confirmedPassword}
            type="text"
            name="confirmPassword"
            id="confirmPassword"
          />
          <p
            id="password-not-matched-feedback"
            className={`mt-2 ${!errors.confirmedPassword && `hidden`} text-sm text-red-600 dark:text-red-500`}>
            Password does not match
          </p>
        </div>
      </div>
      <div className="mb-6 flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="terms-and-condition"
            name="termsAndCondition"
            type="checkbox"
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            required
          />
        </div>
        <label
          htmlFor="terms-and-condition"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree with the{' '}
          <Link to="#" className="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </Link>
          .
        </label>
      </div>
      <Button
        onClick={handleFormSubmit}
        isPending={isPending}
        isDisabled={isDisabled}
        btnTxt={isPending ? 'Submitting' : 'Submit'}
      />
    </form>
  );
}

export default SignUpForm;
