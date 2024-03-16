import { Landing } from '@layouts/index';
import { LogIn } from '@view/landing';

const SignUpPage = () => {
  return (
    <Landing footer={false}>
      <LogIn />
    </Landing>
  );
};

export default SignUpPage;
