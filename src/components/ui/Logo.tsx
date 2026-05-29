import { SparkMark } from './SparkMark'
import { Wordmark } from './Wordmark'

export function Logo() {
  return (
    <>
      <SparkMark size={34} stroke={7} />
      <Wordmark />
    </>
  )
}
