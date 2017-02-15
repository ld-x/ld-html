import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default class HtmlModal extends Component {
  constructor (props) {
    super(props)
    this.state = { code: '' }
  }

  componentDidMount () {
    this.setCodeFromState()
  }

  setStateFromCode () {
    this.props.submitHtmlModal(this.state.code)
  }

  setCodeFromState() {
    const {editorState, onChange} = this.props
    const html = this.props.returnStateAsHtml()
    this.setState({ code: html })
    ReactDOM.findDOMNode(this.refs.textArea).focus()
  }

  onEditChange (event) {
    event.stopPropagation()
    const code = event.target.value
    this.setState({code: code})
  }

  submitHtml (event) {
    this.setStateFromCode()
  }

  onKeyDown (event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.props.closeModal()
    }
  }

  render () {
    const {code} = this.state

    return (
      <Wrapper style={{ width: `700px`, left: `-200px` }}>
        <EditColumn className='ld-edit-html-wrapper'>
          <EditTextArea
            className='ld-edit-html-textarea'
            ref='textArea'
            onChange={::this.onEditChange}
            value={code}
            onKeyDown={::this.onKeyDown} />
        </EditColumn>

        <EditActionsColumn className='ld-edit-actions-wrapper'>
          <EditButton
            className='ld-edit-html-submit-button'
            onClick={::this.submitHtml}
            type='button'
          >
          <svg fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
          </svg>
          </EditButton>

          <EditButton
            className='ld-edit-html-close-button'
            onClick={this.props.closeModal}
            type='button'
          >
          <svg width='24' height='24' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor' fillRule='evenodd'>
              <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
              <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
            </g>
          </svg>
          </EditButton>
        </EditActionsColumn>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  width: 500px;
`

const EditColumn = styled.div`
  flex: 0 0 90%;
  margin: 0.5rem;
  padding: 1rem;
`

const EditActionsColumn = styled.div`
  flex: 0 0 5%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
`

const EditTextArea = styled.textarea`
  border: 1px solid #eee;
  color: #181818 !important;
  font-size: 14px;
  line-height: 1.2;
  height: 140px !important;
  resize: none;
  vertical-align: bottom;
  width: 100%;
  background: transparent;
  padding: 0.5rem;

  &:hover {
    border: 1px solid #ccc;
  }

  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }
`

const EditButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: #ccc;

  &:hover {
    color: #9d1d20;
  }
`
