import * as allIcons from '@wordpress/icons';
import Fuse from 'fuse.js';

import IconCard from './IconCard';

const IconsList = ( { search } ) => {
	const icons = Object.keys( allIcons );
	const fuse = new Fuse( icons, {} );
	const result = search
		? fuse.search( search ).map( ( i ) => i.item )
		: icons;

	return (
		<div className="icons-list">
			{ result.map( ( icon, index ) => {
				if ( icon === 'Icon' ) {
					return null;
				}

				if ( icon === search ) {
					return null;
				}
				return (
					<IconCard
						key={ index }
						icon={ allIcons[ icon ] }
						name={ icon }
					/>
				);
			} ) }
		</div>
	);
};

export default IconsList;
