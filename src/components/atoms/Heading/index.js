import React from "react"
import styles from './styles.css'

export const HeadingPresenter = (
    {
        tag: Tag,
        visualLevel,
        className,
        ...props
    }) => {
    return (
        <Tag className={[styles.h, styles[`h${visualLevel}`], className].join(' ')} {...props} />
    )
}

export const HeadingUnderlinedPresenter = (
    {
        tag: Tag,
        visualLevel,
        className,
        ...props
    }) => (
    <Tag className={[ styles.h, styles.underlined, styles[`h${visualLevel}`], className ].join(' ')} { ...props } />
);

const HeadingContainer = (
    {
        presenter,
        level = 2,
        visualLevel,
        ...props
    }) => {
    level = Math.max(0, Math.min(6, level)) // 0~6に丸め込む
    visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level
    const tag = `h${level}`

    return presenter({tag, visualLevel, ...props})
}

const Heading = (props) => {
    return (
        <HeadingContainer
            presenter={presenterProps => {
                return (<HeadingPresenter {...presenterProps}/>)
            }}
            {...props}
        />
    )
}
export default Heading

export const HeadingUnderlined = props => (
    <HeadingContainer presenter={ presenterProps => <HeadingUnderlinedPresenter { ...presenterProps } /> } { ...props } />
);

