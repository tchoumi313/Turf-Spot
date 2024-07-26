import { Link } from "react-router-dom";
import FormField from "../components/FormField";
import useSignUpForm from "../hooks/useSignUpForm";
import Button from "../components/Button";

const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit } = useSignUpForm();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <FormField
                label="Name"
                name="name"
                type="text"
                register={register}
                error={errors.name}
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                error={errors.phone}
              />
            </div>
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />
            <div className="grid lg:grid-cols-2 gap-4">
              <FormField
                label="Password"
                name="password"
                type="password"
                register={register}
                error={errors.password}
              />
              <FormField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                register={register}
                error={errors.confirmPassword}
              />
            </div>

            <div className="form-control mt-12 pt-6 ">
              <Button type="submit" className="btn-primary w-full">
                Sign Up
              </Button>
            </div>
          </form>
          <div className="text-center mt-6">
            <Link to="/login" className="link link-hover">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
