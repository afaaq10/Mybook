import React from 'react'

function App() {
    return (




        <div>


            {/*
            
            
            facebook login page for large screen......
            
             <div className="container flex ">



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












            {/* // "build": "react-scripts build && mv -f build/* docs ", // "build": "react-scripts build && mv -f build/* docs ", 
 
 
 
 facebook login page mobile view.......

 
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
 
 
 */}

            <div className="navbar flex justify-between items-center">

                <div className="flex justify-center items-center ">
                    <div className="hamburger inline-block p-4 cursor-pointer  md:hidden">
                        <div className="line bg-black w-4 h-0.5 mt-1"></div>
                        <div className="line bg-black w-4 h-0.5 mt-1"></div>
                        <div className="line bg-black w-4 h-0.5 mt-1 "></div>


                    </div>
                    <div className="search md:order-2 md:hidden">Search</div>
                </div>

                <div className=" text-center md:order-first  hover:underline">Microsoft</div>


                <div className=" cart text-center md-order-3 flex">
                    <div className="search hidden md:block hover:underline">Search</div>

                    <div className="hover:underline">Cartaccount</div>
                </div>





            </div>

            <div className="slider flex flex-col-reverse ">
                <div className="left py-14 flex flex-col justify-center items-center bg-[#dddfde] ">
                    <span className="bg-yellow-400 p-2">New</span>
                    <h1 className="mx-5 text-2xl font-bold">Surface Pro 8</h1>
                    <p className="mx-5 text-center">Do more with a larger 13-inch touchscreen, faster connections and extra speed. Now available with Windows 11.</p>

                    <button className="mt-2 bg-black text-white  p-3">Learn more</button>
                </div>
                <div className="right"><img className="bg-[#dddfde]" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="image" /> </div>




            </div>

            <div className="3 py-12 space-y-5">


                <div className="flex space-x-1 items-center mx-5 space-x-3">
                    <img className="w-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Windows_logo_2012-Black.svg/768px-Windows_logo_2012-Black.svg.png" alt="" /> <span className="font-medium">Choose your Microsoft 365</span>
                </div>

                <div className="flex items-center">
                    <img className="w-8 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSTJ-8f6Nl67r_R_rjINRlnZjuUAO92LD9g&usqp=CAU" alt="" /> <span className="font-medium">Explore new devices</span>
                </div>
                <div className="flex items-center ">
                    <img className="w-6 mx-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXwondWz1TxWgrCBLvfjfL7hBEX1QypqkRA&usqp=CAU" alt="" />  <span className="font-medium">Buy X-box games</span>
                </div>
                <div className="flex mx-4 space-x-4 items-center ">
                    <img className="w-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Windows_logo_2012-Black.svg/768px-Windows_logo_2012-Black.svg.png" alt="" /> <span className="font-medium">Get Windows 11</span>
                </div>

                {/* 
                <span>Buy X-box games</span>
                <span>Get Windows 11</span> */}



            </div>


        </div>






    )
}

export default App
