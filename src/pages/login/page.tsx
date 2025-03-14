import logo from './logo.webp';

export default function LoginPage () {

    return(

        <div className="font-[Poppins] flex min-h-screen items-center justify-center bg-[#EDF1F5]">
            <form className="bg-[#FFFFFF] shadow-md rounded-lg p-6 w-[370px] h-[363px] text-center">
                <div className="flex items-center justify-center gap-2 mt-6">
                    <img src={logo} className="flex w-12.5 h-12.5 " alt="logo"></img>
                    <h2 className='text-2xl font-bold text[#3D3D3D cursor-default ]'>Seygo</h2>
                </div>
                <p className='text-[#929292] text-[13px] mt-6'>Faça login para prosseguir com o acesso</p>
                <div className='text-left mt-4'>
                    <label className="block text-[#929292] text-sm ">Token</label>
                    <input type="text" className="w-full border border-[#D9D9D9] p-1.75 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 mt-1"></input>
                </div>
                <button type="submit" className="w-full bg-[#46B7BA] text-[#FFFFFF] p-2 rounded-md hover:bg-teal-600 transition cursor-pointer mt-6.5">Login</button>

                <div className="text-[#929292] text-[13px] cursor-default underline mt-5">
                Não tenho <a href="#" className="text-[#46B7BA] text-[13px]"> token</a>! 
                </div>

            </form>
        </div>
    );
}

