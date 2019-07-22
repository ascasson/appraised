const GitHubStatsInit = require('./GitHubStatsInit')

class OrgStats extends GitHubStatsInit {
    orgListMembers() {
        return this.gitHubStats.orgs.listMembers({ org: this.org, per_page: 100 });
    }
}

module.exports = OrgStats;