import React from "react"
import {action} from '@storybook/addon-actions'
import DeleteButton from "./index";

export default stories => stories
    .add('デフォルト', () => (
        <DeleteButton onClick={action('削除ボタンがクリックされました')} />
    ))
