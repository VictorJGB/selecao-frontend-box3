import { useParams } from "react-router-dom"

export default function InfoChamadoPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Informações do chamado</h1>
      <p>ID: {id}</p>
    </div>
  )

}