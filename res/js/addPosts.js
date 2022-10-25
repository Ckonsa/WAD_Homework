fetch("../res/posts.json") // Insted of path to json file, URI can be used here
.then(function (response) { 
    return response.json();
})
.then(function (data) {
    var userIconPath = "res/images/student.png";
    var likeIconPath = "res/images/like-icon.png";

    for (let i = 0; i < data.length; i++) {
        let postsContainer = document.querySelector(".posts-container");

        const postContainer = document.createElement("div");
        postContainer.className = "post";

        const postTop = document.createElement("div");
        postTop.className = "post-top";
        const authorImage = document.createElement("img");
        authorImage.className = "icon";
        authorImage.src = data[i].authorIcon;
        authorImage.alt = "Icon";
        const date = document.createElement("p");
        date.className = "date";
        date.innerText = data[i].createTime;

        postTop.appendChild(authorImage);
        postTop.appendChild(date);
        postContainer.appendChild(postTop);

        const postContent = document.createElement("div");
        postContent.className = "post-content";
        if (data[i].image !== null) { // Adds an image
            const postImage = document.createElement("img");
            postImage.src = data[i].image;
            postContent.appendChild(postImage);
        }
        if (data[i].text !== null) { // Adds a text
            const postText = document.createElement("p");
            postText.innerText = data[i].text;
            postContent.appendChild(postText);
        }

        postContainer.appendChild(postContent);

        const postBottom = document.createElement("div");
        postBottom.className = "post-bottom";

        const commentContainer = document.createElement("div");
        commentContainer.className = "comment-container";

        const userIcon = document.createElement("img");
        userIcon.src = userIconPath;
        userIcon.className = "icon";

        const commentInput = document.createElement("input");
        commentInput.className = "comment";
        commentInput.type = "text";
        commentInput.placeholder = "Write a comment...";

        commentContainer.appendChild(userIcon);
        commentContainer.appendChild(commentInput);

        const likeIcon = document.createElement("img");
        likeIcon.src = likeIconPath;

        postBottom.appendChild(commentContainer);
        postBottom.appendChild(likeIcon);

        postContainer.appendChild(postBottom);

        postsContainer.appendChild(postContainer);
    }
}) // https://www.tutorialstonight.com/read-json-file-in-javascript#fetch

