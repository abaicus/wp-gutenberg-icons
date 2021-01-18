import { Icon } from '@wordpress/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const IconCard = ( { icon, name } ) => {
	const [ copied, setCopied ] = useState( false );

	const clickHandler = () => {
		setCopied( true );

		setTimeout( () => {
			setCopied( false );
		}, 1500 );
	};

	const copiedClasses = copied ? 'copied visible' : 'copied';

	return (
		<CopyToClipboard text={ name }>
			<button className="card" onClick={ clickHandler }>
				<div className={ copiedClasses }>
					<span>Copied</span>
				</div>
				<Icon icon={ icon } size={ 60 } />
				<span className="name">{ name }</span>
			</button>
		</CopyToClipboard>
	);
};

export default IconCard;
