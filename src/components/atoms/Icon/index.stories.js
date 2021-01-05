import React from "react"
import {action} from "@storybook/addon-actions/src"
import {TrashCanIcon} from "./index"

export default stories => stories
    .add('TrashCanIcon', () => <TrashCanIcon />)
    .add('クリッカブル', ()=> <TrashCanIcon onClick={action('アイコンがクリックされました')} />)
