import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With: </h2>
      <div className="space-y-5">
        <button className="btn btn-outline btn-primary w-full">
          <FcGoogle className="text-3xl" />
          Login With Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub className="text-3xl" />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
