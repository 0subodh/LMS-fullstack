import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import userSignUpInputs from "../../assets/customInputs/userSignUpInputs";

function SignUpPage() {
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-50 card p-4 mt-5 shadow-lg">
        <h1>Join our Library Community</h1>
        <hr />
        {userSignUpInputs.map((input, index) => (
          <CustomInput key={index} {...input} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUpPage;
