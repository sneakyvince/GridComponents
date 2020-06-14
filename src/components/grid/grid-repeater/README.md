# GridRepeater
A simple wrapper component for `InnerBlocks` that adds a  `.grid-x` by default to this element. 

Grid padding/margin are configurable via classes. Grid axis is overrideable to `"y"` with the `gridAxis` attribute. 

## Usage

```jsx
import { GridRepeater } from '../../components/grid';

function edit()  {
	return (
		<GridRepeater 
			allowedBlocks={ [ 'block-slug/allowed-block' ] } 
			className="grid-margin-x grid-margin-y grid-padding-x"
		/>
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
