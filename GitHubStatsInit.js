require('dotenv').config();
const Octokit = require('@octokit/rest');

class GitHubStatsInit {
    constructor() {
        this.gitHubStats = new Octokit({
            auth: process.env.GH_KEY, //this token should be deleted or put into env variable
            userAgent: 'gh-stats v1.0.0',
            baseUrl: 'https://api.github.com',
        })

        this.org = 'cbtnuggets'
    }
};

module.exports = GitHubStatsInit;




