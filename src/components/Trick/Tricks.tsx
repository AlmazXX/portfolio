import { TrickData } from "../../types";
import TrickItem from "./TrickItem";
import './Trick.css';

interface Props {
  tricks: TrickData[];
}

const Tricks: React.FC<Props> = ({ tricks }) => {
  return (
    <section className="section trick" id="trick">
      <h2 className="section__title">Trick Or Treat</h2>
      <div className="trick__container container grid">
        {tricks.map((trick) => (
          <TrickItem key={trick.img} trick={trick} />
        ))}
      </div>
    </section>
  );
};

export default Tricks;