import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Toaster} from 'react-hot-toast';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    let item = { email, password };

    let result = await fetch("http://localhost:6060/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    // console log the token only
    console.log(result);

    // // tester si le client est admin ou pas
    if (result.role === "admin") {
      // supprimer storage
      localStorage.removeItem("_id");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.setItem("_id", result._id);
      localStorage.setItem("token", result.token);
      localStorage.setItem("role", result.role);
      navigate("/dashboard");
    } else if(result.role==="client"){
      // supprimer storage
      localStorage.removeItem("_id");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.setItem("_id", result._id);
      localStorage.setItem("token", result.token);
      localStorage.setItem("role", result.role);
      navigate("/profileclient");
    }
  };

  return (
    <div>
      <div
        class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        // style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2022/12/30/05/35/sunset-7686268_960_720.jpg')"}}
      >
        <div class="rounded-xl bg-gray-100 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div class="text-white">
            <div class="mb-8 flex flex-col items-center">
              <img
                src="https://www.creditdumaroc.ma/sites/all/themes/custom/cdm_rebrand/assets/images/icons/logo_cdm.svg"
                width="150"
                alt=""
                srcset=""
              />
              <h1 class="mb-2 text-2xl">bank Crédit du Maroc</h1>
              <span class="text-gray-300">Entrez les détails de connexion</span>
            </div>
            <form>
              <div class="mb-4 text-lg">
                <input
                  class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="id@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="mb-4 text-lg">
                <input
                  class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="name"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  onClick={login}
                  class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
