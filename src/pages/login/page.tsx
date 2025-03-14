import logo from './logo.webp';

export default function LoginPage () {

    return(

        <div className="font-[Poppins] flex min-h-screen items-center justify-center bg-gray-100">
            <form className="bg-white shadow-md rounded-lg p-6 w-[370px] h-[363px] text-center">
                <div className="flex items-center justify-center gap-2 my-6">
                    <img src={logo} className="flex w-12.5 h-12.5 " alt="logo"></img>
                    <h2 className='text-2xl font-bold text[#3D3D3D]'>Seygo</h2>
                </div>
                <p className='text-[#929292] mb-4 text-[13px]'>Faça login para prosseguir com o acesso</p>
                <div className='mb-6.5 text-left'>
                    <label className="block text-[#929292] text-sm mb-1">Token</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"></input>
                </div>
                <button type="submit" className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition cursor-pointer mb-4">Login</button>

                <div className="text-[#929292] text-sm cursor-default underline my-1">
                Não tenho <a href="#" className="text-teal-500 text-sm"> token</a>! 
                </div>

            </form>
        </div>
    );
}

