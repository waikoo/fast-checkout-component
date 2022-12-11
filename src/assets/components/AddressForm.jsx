import React from 'react';
import { SNewAddress, EditAddress } from '../css/styled';
import Form from './Form';
import Header from './Header';
import Title from './Title';

const AddressForm = (props) => {
	const { step, uiState, uiDispatch, shipping, dispatchShipping } = props;

	return (
		<SNewAddress>
			<EditAddress>
				<Header showEditAddress />
			</EditAddress>
			<Title step={step} />
			<Form
				uiState={uiState}
				uiDispatch={uiDispatch}
				shipping={shipping}
				dispatchShipping={dispatchShipping}
			/>
		</SNewAddress>
	);
};

export default AddressForm;
