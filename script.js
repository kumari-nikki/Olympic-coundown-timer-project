
setInterval(() => {
    const result = document.getElementById("result");

    const currentTime = Date.now();
    const olympicTime = new Date(2028, 6, 14).getTime();
    let timer = olympicTime - currentTime;

    if (timer <= 0) {
        result.textContent = "🏅 The Olympics have started!";
        return;
    }


    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(timer / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);

    const minutes = Math.floor(timer / (1000 * 60));
    timer %= (1000 * 60);

    const seconds = Math.floor(timer / 1000);

    result.textContent = 
        `${days} Days : ${hours.toString().padStart(2, '0')} Hours : ` +
        `${minutes.toString().padStart(2, '0')} Minutes : ` +
        `${seconds.toString().padStart(2, '0')} Seconds`;
}, 1000);
