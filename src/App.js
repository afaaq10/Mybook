import React from 'react'

function App() {
    return (
        <div>


            {/* <div className="container flex ">



                <div className="left mt-48 mx-48 w-500 ">
                    <h1 className="mx-0  text-bold text-6xl text-blue-900">facebook</h1>
                    <p className="mx-0 mt-5 text-3xl ">Facebook helps you connect and share with the people in your life.</p>

                </div>




                <div className="relative mx-48 w-1/2 mt-48 right bg-white  rounded px-8 pt-6 pb-8 mb-4 border rounded ">
                    <input className=" h-10 w-full border  rounded mt-2 block text-gray-700 text-sm outline outline-1  mb-4" type="text" placeholder="Email address or phone number" />
                    <input className="outline outline-1 h-10 w-full border  rounded mt-2  block text-gray-700 text-sm  mb-4" type="password" placeholder="Password" />
                    <button class="w-full flex  justify-center text-center mt-2 w-100  bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
    </button>
                    <span className="mt-3 flex justify-center mx-2 cursor-pointer hover:underline text-blue-500">Forgotten password</span>
                    <hr className="mt-4" />
                    <button class="flex mt-4 w-full flex  justify-center  bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline" type="button">
                        Create new account
    </button>
                    <p className=" w-full  mt-10 absolute text-sm"><span className="cursor-pointer font-bold">Create a Page</span> for a celebrity, brand or business.</p>

                </div>



            </div> */}

 {/* // "build": "react-scripts build && mv -f build/* docs ", // "build": "react-scripts build && mv -f build/* docs ", */}

            <div className="container flex">
                <div className=" justify-center flex-column mx-auto ">
                    <h1 className="mx-auto text-center mt-4 font-monospace font-bold cursor-pointer justify-center text-2xl text-blue-700">mybook</h1>

                    <input className=" h-10 w-full border rounded mt-4 bg-gray-100 text-gray-900 text-sm mb-4" type="text" placeholder="Mobile number or email address" />
                    <input className=" h-10 w-full border rounded mt-4 bg-gray-100 text-gray-900 text-sm  mb-4" type="password" placeholder="Password" />
                    <button class="w-full h-12 justify-center text-center mt-2 w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
    </button>


  <p className="mt-3  mx-auto text-center cursor-pointer  text-blue-500">Forgotten password?</p>

<p className="mt-4 mx-auto text-center  cursor-pointer ">or</p>
<hr align="right" class=" absolute border-0 bg-gray-500 text-gray-500 h-px  mb-32"/>

      <button class="relative mt-5 absolute w-1/2 h-12 flex justify-center mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline" type="button">
                        Create new account
    </button>
   
                </div>
       
              
            </div>




         <footer >

<p className="text-black flex justify-center mx-auto mt-48 text-sm text-blue-600 ">About . Help . More</p>
<p className="text-black flex  justify-center mx-auto mt-5 text-sm text-blue-600">Facebook Inc</p>
                </footer>
      
 

        </div>
    )
}

export default App
