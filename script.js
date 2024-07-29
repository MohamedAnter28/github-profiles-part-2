let input = document.querySelector("input");
let mainDiv = document.querySelector("#main");

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        mainDiv.innerHTML = ""; // Clear previous results

        if (input.value) {
            fetch(`https://api.github.com/users/${input.value.trim()}`)
                .then(response => {
                    if (!response.ok) {
                        let msg = document.createTextNode("No profile with this username");
                        let card = document.createElement("div");
                        card.className = "card";
                        card.appendChild(msg);
                        mainDiv.appendChild(card);
                        throw new Error("User not found");
                    }
                    return response.json();
                })
                .then(data => {
                    let card = document.createElement("div");
                    card.className = "card";

                    let imgdiv = document.createElement("div");
                    let img = document.createElement("img");
                    img.className = "avatar";
                    img.src = data.avatar_url;
                    imgdiv.appendChild(img);

                    let userInfo = document.createElement("div");
                    userInfo.className = "user-info";

                    let heading = document.createElement("h2");
                    heading.appendChild(document.createTextNode(data.name));

                    let ul = document.createElement("ul");

                    let lifollowers = document.createElement("li");
                    lifollowers.appendChild(document.createTextNode(`${data.followers} `));
                    let strongfollowers = document.createElement("strong");
                    strongfollowers.appendChild(document.createTextNode("followers"));
                    lifollowers.appendChild(strongfollowers);
                    ul.appendChild(lifollowers);

                    let lifollowing = document.createElement("li");
                    lifollowing.appendChild(document.createTextNode(`${data.following} `));
                    let strongfollowing = document.createElement("strong");
                    strongfollowing.appendChild(document.createTextNode("following"));
                    lifollowing.appendChild(strongfollowing);
                    ul.appendChild(lifollowing);

                    let lipublic_repos = document.createElement("li");
                    lipublic_repos.appendChild(document.createTextNode(`${data.public_repos} `));
                    let strongpublic_repos = document.createElement("strong");
                    strongpublic_repos.appendChild(document.createTextNode("public repos"));
                    lipublic_repos.appendChild(strongpublic_repos);
                    ul.appendChild(lipublic_repos);

                    let repos = document.createElement("div");
                    repos.className = "repos";

                    fetch(`https://api.github.com/users/${input.value.trim()}/repos?sort=created`)
                        .then(reposResponse => {
                            if (!reposResponse.ok) {
                                throw new Error("Repos not found");
                            }
                            return reposResponse.json();
                        })
                        .then(reposData => {
                            let reposList = reposData.slice(0, 5);
                            reposList.forEach(repo => {
                                let link = document.createElement("a");
                                link.appendChild(document.createTextNode(repo.name));
                                link.className = "repo";
                                link.href = repo.html_url;
                                link.target = "_blank";
                                repos.appendChild(link);
                            });
                        });

                    userInfo.appendChild(heading);
                    userInfo.appendChild(ul);
                    userInfo.appendChild(repos);

                    card.appendChild(imgdiv);
                    card.appendChild(userInfo);

                    mainDiv.appendChild(card);
                });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    input.addEventListener('keydown', handleEnterKey);
});



/*
{
    "login": "MohamedAnter28",
    "id": 164732605,
    "node_id": "U_kgDOCdGevQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/164732605?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MohamedAnter28",
    "html_url": "https://github.com/MohamedAnter28",
    "followers_url": "https://api.github.com/users/MohamedAnter28/followers",
    "following_url": "https://api.github.com/users/MohamedAnter28/following{/other_user}",
    "gists_url": "https://api.github.com/users/MohamedAnter28/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MohamedAnter28/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MohamedAnter28/subscriptions",
    "organizations_url": "https://api.github.com/users/MohamedAnter28/orgs",
    "repos_url": "https://api.github.com/users/MohamedAnter28/repos",
    "events_url": "https://api.github.com/users/MohamedAnter28/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MohamedAnter28/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Mohamed Tamer",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 35,
    "public_gists": 0,
    "followers": 1,
    "following": 6,
    "created_at": "2024-03-24T08:55:59Z",
    "updated_at": "2024-07-27T12:00:53Z"
}
*/


/*
[
    "0",
    {
        "id": 834936338,
        "node_id": "R_kgDOMcQeEg",
        "name": "Github-Profiles",
        "full_name": "MohamedAnter28/Github-Profiles",
        "private": false,
        "owner": {
            "login": "MohamedAnter28",
            "id": 164732605,
            "node_id": "U_kgDOCdGevQ",
            "avatar_url": "https://avatars.githubusercontent.com/u/164732605?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/MohamedAnter28",
            "html_url": "https://github.com/MohamedAnter28",
            "followers_url": "https://api.github.com/users/MohamedAnter28/followers",
            "following_url": "https://api.github.com/users/MohamedAnter28/following{/other_user}",
            "gists_url": "https://api.github.com/users/MohamedAnter28/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/MohamedAnter28/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/MohamedAnter28/subscriptions",
            "organizations_url": "https://api.github.com/users/MohamedAnter28/orgs",
            "repos_url": "https://api.github.com/users/MohamedAnter28/repos",
            "events_url": "https://api.github.com/users/MohamedAnter28/events{/privacy}",
            "received_events_url": "https://api.github.com/users/MohamedAnter28/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/MohamedAnter28/Github-Profiles",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles",
        "forks_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/forks",
        "keys_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/teams",
        "hooks_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/hooks",
        "issue_events_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/issues/events{/number}",
        "events_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/events",
        "assignees_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/assignees{/user}",
        "branches_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/branches{/branch}",
        "tags_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/tags",
        "blobs_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/languages",
        "stargazers_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/stargazers",
        "contributors_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/contributors",
        "subscribers_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/subscribers",
        "subscription_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/subscription",
        "commits_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/contents/{+path}",
        "compare_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/merges",
        "archive_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/downloads",
        "issues_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/issues{/number}",
        "pulls_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/labels{/name}",
        "releases_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/releases{/id}",
        "deployments_url": "https://api.github.com/repos/MohamedAnter28/Github-Profiles/deployments",
        "created_at": "2024-07-28T18:50:01Z",
        "updated_at": "2024-07-28T18:50:32Z",
        "pushed_at": "2024-07-28T18:50:29Z",
        "git_url": "git://github.com/MohamedAnter28/Github-Profiles.git",
        "ssh_url": "git@github.com:MohamedAnter28/Github-Profiles.git",
        "clone_url": "https://github.com/MohamedAnter28/Github-Profiles.git",
        "svn_url": "https://github.com/MohamedAnter28/Github-Profiles",
        "homepage": null,
        "size": 761,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
    }
]
*/

// let ulinfo = [followers,following,public_repos]

// console.log(ulinfo[0])