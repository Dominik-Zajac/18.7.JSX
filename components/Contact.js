var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} 
					src={'https://www.freeiconspng.com/uploads/address-book-icon--mono-business-icons-2--softiconsm-7.png'}/>
				<p className={'contactLabel'}>
					Imie: {this.props.contact.firstName}
				</p>
				<p className={'contactLabel'}>
					Nazwisko: {this.props.item.lastName}
				</p>
				<a className={'contactEmail'} 
					href={'mailto:'+ this.props.item.email}>
					Email: {this.props.item.email}
				</a>
			</div>
		)
	},
});