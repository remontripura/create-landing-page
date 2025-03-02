import React from "react";
import { useForm } from "react-hook-form";

const LoginComponents = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gradient-to-bl w-full h-screen from-[#FB00FF] to-[#0BCDE0] ">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] py-8 bg-white rounded shadow-md px-3">
          <h6 className="font-bold text-[32px] text-black text-center">
            Login
          </h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">
              <div>
                <h6 className="font-semibold text-[18px] mb-1">Email</h6>
                <input
                  className="w-full px-3 py-3 border rounded-md"
                  defaultValue="test"
                  type="email"
                  {...register("emails")}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <h6 className="font-semibold text-[18px] mb-1">Password</h6>
                <input
                  className="w-full px-3 py-3 border rounded-md"
                  defaultValue="test"
                  type="password"
                  {...register("passwords")}
                  placeholder="Enter Your Password"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 w-full py-2 rounde-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
