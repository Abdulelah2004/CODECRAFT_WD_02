    let timer;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
      let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      let secs = String(seconds % 60).padStart(2, '0');
      document.getElementById("display").textContent = `${hrs}:${mins}:${secs}`;
    }

    function startStop() {
      if (!isRunning) {
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
        isRunning = true;
      }
    }

    function pause() {
      clearInterval(timer);
      isRunning = false;
    }

    function reset() {
      clearInterval(timer);
      seconds = 0;
      updateDisplay();
      isRunning = false;
      document.getElementById("laps").innerHTML = "";
    }

    function lap() {
      if (isRunning) {
        let lapTime = document.getElementById("display").textContent;
        let lapElement = document.createElement("p");
        lapElement.textContent = `Lap: ${lapTime}`;
        document.getElementById("laps").appendChild(lapElement);
      }
    }