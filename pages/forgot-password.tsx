import { Landing } from '@layouts/index';
import { ForgotPassword } from '@view/landing';

const ForgotPasswordPage = () => {
  return (
    <Landing footer={false}>
      <ForgotPassword />
    </Landing>
  );
};

export default ForgotPasswordPage;
