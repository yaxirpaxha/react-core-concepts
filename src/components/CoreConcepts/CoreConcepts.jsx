import Section from "../Section/Section.jsx";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.key} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
