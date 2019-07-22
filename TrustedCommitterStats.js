const _ = require('lodash');
const moment = require('moment');

const RepoStats = require('./RepoStats');
const OrgStats = require('./OrgStats');
const projects = require('./trustedCommitterProjects');

class TrustedCommitterStats {
    constructor(repo) {
        this.repoStats = new RepoStats(repo);
        this.orgStats = new OrgStats();
    }

    /**
     * Contributors: org members and previous members
     */
    projectContributors() {
        this.repoStats.repoContributors()
            .then(({ data }) => {
                const contributorsRaw = data;
                const contributors = _.map(contributorsRaw, (contributor) => contributor.login);
                
                //Currently restricted to one page of queries
                this.orgStats.orgListMembers()
                    .then(({ data }) => {
                        const members = _.map(data, (member) => member.login);
    
                        const activeContributors = contributors.filter(user => members.includes(user));
    
                        const compare = {
                            totalContributors: contributors.length,
                            totalActiveContributors: activeContributors.length
                        }
                        
                        //TODO: return data for other processing
                        console.log(compare)
                    })
                    .catch(err => console.log(err))
            })
    }
    
    /**
     * Contributors since X days ago
     * defaults to 30 days
     */
    projectContributorsOverTime(daysAgo) {
        this.repoStats.repoListCommits(daysAgo)
            .then(({ data }) => {
                console.log(data)
                _.forEach(data, commit => {
                    console.log(commit.author.login)
                })
            })
    }
}


const tc = new TrustedCommitterStats('lib-app-core-nodejs')
// tc.projectContributors()
tc.projectContributorsOverTime(50)