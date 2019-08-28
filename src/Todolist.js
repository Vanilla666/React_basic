import React from 'react';
class Todolist extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          item:[], 
        };//內部自定義的變數
       
      }

      insert_text = (e) => { //利用本身事件(e)找到自己
        // console.log(e.target.value);
        this.state.item.push(e.target.value); //把字串放到陣列
        this.setState({
          item:this.state.item //更新State
        })
        console.log(this.state.item);//印出State.item狀態
       
      }
  render() {
    const data = this.state.item.map((item,index) => {
      return <li key={index}>{item}</li>
    })
    return(
      <div>
         請輸入值:<input type="text" 
         onChange={this.insert_text}/>
         <ul>
           {data}
         </ul>
      </div>
    );
  } 

}
export default Todolist;
