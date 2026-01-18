import { memo } from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default memo(Button)
