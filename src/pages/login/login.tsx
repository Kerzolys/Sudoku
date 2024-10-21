import { Form } from "../../components/form/form";
import { Layout } from "../../components/layout/layout";
import { loginUser } from "../../features/userSlice/userSlice";

export const Login = () => {
  return (
    <>
      <Layout>
        <Form action={loginUser} formName='logIn' formHeader='Войдите' buttonText='Войти' />
      </Layout>
    </>
  )
}