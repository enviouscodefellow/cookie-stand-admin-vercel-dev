import Head from 'components/Head.js';
import LoginForm from 'components/LoginForm';
import CookieStandAdmin from 'components/StandAdmin';
import { useAuth } from '../contexts/auth';



export default function Home() {

  const { user, login } = useAuth();

    return (
        <div className="p-4">
            <Head>
              <title>Cookie Stand Admin</title>
              </Head>
            {user ?
                <CookieStandAdmin />
                :
                <LoginForm onLogin={login} />
            }

        </div>
    );
}