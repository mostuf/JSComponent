    let progress1 = new ProgressBar(document.getElementById("p1"));
    let progress2 = new ProgressBar(document.getElementById("p2"));
    let progress3 = new ProgressBar(document.getElementById("p3"));

    setInterval(function() {
        progress1.changePercent(progress1.percent + 0.2);
    }, 42);