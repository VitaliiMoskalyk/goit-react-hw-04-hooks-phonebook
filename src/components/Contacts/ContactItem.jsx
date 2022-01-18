import propTypes from "prop-types";
import defaultImage from "../../images/default.png";
import {
  ItemWrapper,
  Image,
  Name,
  Number,
  FlexContact,
  Button,
} from "./contactIte.styled";

const ContactItem = ({ contact, deleteFunction }) => {
  const { id, name, number } = contact;

  return (
    <ItemWrapper>
      <Image src={defaultImage} alt={name} />
      <FlexContact>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </FlexContact>
      <Button type="button" onClick={() => deleteFunction(id)}>
        X
      </Button>
    </ItemWrapper>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;
