import React from "react"
import {Button, PrimaryButton} from "./index";

export default stories => stories
    .add('デフォルト', () => <Button>デフォルトボタン</Button>)
    .add('プライマリー', () => <PrimaryButton>プライマリーボタン</PrimaryButton>)
