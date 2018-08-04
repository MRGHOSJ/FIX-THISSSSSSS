import React from 'react';

class Hello extends React.Component {
   render() {
    var myStyle = {
        fontSize: 50,
        color: '#FF0000'
     }
     var mysec = {
        fontSize: 20,
        color: 'gray'
     }
     var mythird = {
        fontSize: 30,
        color: 'morran'
     }
      return (
         <div>
            <h1 style = {mythird} >Bonjour  {this.props.name} , Comment va-tu ?</h1>
            <h2 style = {myStyle}> votre age est : {this.props.age}</h2>
            <h3 style = {mysec}> Your Porficinal At : {this.props.prof}</h3>
            <h4> CDN: {this.props.cdn}</h4>
         </div>
      );
   }
}
export default Hello