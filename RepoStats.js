const GitHubStats = require('./GitHubStatsInit');
const moment = require('moment');

class RepoStats extends GitHubStats {
    constructor(repo) {
        super()
        this.repo = repo;
    }
    /**
     * Repo Details
     */
    repoDetails() {
        return this.gitHubStats.repos.get({ owner: this.org, repo: this.repo });
    }

    /**
     * Repo Contributors
     */
    repoContributors() {
        return this.gitHubStats.repos.listContributors({ owner: this.org, repo: this.repo });
    }

    /**
     * Repo Commit Activity (past year)
     */
    repoCommitActivity() {
        return this.gitHubStats.repos.getCommitActivityStats({ owner: this.org, repo: this.repo });
    }

    /**
     * Repo Pull Requests (all)
     * State filter
     * Paginated
     */
    repoPullRequests() {
        return this.gitHubStats.pulls.list({ owner: this.org, repo: this.repo, state: 'all', per_page: 100 });
    }

    /**
     * Repo Contributors Stats
     * total: number of commits by auther/user
     * weeks: week, additions, deletions, commits
     */
    repoContributorsStats() {
        return this.gitHubStats.repos.getContributorsStats({ owner: this.org, repo: this.repo });
    }

    /**
     * Repo weekly commit count past year (all, owner)
     */
    repoParticipationStats() {
        return this.gitHubStats.repos.getParticipationStats({ owner: this.org, repo: this.repo });
    }

    /**
     * List commits
     */
    repoListCommits(daysAgo) {
        const since = moment().subtract(daysAgo || 30, 'days').format('YYYY-MM-DDTHH:MM:SSZ');

        return this.gitHubStats.repos.listCommits({ owner: this.org, repo: this.repo, per_page: 100, since });
    }
}

module.exports = RepoStats;