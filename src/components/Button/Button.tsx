interface IButton {
  event: () => void
}

export const Button = ({event}: IButton) => {
  return(
    <button onClick={event}>Entrar</button>
  )
}