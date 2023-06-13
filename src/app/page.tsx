import { headers } from 'next/headers';

import styles from './page.module.css'

export default function Home() {
  const csrfToken = headers().get('X-CSRF-Token') || 'missing';
  console.log(csrfToken)

    return (
      <main className={styles.main}>
        <h3>Transfer Funds</h3>
        <form action="/api" method="POST">
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="number" name="amount" placeholder="amount" />
        </div>
        <input type="submit" />
      </form>
      </main>
    );
}
