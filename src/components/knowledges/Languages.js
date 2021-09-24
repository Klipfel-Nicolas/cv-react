import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.8 },
      { id: 2, value: "css", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 3, value: "MySQL", xp: 0.7 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1 },
      { id: 1, value: "Vue", xp: .4 },
      { id: 1, value: "Symfony", xp: .8 },
      { id: 2, value: "Bootsrap", xp: 1 },
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 4, value: "Tailwind", xp: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
