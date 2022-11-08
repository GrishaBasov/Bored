import "./App.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

function App() {
  let [advice, setAdvice] = useState("Just try it");

  function getData() {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((res) => setAdvice(res.data.activity));
  }

  return (
    <div className="app">
      <motion.div
        className="advice"
        animate={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        {advice}
      </motion.div>
      <motion.button
        type="button"
        className="btn btn-primary"
        whileHover={{ rotate: [0, 20, -20, 0] }}
        transition={{
          duration: 0.4,
        }}
        onClick={getData}
      >
        I'm bored
      </motion.button>
    </div>
  );
}

export default App;
