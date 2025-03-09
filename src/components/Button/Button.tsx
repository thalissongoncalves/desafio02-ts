import './Button.css'

interface IButton {
  event: () => void
}

export const Button = ({event}: IButton) => {
  return(
    <button className='btn-entrar' onClick={event}>Entrar</button>
  )
}