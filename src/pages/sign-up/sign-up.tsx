import { Form } from "../../components/form/form";
import { Layout } from "../../components/layout/layout";
import { signUpUser } from "../../features/userSlice/userSlice";

export const SignUp = () => {
  return (
    <>
      <Layout>
        <Form action={signUpUser} formName='signUp' formHeader='Зарегистрироваться' buttonText='Зарегистрироваться' />
      </Layout>
    </>
  )
}