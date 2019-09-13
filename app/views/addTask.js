import React, { Component } from 'react'
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
export default class addTask extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    
    this.setState({
      res: stringifyFormData(data),
    });
  
  }

  render() {
    return (
      <div>
  <div classname="row">
    <div classname="col-lg-12">
      <div classname="ibox float-e-margins">
      
          <Link to="/main" className="btn btn-primary m-t m-b" type="button"> <i className="fa fa-chevron-left" />  Go back</Link>

        </div></div></div><i classname="fa fa-chevron-left">
    <div className="ibox-title">
      <h5>Add Task</h5>
    </div>
    <div className="ibox-content">
      <form className="form-horizontal"  onSubmit={this.handleSubmit}>
        <div className="form-group"><label className="col-sm-2 control-label" htmlFor="taskDetail"> Task Detail</label>
          <div className="col-sm-10"><textarea id="taskDetail" name="taskDetail"  /></div>
        </div>
       
          <div className="hr-line-dashed" />
          <div className="form-group"><label className="col-sm-2 control-label"  htmlFor="taskDate">Date</label>
            <div className="col-sm-2"><input id="taskDate" name="taskDate" type="date" className="form-control" /></div>
          </div>
          <div className="hr-line-dashed" />
          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-2">
              <button className="btn btn-primary">Add Record</button>
            </div>
          </div>
        </form>
        <div>
        
        
        {this.state.res && (
        	<div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
        	</div>
        )}
    	</div>
    </div>
  </i></div>


    	
    );
  }
}

// ReactDOM.render(<addTask />, document.getElementById('app'));

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  

  window.location.href='http://localhost/taskapi/api.php?type=addTask&id=1&taskDetail='+data.taskDetail+'&taskDate='+data.taskDate;
 
  
  // return JSON.stringify(data, null, 4);
}

// export default Main