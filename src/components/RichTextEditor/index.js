import React from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, convertToRaw } from "draft-js";

import "./styles.css";
import "draft-js/dist/Draft.css"

import BULLET_LIST from "../../assets/icons/editor/bullet-list.svg";
import NUMBER_LIST from "../../assets/icons/editor/number-list.svg";
import HEADING from "../../assets/icons/editor/heading.svg";
import BOLD from "../../assets/icons/editor/bold.svg";
import ITALIC from "../../assets/icons/editor/italic.svg";
import UNDERLINE from "../../assets/icons/editor/underline.svg";
import UNDO from "../../assets/icons/editor/undo.svg";
import REDO from "../../assets/icons/editor/redo.svg";

class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => {
            const editorJSON = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
            console.log(editorJSON);
            this.setState({ editorState });
        };

        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4, /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const { editorState } = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div className="RichEditor-root">
                <div className="RichEditor-controls-wrapper">
                    <div className="Controls-Left">
                        <BlockStyleControls
                            editorState={editorState}
                            onToggle={this.toggleBlockType}
                        />
                        <InlineStyleControls
                            editorState={editorState}
                            onToggle={this.toggleInlineStyle}
                        />
                    </div>
                    <div className="Controls-Right">
                        <StateControls
                            onChange={this.onChange}
                            editorState={editorState}
                        />
                    </div>
                </div>
                <div className={className} onClick={this.focus}>
                    <Editor
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.mapKeyToEditorCommand}
                        onChange={this.onChange}
                        placeholder="Tell us how to make it..."
                        ref="editor"
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} onMouseDown={this.onToggle}>
                <img src={this.props.icon} />
            </span>
        );
    }
}

const BLOCK_TYPES = [
    { label: 'Heading', style: 'header-three', icon: HEADING },
    { label: 'Bullet List', style: 'unordered-list-item', icon: BULLET_LIST },
    { label: 'Number List', style: 'ordered-list-item', icon: NUMBER_LIST },
];

const BlockStyleControls = (props) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    icon={type.icon}
                />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD', icon: BOLD },
    { label: 'Italic', style: 'ITALIC', icon: ITALIC },
    { label: 'Underline', style: 'UNDERLINE', icon: UNDERLINE },
];

const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    icon={type.icon}
                />
            )}
        </div>
    );
};

var STATE_STYLES = [
    { label: 'Undo', style: 'UNDO', icon: UNDO },
    { label: 'Redo', style: 'REDO', icon: REDO },
];

const StateControls = (props) => {
    const { editorState } = props;

    const onClick = (type) => {
        console.log(editorState.getUndoStack());
        if (type.label === 'Undo') {
            return props.onChange(EditorState.undo(editorState));
        }
        if (type.label === 'Redo') {
            return props.onChange(EditorState.redo(editorState));
        }
    }

    return (
        <div className="RichEditor-controls">
            {
                STATE_STYLES.map((type) => {
                    let className = 'undo-redo';

                    if (type.label === 'Undo' && editorState.getUndoStack().size === 0) {
                        className += ' disable'
                    } else if (type.label === 'Redo' && editorState.getRedoStack().size === 0) {
                        className += ' disable'
                    }

                    console.log(className);

                    return (
                        <span className={className} onClick={() => onClick(type)}>
                            <img src={type.icon} />
                        </span>
                    );
                })
            }
        </div>
    );
}


export default RichTextEditor;