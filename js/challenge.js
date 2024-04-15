document.addEventListener("DOMContentLoaded", function() {
    // Timer functionality
    let counter = document.getElementById("counter");
    let count = 0;
    let timer = setInterval(function() {
        counter.innerText = count;
        count++;
    }, 1000);

    // Plus button functionality
    document.getElementById("plus").addEventListener("click", function() {
        count++;
        counter.innerText = count;
    });

    // Minus button functionality
    document.getElementById("minus").addEventListener("click", function() {
        count--;
        counter.innerText = count;
    });

    // Like button functionality
    let likes = {};
    document.getElementById("heart").addEventListener("click", function() {
        if (!likes[count]) {
            likes[count] = 1;
        } else {
            likes[count]++;
        }
        let likesList = document.querySelector(".likes");
        likesList.innerHTML = "";
        for (let number in likes) {
            let li = document.createElement("li");
            li.innerText = `${number} has been liked ${likes[number]} times`;
            likesList.appendChild(li);
        }
    });

    // Pause button functionality
    let isPaused = false;
    let pauseButton = document.getElementById("pause");
    let buttonsToDisable = document.querySelectorAll("button:not(#pause)");

    pauseButton.addEventListener("click", function() {
        if (!isPaused) {
            clearInterval(timer);
            buttonsToDisable.forEach(function(button) {
                button.disabled = true;
            });
            this.innerText = "resume";
            isPaused = true;
        } else {
            timer = setInterval(function() {
                counter.innerText = count;
                count++;
            }, 1000);
            buttonsToDisable.forEach(function(button) {
                button.disabled = false;
            });
            this.innerText = "pause";
            isPaused = false;
        }
    });

    // Comment functionality
    document.getElementById("comment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let commentInput = document.getElementById("comment-input");
        let comment = commentInput.value;
        let commentList = document.getElementById("list");
        let newComment = document.createElement("p");
        newComment.innerText = comment;
        commentList.appendChild(newComment);
        commentInput.value = "";
    });
});