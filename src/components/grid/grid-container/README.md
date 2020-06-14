# GridContainer
A simple wrapper component for adding a Foundation `.grid-container` class to an element.

This component also registers the block wrapper so this component needs to be at the top of the DOM tree. 
The following code also needs to be added to the block settings object:

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
