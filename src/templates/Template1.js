import React from 'react';
import {Header } from '../elements/Header';
import {Nav } from '../elements/Nav';
import {Section } from '../elements/Section';
import {Article } from '../elements/Article';
import {Aside } from '../elements/Aside';
import {Footer } from '../elements/Footer';
//necesario para Redux
import store from '../redux/store';
import {connect} from 'react-redux';


class Template1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {layout : "Template 1"} //this is the initial state
    this.updateTemplate = this.updateTemplate.bind(this);
    this.listenReduxStoreChange = this.listenReduxStoreChange.bind(this);

  }
  updateTemplate(){
    let message =  this.state.layout === "Template 1" ? "Template 2" : "Template 1";
    this.setState({
      layout : message
    })
  }
   listenReduxStoreChange(){
     this.setState({
       layout : store.getState().changeLayout.layout
     });
  }
  render(){
    store.subscribe(this.listenReduxStoreChange);
    let valor = this.state.layout === "Template 1" ? "inherit" : 1;
    return (
    <React.Fragment>
      <Header />
      <Nav liftState={this.updateTemplate} template={this.state.layout} />
      <div id="content-wrapper">
       <div id="section-article-wrapper" style={{order : valor}}>
          <Section layout={this.props.layout}/>
          <Article layout={this.props.layout} />
        </div>
        <Aside />
      </div>
      <Footer />
    </React.Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
     layout : state.changeLayout.layout
  };
};
export default connect(mapStateToProps)(Template1)
