const TrafficLightSimulator = () => {
  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={'light red'}></div>
        <div className={'light yellow'}></div>
        <div className={'light green'}></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;

const styles = `
  .traffic-light-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .traffic-light {
    background-color: #333;
    width: 120px;
    height: 320px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .light {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #444;
    transition: all 0.3s ease;
    position: relative;
  }


  .light.red {
    background-color: #5c0e0e;
  }

  .light.red.active {
    background-color: #ff0000;
    box-shadow: 0 0 20px #ff0000;
  }


  .light.yellow {
    background-color: #5c5c0e;
  }

  .light.yellow.active {
    background-color: #ffff00;
    box-shadow: 0 0 20px #ffff00;
  }

  .light.green {
    background-color: #0e5c0e;
  }

  .light.green.active {
    background-color: #00ff00;
    box-shadow: 0 0 20px #00ff00;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
