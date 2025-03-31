import { FC } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import magiclogLogo from "../../images/logo.png";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
const LoginPage: FC = () => {

  const { loading, logIn } = useAuth();
  const { formState, handleChange } = useForm({
    initialState: { email: "", password: "" },
  });

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <img className="my-4" width={300} src={magiclogLogo} alt="" />
        <Form onSubmit={(event) => logIn(event, formState)} style={{ background: "#13afef", borderRadius: "10px", padding: "30px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingresa tu E-mail</Form.Label>
            <Form.Control onChange={handleChange} required name="email" type="email" placeholder="ejemplo@mail.com" />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control name="password" onChange={handleChange} required type="password" placeholder="*********" />
          </Form.Group>
          <Button disabled={loading || (formState.email === "" && formState.password === "") } variant="primary" type="submit">
            {loading ? "Ingresando..." : "Ingresar"}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
