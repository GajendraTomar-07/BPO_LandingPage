// import { withTranslation, TFunction } from "react-i18next";
// import { Container, TextWrapper, Content } from "./styles";

// interface Props {
//   title: string;
//   content: string;
//   t: TFunction;
// }

// const Block = ({ title, content, t }: Props) => {
//   return (
//     <Container>
//       <h6>{t(title)}</h6>
//       <TextWrapper>
//         <Content>{t(content)}</Content>
//       </TextWrapper>
//     </Container>
//   );
// };

// export default withTranslation()(Block);


import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content, Image } from "./styles";
import contact from  "../../Assets/contact.jpg"

interface Props {
  title: string;
  content: string;
  imageSrc: string; // Added prop for image source
  t: TFunction;
}

const Block = ({ title, content, imageSrc, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
        <Image src={contact} alt="Block Image" /> {/* Added image below content */}
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
