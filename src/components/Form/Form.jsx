// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { Button } from '@/components/Button'
import styles from './Form.module.css'

export default function Form() {
  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')

  const navigate = useNavigate()

  function handleBackBtn(ev) {
    ev.preventDefault()
    navigate(-1)
  }

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        {/* <div className={styles.flag}>
          <Flag countryCode={countryCode} />
        </div> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input id="date" onChange={(e) => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button type="back" onClick={handleBackBtn}>
          &larr; Back
        </Button>
      </div>
    </form>
  )
}