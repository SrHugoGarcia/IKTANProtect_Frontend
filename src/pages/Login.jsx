import {Link, useNavigate} from "react-router-dom"
import {useState} from "react";
import HeaderFragment from "../components/HeaderFragment";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
const Login = () => {

    const [tokenAdmin, setTokenAdmin] = useState("");
    const [alerta, setAlerta] = useState("");

    const navigate = useNavigate()

    const handleSubmit =  async (e) =>{
      e.preventDefault();
      if([tokenAdmin].includes("")){
        setAlerta({
          msg: "Todos los campos son obligatorios",
          error: true
        });
        return
      }
      try{
        const {data} = await clienteAxios.post("/clientes/login",{tokenAdmin})
        localStorage.setItem("token", data.token);
        navigate("/admin")
      }catch(error){
        setAlerta({
          
            msg: "Ingresa un token valido",
            error: true
        
        })
      }
    };

    const {msg} = alerta
    return (
        <>
            <HeaderFragment />
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresa con tu token</h2>
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
           {msg && <Alerta
              alerta={alerta}
              />}
            <form className="space-y-6" 
              onSubmit={handleSubmit}
             >
              <div>
                <label htmlFor="tokenAdmin" className="block text-sm font-medium text-gray-700">
                  Token
                </label>
                <div className="mt-1">
                  <input
                    id="tokenAdmin"
                    name="tokenAdmin"
                    type="text"
                    value={tokenAdmin}
                    onChange={e => setTokenAdmin(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white   bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Si no tienes un token solicitalo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer/>


        </>
    )
}

export default Login