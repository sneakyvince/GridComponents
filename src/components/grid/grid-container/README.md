# GridContainer
A simple wrapper component for adding a Foundation `.grid-container` class to an element.

This component also registers the block wrapper so this component needs to be at the top of the DOM tree. 
Please make sure the following code is present inside the block's `index.js`:

```jsx
supports: {
	lightBlockWrapper: true,
},
```

The lightBlockWrapper option ensures the DOM tree in the editor mirrors that of the front-end.

## Usage without alignment toolbar

```jsx
import { GridContainer } from '../../components/grid';

function edit()  {
	return (
		<GridContainer className={ className } >
			<div>content</div>
		</GridContainer>
	)
}

function save()  {
	return (
		<GridContainer.Content className={ className } >
			<div>content</div>
		</GridContainer.Content>
	)
}
```

## Usage with alignment toolbar
To use the alignment toolbar, add the following attribute to `block.json`:

```jsx
"attributes": {
		"align": {
			"type": "string",
			"default": ""
		}
}
```

Add a `userCanAlign={true}` attribute to the grid container:

```jsx
import { GridContainer } from '../../components/grid';

function edit()  {
	return (
		<GridContainer 
			userCanAlign={ true }
			attributes={ attributes }
			setAttributes={ setAttributes }
		>
			<div>content</div>
		</GridContainer>
	)
}

function save()  {
	return (
		<GridContainer.Content attributes={ attributes } >
			<div>content</div>
		</GridContainer.Content>
	)
}
```
