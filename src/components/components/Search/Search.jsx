import React from "react";
import styles from "./Search.module.scss";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <input
            className={styles.input}
            placeholder="Please input something..."
            type="text"
          />
        </div>
        <div className={styles.button}>
          <button className={styles.searchBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
