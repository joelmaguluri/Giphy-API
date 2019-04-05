import React from "react";
import Axios from "axios";

var divStyle = {
  marginTop:"10%"
};
var divStyle1 = {
  marginTop:"20%"
};
class Wrap extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {imageurl: ''};
    this.state={previousstate:''};
  }

 handleChange=(event)=>
 {

    this.setState({value: event.target.value});
    var temp=this.state.value;
    if(temp!=null){
      temp=temp.trim();
    }
    var temp2=this.state.previousstate.trim()
    if(temp!==''&&temp!==temp2){
    this.getgif(this.state.value).then((response)=> {
    var img=response.data.data.images.original;
    console.log(img);
    this.setState({imageurl:`${img.url}`})
  
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
getgif=(term)=>{
  if(term!=null){
    this.setState({previousstate: `${term.trim()}`})
  }

  return Axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=d8arQdw9M5Q210MyY3vOf6phKE9WSrrU&s=${term}`);
}
 render(){
    return (
    <div>
    <div style={divStyle1}>
    <div class="wrap">
     <div class="search">
       <input type="text" class="searchTerm" placeholder="What are you looking for?" value={this.state.value} onChange={this.handleChange} />
       <button type="submit" class="searchButton">
         <i class="fa fa-search"></i>
        </button>
     </div>
     </div>
     </div>
     <div style={divStyle}>
      <img src={this.state.imageurl} alt={this.props.alt}/>
      </div>
   </div>);
 }


}
export default Wrap;
