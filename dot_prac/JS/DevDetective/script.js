const modeSwitch = document.querySelector(".mode");
const modeText = document.querySelector("[mode-text]");
const modeImage = document.querySelector("[mode-image]");

const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userName = searchInput.value;
    if (userName == "") return;
    fetchUserInfo(userName);
});

async function fetchUserInfo(userName) {
    try {
        const response = await fetch(
            `https://api.github.com/users/${userName}`
        );
        const data = await response.json();
        renderUserInfo(data);
    } catch (err) {}
}

function renderUserInfo(data) {
    const avatar = document.querySelector("[data-avatar]");
    // const profileInfo = document.querySelector("[profile-info]");
    const name = document.querySelector("[data-name]");
    const joinDate = document.querySelector("[data-joinDate]");
    const htmlURL = document.querySelector("[data-htmlURL]");
    const bio = document.querySelector("[data-bio]");
    const repo = document.querySelector("[data-repo]");
    const followers = document.querySelector("[data-followers]");
    const following = document.querySelector("[data-following]");
    const location = document.querySelector("[data-location]");
    const twitter = document.querySelector("[data-twitter]");
    const blog = document.querySelector("[data-blog]");
    const company = document.querySelector("[data-company]");

    avatar.src = `${data?.avatar_url}`;
    name.innerText = data?.name;

    const d = new Date(data?.created_at);
    let original = d.toDateString();
    let result = original.substr(original.indexOf(" ") + 1);
    joinDate.innerText = `Joined ${result}`;

    htmlURL.href = data?.html_url;
    htmlURL.innerText = `@${data?.login}`;
    bio.innerText = data?.bio;
    repo.innerText = data?.public_repos;
    followers.innerText = data?.followers;
    following.innerText = data?.following;
    location.innerText = data?.location;
    twitter.innerText = data?.login;
    twitter.href = `https://twitter.com/${data?.twitter_username}`;
    blog.innerText = data?.blog;
    blog.href = data?.blog;
    company.innerText = data?.company;
}
