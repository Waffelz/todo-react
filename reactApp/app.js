import React from 'react';
import ReactDOM from 'react-dom';

const dummyData=['waffle','scone','crêpe','croissant']


class ToEatList extends React.Component{
  constructor(props) {
    super(props);
    this.renderlist = this.renderlist.bind(this);
  }
  renderlist(){
    console.log('hi')
    const list=dummyData.map((item)=> {//()=>(...) implicit return
        return (
          <li>
            <button type='button'>X</button>
            {item}
          </li>
        )
    });
    console.log(list)
    return(
      <ul>{list}</ul>
    )
  }

  render(){
    return (
      <div>{this.renderlist()}</div>//function return is not evaluated, need to explicitly say i am returning one element
    )
  }
}

class InputLine extends React.Component{
  

}

ReactDOM.render(<ToEatList dummyData={dummyData}/>,
   document.getElementById('root'));
