import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function CustomInput({ label, ...rest }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  // ...other prop types if needed...
};

export default CustomInput;
