import { Landing } from '@layouts/index';
import { LogIn } from '@view/landing';

const LogInPage = () => {
  return (
    <Landing footer={false}>
      <LogIn />
    </Landing>
  );
};

export default LogInPage;
