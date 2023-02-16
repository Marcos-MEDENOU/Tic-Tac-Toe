import logo from '././../../src/logo.svg';
import '././../../src/App.css';
import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state= {
          value:null,
        };
    };

    render() {
      return (
        <button 
          className="w-[70px] h-[70px] border-2 border-sky-600" 
          onClick={this.props.onClick}
        >
          <span lassName="w-[30px] h-[20px]">{this.props.value}</span>
        
        </button>
      );
    }

}


export default Square;