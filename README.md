### Welcome to Travelog

This app allows you too view your favorite and most popular cities or locations in the world! It also lists out landmarks, descriptions and comments so the user will know a little more about the location they would like to visit soon!

Users will be able to log in with a valid email and password. Once they have logged in with there credentials. They will have access to view the popular locations and add any location they want to their "travel list" or bucket list for locations! There are also alot of comments providing feedback towards a certain location. 

### TECHNOLOGIES USED:

+ React
+ Express
+ Node
+ Webpack
+ Heroku
+ SQL
+ CSS
+ HTML
+ Javascript
+ NPM 

### Code Snippet:
Landmark List: 
```
class Landmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currId: null,
      currLandmark: null
    }}
  componentDidMount() {
    const urlId = window.location.pathname.split('/')[2];
    const currId = parseInt(urlId);
    const currLandmark = this.props.landmarkData.filter(landmark => landmark.id == currId);
    this.setState({
      currId: currId,
      currLandmark: currLandmark[0]
    })}
  render() {
    return (
      <div>
      {!!this.state.currLandmark ?
        <section className="landmark">
        <h1> {this.state.currLandmark.name} </h1>
        <h3> {this.state.currLandmark.city} </h3>
        <h4> {this.state.currLandmark.formatted_address} </h4>
        <p> {this.state.currLandmark.description} </p>
        <span className="clickme" onClick={() => this.props.deleteLandmark(this.props.landmarkData.id)}>Delete</span>
        </section>
        : null }
      </div>
    )}}
```

### Complications/Future Improvements:

+ Having a password and username functionality.
+ See top searched city images appear on the home page. And be able to click on those cities and see the landmarks of those cities.
+ Users should be able to write a comment under single landmark page. 
+ An image of the landmark should appear on a single landmark page.
+ Users should see eachother's comments.
+ Make a 3rd party api call to see all the landmarks around the world.


### TIMELINE:
12/20 - Approval, user stories, wireframes, project board.
12/21 - DB Testing, setting up responsibilities. (HTML mock up)
12/22 - 12/23 - Phase 1 / Individual work.
12/24 - 12/25 - Christmas Break
12/26 - Phase 2 (Frontend, backend, routes (some react and express integration) 
12/27 - Phase 2 
12/28 - Phase 2 
12/29 - Phase 2 
12/30 - Individual bug fixing.
12/31 - Happy New YEARRRR
1/1 - Individual work, debugging.
1/2 - Testing everything all together. Preparing presentations etc.
1/3 - Presentations


###  CHECKING SCHEDULE:

+ 12/26 - 6:00pm - 7pm -> Google Hangout Meeting 
+ 12/27 - 6:00pm - 7pm -> Google Hangout Meeting 
+ 12/28 - 6:00pm - 7pm -> Google Hangout Meeting  
+ 12/29 - Be on SLACKKKKKK 
+ 1/1 - 1:00pm - 3pm -> Google Hangout Meeting

###  GUIDELINES:

+ Check git branch --all to check all the existing branches. So that you do not create a branch with the same name. 
+ Each person creates their own branch. And work from that. 
+ Always double check your work for syntax errors before you submit anything!!! Kepp it airbnb based. And DRY. 
+ Remember the order and organization of some comments (ex. .env always on top). When you are done remember to git add, commit and push origin {branchname}. 
+ Make a pull request from the github page (base: master compare: {yourbranchname}) 
+ Whoever checks the pull request needs to approve it so we know its been double checked. 
+ When someone mergs the pull request SLACK MESSAGE EVERYONE. And tell us to pull the new master branch. (git pull) At the very end we will be doing a commit -> rebase to merge everything together.

+ Do not forget to add user stories!!! Each team team member has to add a user story based on their responsibility. Don't forget to share your updates with the team!!!!

Here is the cheatsheet: https://git.generalassemb.ly/wdi-nyc-hamilton/group-git-cheatsheet
