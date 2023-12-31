import { Map } from '@/components/Map'
import { User } from '@/components/User'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Map />
      <User />
    </div>
  )
}
