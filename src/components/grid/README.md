# Grid Components
This is a collection of Gutenberg Components made for easily using [Foundation XY-grid](https://get.foundation/sites/docs/xy-grid.html) inside blocks. 

## Usage in parent block

```jsx
import { GridContainer, GridRepeater } from '../../components/grid';

function edit()  {
	return (
		<GridContainer
			className={ className }
			userCanAlign={ true }
			attributes={ attributes }
			setAttributes={ setAttributes }
		>
			<GridRepeater 
				allowedBlocks={ [ 'block-slug/allowed-block' ] } 
				className="grid-margin-x grid-margin-y grid-padding-x"
			/>
	 	</GridContainer>
	)
}

function save()  {
	return (
		<GridRepeater.Content 
			className="grid-margin-x grid-margin-y grid-padding-x" 
		/>
	)
}
```

## Usage in child block

```jsx
import classnames from 'classnames';
import { GridItem } from '../../components/grid';

function edit()  {
	const classes = classnames( 'small-12 medium-6 large-12', className );

	return (
		<GridItem className={ classes }>
			content
		</GridItem>
	)
}

function save()  {
	const classes = classnames( 'small-12 medium-6 large-12', className );

	return (
		<GridItem.Content className={ classes }>
			content
		</GridItem.Content>
	)
}
```

