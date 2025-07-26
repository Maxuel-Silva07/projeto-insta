import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 grid-rows-6 ">

        {/* imagem logo principal */}
        <div className="row-span-5 md:flex justify-end hidden">
          <img className="w-max-96" src="/image/insta-img (1).png" alt="logo-instagram" />
        </div>

      {/* formulario */}
      <div className="row-span-5 flex flex-col justify-center items-center">

        <form className="w-75 flex flex-col justify-center items-center border rounded-sm px-8 py-2 mt-12 gap-3">
          <img className="w-40" src="/image/insta-logo.png" alt="" />

          <input className="bg-slate-50 h-9 w-full pl-4 border border-black/50 rounded-sm" type="text" placeholder="Numero de telefone E-mail" />

          <input className="bg-slate-50 h-9 w-full pl-4 border border-black/50 rounded-sm" type="text" placeholder="Senha" />

          <button className="bg-blue-500 w-full h-8 rounded-md text-slate-50 hover:bg-blue-400">Entrar</button>

          <a className="text-blue-800 font-bold cursor-pointer" href="#">Logar com facebook</a>
          <a className="text-blue-800 text-sm cursor-pointer" href="#">Esqueci minha senha</a>
        </form>

        <div className="border w-75 my-3 text-center py-3">
          <p>Nao tem conta ? <span className="text-blue-800 font-bold">Cadastrar-se</span> </p>
        </div>

        <p>Baixe o aplicativo</p>

        <div className="flex gap-2 mt-2">
          <img className="h-8" src="/image/apple.png" alt="logo apple" />
          <img className="h-8" src="/image/google.png" alt="" />
        </div>

      </div>

    {/* footer */}

      <div className="row-span-1 col-span-2 mt-4 px-5">
        <ul className="flex flex-wrap gap-5 justify-center">
            <li className="text-slate-800 text-sm"> Meta</li>
            <li className="text-slate-800 text-sm"> Sobre</li>
            <li className="text-slate-800 text-sm"> Blog</li>
            <li className="text-slate-800 text-sm"> Carreiras</li>
            <li className="text-slate-800 text-sm"> Ajuda</li>
            <li className="text-slate-800 text-sm"> API</li>
            <li className="text-slate-800 text-sm"> Privacidade</li>
            <li className="text-slate-800 text-sm"> Termos</li>
            <li className="text-slate-800 text-sm"> Localizações</li>
            <li className="text-slate-800 text-sm"> Instagram Lite</li> 
            <li className="text-slate-800 text-sm"> Threads </li>
            <li className="text-slate-800 text-sm"> Upload de contatos e não usuários</li> 
            <li className="text-slate-800 text-sm"> Meta Verified</li> 
        </ul>

        <ul className="flex flex-wrap justify-center gap-5 mt-6">
          <li className="text-slate-800">Português (Brasil)</li>
          <li className="text-slate-800">© 2025 Instagram from Meta</li>
        </ul>

      </div>

      </div>
    </div>
  );
}
