# ld-html
Html plugin for [last-draft](http://lastdraft.vace.nz)

[![npm version](https://badge.fury.io/js/ld-html.svg)](https://badge.fury.io/js/ld-html)

# Install
```jsx
npm install ld-html --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import html from 'ld-html'
let plugins = [html]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}
```

## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.ld-html-edit-wrapper {}
.ld-edit-html-column {}
.ld-edit-html-textarea {}
.ld-edit-html-actions-wrapper {}
.ld-edit-html-submit-button {}
.ld-edit-html-close-button {}
.ld-edit-html-button-close {}
.ld-button-html-edit {}
```
