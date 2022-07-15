import {useState} from "react"
import Alerta from "./Alerta"
import useQuiz from "../hooks/useQuiz";

const QuizForm = () => {

    const [respuesta01, setRespuesta01] = useState("")
    const [respuesta02, setRespuesta02] = useState("")
    const [respuesta03, setRespuesta03] = useState("")
    const [respuesta04, setRespuesta04] = useState("")

    const[alerta, setAlerta]= useState({})
    const { guardarQuiz} = useQuiz();

  const handleSubmit = e =>{
    e.preventDefault();

    //validar formulario
    if([respuesta01,respuesta02,respuesta03,respuesta04].includes("")){
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
      return;
    }
    setAlerta({})
    guardarQuiz({respuesta01,respuesta02,respuesta03,respuesta04})
  }
  const {msg} = alerta
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {msg && <Alerta alerta={alerta}/>}
        <form className="space-y-6" 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
              Evaluacion Servicio
            </label>
            <div className="mt-1">
              <input
                id="servicio"
                name="servicio"
                type="text"
                value={respuesta01}
                onChange={e =>  setRespuesta01(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ahorro" className="block text-sm font-medium text-gray-700">
              Evaluacion Ahorro
            </label>
            <div className="mt-1">
              <input
                id="ahorro"
                name="ahorro"
                type="text"
                value={respuesta02}
                onChange={e =>  setRespuesta02(e.target.value)}
                
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            </div>

            <div>
            <label htmlFor="eficiencia" className="block text-sm font-medium text-gray-700">
              Evaluacion Eficiencia
            </label>
            <div className="mt-1">
              <input
                id="eficiencia"
                name="eficiencia"
                type="text"
                value={respuesta03}
                onChange={e =>  setRespuesta03(e.target.value)}
                
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="actualizacion" className="block text-sm font-medium text-gray-700">
              Evaluacion Actualizacion
            </label>
            <div className="mt-1">
              <input
                id="actualizacion"
                name="actualizacion"
                type="text"
                value={respuesta04}
                onChange={e =>  setRespuesta04(e.target.value)}
              
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </div>
        </form>
          </div>
        </div>
    )
}

export default QuizForm