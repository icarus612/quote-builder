import React from 'react';

export default class Pages extends React.Component{
	constructor(props){
        super(props);
        this.state = {
			siteType: this.props.value.siteType,
			subtotal: this.props.value.subtotal,
			design: this.props.value.design,
			pages: this.props.value.pages,
        }
		this.update = this.update.bind(this);
		this.pageNumber = this.pageNumber.bind(this);
		this.subtotal = this.subtotal.bind(this);
	}
	componentWillUnmount(){
		this.props.onChange(this.state)
	}
    update(e){
        let option = `${e.target.id}`; 
        this.setState({
            siteType: option,
		});
		this.setState({ design: Number(e.target.value)})
		this.subtotal()
	}
	pageNumber(e){
		this.setState({ pages: Number(e.target.value)})
		this.subtotal()
	}
	subtotal(){
		this.setState({subtotal: this.state.design + (this.state.pages * 100)});
	}
	render(){
		return (

			<form className="d-flex flex-column flex-wrap flex-row justify-content-center align-items-around">
				<h3 className="mb-3">Lets Start With Pages</h3>
				<div className="col-12 align-items-center">
					<input type="radio" class="m-auto" id="basic" value={250} onClick={this.update}  checked={this.state.siteType == "basic"} />
                    <label className="pl-2 mb-0" id="basic">
						Fast Design with Less Consulting & Meetings
                    </label>
		
				</div>
				<div className="col-12 align-items-center">
					<input type="radio" class="m-auto" id="custom" value={600} onClick={this.update} checked={this.state.siteType == "custom"} />
                    <label className="pl-2 mb-0" id="custom">
						Custom Website with Consultative Process
                    </label>
				</div>
				<div className="my-4 col-12 d-flex flex-row align-items-center justify-content-start">
					<label className="pr-2 mb-0">
						How many pages will you want custom built?
                    </label>
					<input className="pl-2" onChange={this.pageNumber} placeholder="0" id="pages" min="1" max="1000" step="1" type="number" value={this.state.pages} required/>
				</div>
				
		
			</form>
		)
	}
}