import FormInput from "../input-field/input-field.component";
import { UsersContext } from "../../context/users.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SvgComponent1 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
      <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
    </g>
  </svg>
)

const SvgComponent2 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
  </svg>
)

const UserLogIn = () => {
  const {Users} = useContext(UsersContext);
  const [selectedUser, setselectedUser] = useState({user_id: "", password: ""});
  const {user_id, password} = selectedUser;

  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setselectedUser({...selectedUser, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const User = Users.find((user) => user.user_id.toString() === user_id && user.password.toString() === password);
    if (!User) {
      toast.error("Invalid User ID or Password");
    } else {
      localStorage.setItem('currentuser', 'true');
      localStorage.setItem('currentuserCreds', user_id);
      return  navigate("/user-dashboard");
    }
  }

  return (
    <>

      <form className="max-w-lg w-full mx-auto">

        <div className="mt-8">
            <FormInput type="text" placeholder="Enter User ID" onChange={handleChange} label="User ID" name="user_id" value={user_id} id="user_id" svgicon={SvgComponent1}/>
        </div>
      
        <div className="mt-8">
            <FormInput type="password" placeholder="Enter Password" onChange={handleChange} label="Password (use format DD/MM/YYYY)" name="password" id="password" value={password} svgicon={SvgComponent2}/>
        </div>

        <div className="mt-8">
            <button type="submit" onClick={handleSubmit} className="w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Log In
            </button>
        </div>
      </form> 

    </>
  )
}

export default UserLogIn;