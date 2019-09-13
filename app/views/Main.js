import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
class Main extends Component {
  constructor(props) {
		super(props);
    this.state = {pendings: [], users: [], completed: [], alldatas: [], todays: []};
	
		
  }
  
	
	componentDidMount() {
		fetch('taskapi/api.php?type=total&id=1')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
      });
      fetch('taskapi/api.php?type=pending&id=1')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					pendings:result
				});
      });
      
      fetch('taskapi/api.php?type=completed&id=1')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					completed:result
				});
      });
      
      
      fetch('taskapi/api.php?type=todays&id=1')
     		.then(response => {
        return response.json();
			}).then(result => {
        this.setState({
          todays:result
				});
			});
      fetch('taskapi/api.php?type=alldata&id=1')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          alldatas:result
        });
      });
	}
 
    render() {
        return (
 <div>
  
  <div className="wrapper wrapper-content">
    <div className="row">
      <div className="col-lg-3">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <span className="label label-success pull-right">Total</span>
            <h5>Total Tasks</h5>
          </div>
          <div className="ibox-content">
            <h1 className="no-margins">
            {
						this.state.users.map(function(item, key) {             
						return (
            
            <h1 className="no-margins">{item.count}</h1>
               
							)
						})
					}
          </h1>
           
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <span className="label label-danger pull-right">Total</span>
            <h5>Task Pending</h5>
          </div>
          <div className="ibox-content">
          {
						this.state.pendings.map(function(item, key) {             
						return (
         
            <h1 className="no-margins">{item.ids}</h1>
               
							)
            })
          }
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <span className="label label-info pull-right">Today</span>
            <h5>Task Completed</h5>
          </div>
          <div className="ibox-content">
          {
						this.state.completed.map(function(item, key) {             
						return (
         
            <h1 className="no-margins">{item.complete}</h1>
               
							)
            })
          }
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <span className="label label-primary pull-right">Today</span>
            <h5>Today's Task</h5>
          </div>
          <div className="ibox-content">
          {
						this.state.todays.map(function(item, key) {             
						return (
            
            <h1 className="no-margins">{item.today}</h1>
               
							)
            })
          }
          </div>
        </div>
      </div>
    </div>
    
    <div className="row">
    <div className="col-lg-12">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Records</h5>
          <div className="ibox-tools">
        
          </div>
        </div>
        <div className="ibox-content">
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover dataTables-example">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Share</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.alldatas.map(function(item, key) {             
                    return (
                     
                          <tr className="gradeX" key = {key}>
                  <td>{item.id}</td>
                  <td>{item.data}</td>
                  <td>{item.status}</td>
                  <td>{item.createdAt}</td>
                 
                  <td><button className="btn btn-warning " type="button"><i className="fa fa-eye" /> Share Task</button></td>
                  <td><button className="btn btn-info " type="button"><i className="fa fa-paste" /> Edit</button></td>
                  <td><button className="btn btn-danger " type="button"><i className="fa fa-trash" /> Delete</button></td>
                </tr>
                    
                    )
                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  
</div>

        )
    }

}

export default Main