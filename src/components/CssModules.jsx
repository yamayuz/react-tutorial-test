import classes from "./CssModules.module.scss"

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.titel}>CSS Modulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );
};