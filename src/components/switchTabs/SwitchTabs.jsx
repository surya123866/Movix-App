import { useState } from "react"; // Make sure to import React
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "./styles.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

// Prop validation using PropTypes
SwitchTabs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired, // Expecting an array of strings
  onTabChange: PropTypes.func.isRequired, // Expecting a function for onTabChange
};

export default SwitchTabs;
