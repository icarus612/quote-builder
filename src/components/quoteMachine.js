import React from 'react';
import '../application.css';
import InfoForm from './infoForm.js'
import Pages from './pages.js'
import FrontEndNeeds from './frontEndNeeds.js'
import BackEndNeeds from './backEndNeeds.js'
import BasicNeeds from './basicNeeds.js'
class PriceBox extends React.Component {

	constructor(props){
	  super(props);
    }
	  render(){
		  return (
				<div className="price-card p-3">
                    <h5 id="pages" className={this.props.pages === 0 ? "d-none" : "d-block"}>
                        Basic Site Needs: <span className="float-right">$ {this.props.pages}</span>
                    </h5>
                    <h5 id="design" className={this.props.design === 0 ? "d-none" : "d-block"}>
                        Dynamic Design: <span className="float-right">$ {this.props.design}</span>
                    </h5>
                    <h5 id="programming" className={this.props.programming === 0 ? "d-none" : "d-block"}>
                        Programming: <span className="float-right">$ {this.props.programming}</span>
                    </h5>
					<hr />
					<h4 className="px-3 bold">
						Subtotal:  <span className="float-right">$ {this.props.currentPrice}</span>
					</h4>				
				</div>
		  );
	  }
	
  }
  

class QuoteMachine extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            pages: {
                siteType: "",
                subtotal: 0,
                design: 0,
                pages: 0,
            },
            basicNeeds: {
                option1: false,
                option2: false,
                option3: false,
                option4: false,
                option5: false,
                option6: false,
                option7: false,
                option8: false,
                option9: false,
                option10: false,
                option11: false,
                option12: false,
                subtotal: 0,
            },
            backEndNeeds: {
                option1: false,
                option2: false,
                option3: false,
                subtotal: 0,
            },
            infoForm:{

                subtotal: 0,
            },
            spot: 0,
            subtotal: 0,
		}
		this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.storeInfo = this.storeInfo.bind(this);
        this.cardIndex = ['pages', 'basicNeeds', 'backEndNeeds', 'infoForm'];
        this.cards = [ <Pages onChange={this.storeInfo} value={this.state.pages}/>, <BasicNeeds value={this.state.basicNeeds} onChange={this.storeInfo} />, <BackEndNeeds value={this.state.backEndNeeds} onChange={this.storeInfo} />, <InfoForm />]


    }

	next(){
        if (this.state.spot < this.cards.length - 1) {
            this.setState({spot: this.state.spot+1})

        }
	}
	prev(){
		if (this.state.spot > 0) {
            this.setState({spot: this.state.spot-1})

        }
    }
    storeInfo(e){
        this.setState({[this.cardIndex[this.state.spot-1]] : {...e}});
        
    }
    componentDidUpdate(){
        console.log(this.cardIndex[this.state.spot], this.state)

        this.cards = [ <Pages value={this.state.pages} onChange={this.storeInfo} />, <BasicNeeds value={this.state.basicNeeds} onChange={this.storeInfo} />, <BackEndNeeds value={this.state.backEndNeeds} onChange={this.storeInfo} />, <InfoForm />]
    }

	render(){

		return (
            <div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
                <div className="col-12 col-md-8">
                    <div>
                        <h4>
                            Step {this.state.spot + 1} of {this.cards.length}
                        </h4>
                    </div>
                    {this.cards[this.state.spot]}
                    <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
                        <button className="btn btn-lg btn-primary btn-purple-basic" onClick={this.prev}>Previous</button>

                        <button className="btn btn-lg btn-primary btn-purple" onClick={this.next}>Next</button>
                    </div>
                </div>     
                <div className="col-12 col-md-4">
                    <PriceBox 
                        pages={this.state.pages.subtotal}
                        design={this.state.basicNeeds.subtotal}
                        programming={this.state.backEndNeeds.subtotal}
                        currentPrice={this.state.subtotal}
                    />
                </div>
            </div>
      
		);
	}
  
}

export default QuoteMachine;