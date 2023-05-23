import { Link } from 'react-router-dom';
import { IPost } from '../../types/types';
import pfp from '../../assets/pfp.png';

import styles from './post.module.css';

export default function Post({ post }: { post: IPost }) {
  return (
    <div className={styles.container}>
      <Link to={`/user/${post.userId}`}>
        <img src={pfp} alt="" width={'50px'} height={'54px'} />
      </Link>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.text}>{post.body}</p>
    </div>
  );
}
