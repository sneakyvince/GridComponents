# GridItem
A simple wrapper component for adding a Foundation `.cell` class to an element.

This component also registers the block wrapper so this component needs to be at the top of the DOM tree. 
The following code also needs to be added to the block settings object:

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
