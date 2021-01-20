import React from "react";
import MailAuthForm from './index'
import {action} from "@storybook/addon-actions";
import {withStyle} from "../../utils/decorators";

export default stories => stories
    .add('デフォルト', () => withStyle({margin: '50px'})(<MailAuthForm onSubmit={action('送信ボタンがクリックされました')}/>))
