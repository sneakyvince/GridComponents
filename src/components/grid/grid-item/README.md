# GridItem
A simple wrapper component for adding a Foundation `.cell` class to an element.

This component also registers the block wrapper so this component needs to be at the top of the DOM tree. 
Please make sure the following code is present inside the block's `index.js`:

```jsx
supports: {
	lightBlockWrapper: true,
},
```

The lightBlockWrapper option ensures the DOM tree in the editor mirrors that of the front-end.

## Usage

```jsx
import { GridItem } from '../../components/grid';

function edit()  {
	return (
		<GridItem className={className}>
			<div>content</div>
		</GridItem>
	)
}

function save()  {
	return (
		<GridItem.Content className={className}>
			<div>content</div>
		</GridItem.Content>
	)
}
```
