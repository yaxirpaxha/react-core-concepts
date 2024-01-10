import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import TabButton from "../Tabs/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";


const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                key={concept.key}
                isSelected={selectedTopic === concept.key}
                onClick={() => handleSelect(concept.key)}
              >
                {concept.title}
              </TabButton>
            ))}
          </>
        }
      >
        {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;
