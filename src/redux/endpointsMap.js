import FETCH_SOCCER_TEAM_LIST_REQUEST from '../model/team'

export default apis => ({
  'team/FETCH_SOCCER_TEAM_LIST_REQUEST' : {
    url: 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League',
    selector: data => ({...data})
  }
})
