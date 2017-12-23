function Get(url){
    var HttpReq = new XMLHttpRequest(); // a new request
    HttpReq.open("GET",url,false);
    HttpReq.send(null);
    return HttpReq.responseText;          
}

var countries = JSON.parse(Get('https://restcountries.eu/rest/v2/all?fields=name'));

countries.map(function(element, index) {
	countries[index] = element.name;
})

class App extends React.Component{
  render(){
    return(
    <InputBox />
      );
  }
}

class InputBox extends React.Component{
  constructor(){
    super();
    this.state = {
      data : '',
      matches : [],
      userInput : '',
      rowHighLighted : -1
    }
  }
  componentWillMount(){
    this.state.data = countries
  }
  handleChange = (event) => {
    let matches = []
    if(event.target.value){
    for(var i = 0; i< this.state.data.length; i++){
       if(this.state.data[i].toLowerCase().startsWith(event.target.value.toLowerCase())){
         matches.push(this.state.data[i])
       }
    }
    }
    this.setState({userInput : event.target.value, matches : matches} )
    //console.log(this.state)
   
  }
  selectAutoComplete(i) {
    this.setState({
      userInput : this.state.matches[i],
      matches : []
    })    
  }
  setRowHighlighted(i){
    this.setState({
      rowHighLighted : i
    })
  }

  render(){
    return (
      <div id="search">
      <input id="autocomplete-input" value={this.state.userInput} type="text" placeholder="Search By Country" onChange={this.handleChange} />
      <ul id="auto-complete-suggestions">
        {
          this.state.matches.map((element, index) => {
            let background = this.state.rowHighLighted === index ? 'rgba(105, 111, 118, 0.8)' : 'rgba(0, 0, 0, 0)'
            return (<li key={index} style={{ background : background} } onClick={ () => this.selectAutoComplete(index) } onMouseOver={() => this.setRowHighlighted(index) }> {element} </li> ) 
          })
        }
      </ul>
      </div>
      );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);