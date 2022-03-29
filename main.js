const repoUrl = 'https://api.github.com/search/repositories?q=ripple-hover-effect';
async function fetchData(url = '') {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/vnd.github.v3.star+json'
        }
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

const getRepoGazers = (repoUrl) => {
    return fetchData(repoUrl)
        .then(res => {
            console.log(res.items)
            const stargazers = res.items[0].stargazers_count
            const forks = res.items[0].forks
            const issues = res.items[0].open_issues

            return { stargazers, forks, issues }
        })
        .catch(e => console.log('error:', e.message))
}

export default getRepoGazers;