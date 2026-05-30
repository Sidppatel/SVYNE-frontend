import { SparkMark } from './SparkMark'
import { Wordmark } from './Wordmark'

type Props = {
  size?: number
}

export function Logo({ size }: Props) {
  return (
    <>
      <SparkMark size={size} />
      <Wordmark />
    </>
  )
}
