import { Landing } from '@layouts/index';
import { ForgotPassword } from '@view/landing';

const SignUpPage = () => {
  return (
    <Landing footer={false}>
      <ForgotPassword />
    </Landing>
  );
};

export default SignUpPage;
