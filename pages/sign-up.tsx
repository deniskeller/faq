import { Landing } from '@layouts/index';
import { SignUp } from '@view/landing';

const SignUpPage = () => {
  return (
    <Landing footer={false}>
      <SignUp />
    </Landing>
  );
};

export default SignUpPage;
